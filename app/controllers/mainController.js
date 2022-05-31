//~import modules
import { _500 } from "./errorController.js";
import {fetchAllUsers} from '../datamappers/user.js'

//~controller
async function renderHomePage(req, res) {
    try {
        const users = await fetchAllUsers();
        
        console.log(users);
       
  } catch (err) {
    _500(err, req, res);
  }
};

export { renderHomePage };
