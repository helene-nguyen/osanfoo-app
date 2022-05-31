//~import module
import { client } from "../database.js";

const TABLE_NAME = "user";

//~datamapper
async function fetchAllUsers() {
  const query = {
    text: `
        SELECT * FROM "${TABLE_NAME}";`
    };
    
    const result = await client.query(query);

    return result.rows;
};

export { fetchAllUsers };
