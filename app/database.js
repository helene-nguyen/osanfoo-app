//~import pg module
//module pg for CommonJs, need to import by default first
import pkg from 'pg';
const { Client } = pkg;

//~create new client
const client = new Client();

//~connect client
client.connect();

//~export client
export { client };