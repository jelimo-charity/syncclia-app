import config from "../db/config.js"
import sql from 'mssql'


export const getBlogs = async(req, res)=>{
    try {
        let pool = await sql.connect(config.sql);
        const request = await pool.request();
        const result= await request.query(`select * from BlogList`);
        console.log(result);

        !result.recordset[0] ? res.status(404).json({message: 'blogs not found'}) :
        res.status(200).json(result.recordset);

 
        
    } catch (error) {
        console.log('error fetching blogs', error);

        res.status(201).json({ message: 'error getting blogs'})
        

        
    } finally{
        sql.close();
    }

}



export const getBlog = async (req, res) => {
    try {
        const { BlogId } = req.params;
        let pool = await sql.connect(config.sql);
        const result = await pool.request()
            .input("BlogId", sql.Int,BlogId)


            .query("select * from BlogList where BlogId= @BlogId");
        !result.recordset[0] ? res.status(404).json({ message: 'blog not found' }) :
            res.status(200).json(result.recordset);
    } catch (error) {
        // console.log(error);
        res.status(500).json({ error: 'An error occurred while retrieving blog' });
    } finally {
        sql.close();
    }
};


//create a new blog

export const createBlog = async (req, res) => {
    try {
        const { BlogID, Title, Content, AuthorName} = req.body;
        let pool = await sql.connect(config.sql);
        await pool.request()
            .input("BlogID", sql.Int, BlogID)
            .input("Title", sql.VarChar, Title)
            .input("Content", sql.Text, Content)
            .input("AuthorName", sql.VarChar, AuthorName)

            .query("INSERT INTO BlogList (BlogID, Title, Content, AuthorName) VALUES (@BlogID, @Title, @Content, @AuthorName)");
        res.status(201).json({ message: 'blog created successfully' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'An error occurred while creating the blog' });
    }
     finally {
        sql.close();
    }
};

// // // Delete a blog
export const deleteBlog = async (req, res) => {
    try {
        const { BlogID } = req.params;
        await sql.connect(config.sql);
        await sql.query`DELETE FROM BlogList WHERE BlogID = ${BlogID}`;
        res.status(200).json({ message: 'blog deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while deleting the blog' });
    } finally {
        sql.close();
    }
};