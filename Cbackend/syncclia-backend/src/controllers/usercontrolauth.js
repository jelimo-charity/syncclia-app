import sql from 'mssql';
import config from '../db/config.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'

export const loginRequired = (req, res, next) => {
  if (req.user) {
      next();
  } else {
      return res.status(401).json({ message: 'Unauthorized user!' });
  }
};

export const signup = async (req, res) => {
  const { Username, Email, Password } = req.body;
  const hashedPassword = await bcrypt.hash(Password, 10); // Use async/await instead of bcrypt.hashSync

  try {
    const pool = await sql.connect(config.sql);
    const result = await pool.request()
      .input('Username', sql.VarChar, Username)
      .input('Email', sql.VarChar, Email)
      .query(`SELECT * FROM Users WHERE Username = @Username OR Email = @Email`);

    const user = result.recordset[0];
    if (user) {
      res.status(409).json({ message: "User already exists" });
    } else {
      await pool.request()
        .input('Username', sql.VarChar, Username)
        .input('Email', sql.VarChar, Email)
        .input('hashedPassword', sql.VarChar, hashedPassword)
        .query('INSERT INTO Users (Username, Email, Password) VALUES (@Username, @Email, @hashedPassword)');

      res.status(200).send({ message: 'User created successfully' });
    }
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'An error occurred while creating the user' });
  } finally {
    sql.close();
  }
};


export const login = async (req, res) => {
  
    const { Username, Password } = req.body;

    let pool = await sql.connect(config.sql);
    let result = await pool.request()
      .input('Username', sql.VarChar, Username)
      .query('SELECT * FROM Users WHERE Username = @Username');

    const user = result.recordset[0];
    if (!user) {
      return res.status(401).json({ error: 'no user, Invalid credentials' });
    } else if(user){
        if(!bcrypt.compareSync(Password, user.Password)){
          res.status(401).json({error: 'Authentication failed, wrong password'})
        };
      } else{
        let token = `JWT ${jwt.sign({email: user.Email, Username: user.Username, UserID: user.UserID},
         ` ${process.env.jwt_secret}`)}`;
  
         const { UserID, Username, Email} = user;
         return res.json({ UserID: UserID, Username: Username, Email: Email, token: token})
      }
    } 
   


// export const login = async (req, res) => {
//   try {
//     const { Username, hashedPassword } = req.body;

//     let pool = await sql.connect(config.sql);
//     const result = await pool.request()
//       .input('Username', sql.VarChar, Username)
//       .query('SELECT * FROM Users WHERE Username = @Username');

//     const user = result.recordset[0];

//     if (!user) {
//       return res.status(401).json({ error: 'no user, Invalid credentials' });
//     } else if (user) {
//       const passwordMatch = await bcrypt.compare(hashedPassword, user.Password);
//       if (!passwordMatch) {
//         return res.status(401).json({ error: 'Authentication failed, wrong password' });
//       }
//     }

//     const token = jwt.sign(
//       { UserID: user.UserID, Username: user.Username, Email: user.Email },
//       config.jwt_secret,
//       { expiresIn: '1hr' }
//     );

//     const { UserID, Email } = user;
//     res.json({ UserID: UserID, Username: Username, Email: Email, token: token });
//   } catch (error) {
//     console.error('Error during login:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// };




