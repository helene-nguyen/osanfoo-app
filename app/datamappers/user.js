//~import module
import { client } from "../database.js";

const TABLE_NAME = "user";

//~datamapper
//^_____________Find all user
async function findAll() {
  const query = {
    text: `
        SELECT *
        FROM "${TABLE_NAME}";`
  };

  const result = await client.query(query);

  return result.rows;
}

//^_____________Find one user
async function findOne(targetId) {
  const query = {
    text: `
        SELECT *
        FROM "${TABLE_NAME}"
        WHERE "id" = $1;`,
    values: [targetId]
  };

  const result = await client.query(query);

  return result.rows[0];
}

//^_____________Create one user
async function createUser(userData) {
  const { username, email, password, role_id } = userData;

  const query = {
    text: `
        INSERT INTO "${TABLE_NAME}"
        ("username", "email", "password", "role_id")
        VALUES
        ($1, $2, $3, $4);`,
    values: [username, email, password, role_id]
  };

  const result = await client.query(query);

  return result.rowCount;
}

async function findOneByUsername(username) {
  const query = {
    text: `
        SELECT *
        FROM "${TABLE_NAME}"
        WHERE "username" = $1;`,
    values: [username]
  };

  const result = await client.query(query);

  return result.rows[0];
}

async function findOneByEmail(email) {
  const query = {
    text: `
        SELECT *
        FROM "${TABLE_NAME}"
        WHERE "email" = $1;`,
    values: [email]
  };

  const result = await client.query(query);

  return result.rows[0];
}

//^_____________Update one user

//^_____________Delete one user
async function deleteUser(targetId) {
  const query = {
    text: `
        DELETE FROM "${TABLE_NAME}"
        WHERE "id" = $1;`,
    values: [targetId]
    };
    
    const result = await client.query(query);

    return result.rowCount;

}

export { findAll, findOne, findOneByUsername, findOneByEmail, createUser, deleteUser };
