import config from "../db/config.js"
import sql from 'mssql'


export const getActions = async(req, res)=>{
    try {
        let pool = await sql.connect(config.sql);
        const request = await pool.request();
        const result= await request.query(`select * from Actions`);
        console.log(result);

        !result.recordset[0] ? res.status(404).json({message: 'actions not found'}) :
        res.status(200).json(result.recordset);


        
    } catch (error) {
        console.log('error fetching actions', error);

        res.status(201).json({ message: 'error getting actions'})

        
    } finally{
        sql.close();
    }

}



export const getAction= async (req, res) => {
    try {
        const { ActionId } = req.params;
        let pool = await sql.connect(config.sql);
        const result = await pool.request()
            .input("ActionId", sql.Int,ActionId)


            .query("select * from Actions where ActionId = @ActionId");
        !result.recordset[0] ? res.status(404).json({ message: 'action not found' }) :
            res.status(200).json(result.recordset);
    } catch (error) {
        // console.log(error);
        res.status(500).json({ error: 'An error occurred while retrieving action' });
    } finally {
        sql.close();
    }
};


// // // Create a new action
export const createAction = async (req, res) => {
    try {
        const { ActionID, Title, Reflection, UserID} = req.body;
        let pool = await sql.connect(config.sql);
        await pool.request()
            .input("ActionID", sql.Int, ActionID)
            .input("Title", sql.VarChar, Title)
            .input("Reflection", sql.Text, Reflection)
            .input("UserID", sql.Int, UserID)

            .query("INSERT INTO Actions (ActionID, Title, Reflection, UserID) VALUES (@ActionID, @Title, @Reflection, @UserID)");
        res.status(201).json({ message: 'Action created successfully' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'An error occurred while creating the action' });
    }
     finally {
        sql.close();
    }
};

// // // Delete action
export const deleteAction = async (req, res) => {
    try {
        const { ActionID } = req.params;
        await sql.connect(config.sql);
        await sql.query`DELETE FROM Actions WHERE ActionID = ${ActionID}`;
        res.status(200).json({ message: 'action deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while deleting the action' });
    } finally {
        sql.close();
    }
};