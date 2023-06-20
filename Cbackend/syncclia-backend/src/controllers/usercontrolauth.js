import sql from 'mssql';
import config from '../db/config.js';
import bcrypt from 'bcrypt';

export const signup = async (req, res) => {
  const { UserID, Username, Email, Password } = req.body;
  const hashedPassword = bcrypt.hashSync(Password, 10);


  try {

    const userCon = await sql.connect(config.sql)
    const  result = userCon.request()
     .input('Username', sql.VarChar, Username)
     .input('Email', sql.VarChar, Email)
     .query(` SELECT * FROM Users WHERE Username = @Username || Email = @Email `)
     const user = result.recordset[0]
     if(user){
      res.status(409).json({message: "user already exists"})
     } else {
      let pool = await sql.connect(config.sql);
    await pool.request()
      .input('UserID', sql.Int, UserID)
      .input('Username', sql.VarChar, Username)
      .input('Email', sql.VarChar, Email)
      .input('hashedPassword', sql.VarChar, hashedPassword)
      .query('INSERT INTO Users (UserID,Username, Email, Password) VALUES (@UserID, @Username, @Email, @hashedPassword)');

    res.status(200).send({ message: 'User created successfully' });
  }} catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'An error occurred while creating the user' });
  } finally {
    sql.close();
  } };

     



    

export const login = async (req, res) => {
  const { Email, Password } = req.body
  let pool = await sql.connect(config.sql)
  const result = await pool.request()
    .input( 'Email', sql.VarChar, Email)
    .query( `SELECT * FROM Users WHERE EMAIL = @Email`);

  const user = result.recordset[0];
  if(!user){
    res.status(401).json({error: 'Authentication failed, wrong credentials'})
  } else {
    if( !bcrypt.compareSync(Password, user.hashedPassword)){
      res.status(401).json({error: "Authentication failed, wrong details"})
    }else{
      const token = jwt.sign({ Username: user.Username, Email: user.Email}, config.jwt_secret, { expiresIn: '1hr'});
      res.status(200).json({ Username: user.Username, Email: user.Email, token: token})
    }
  }

  
}
