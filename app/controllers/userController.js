//~import modules
import { _500 } from "./errorController.js";
import { findAll, findOne, createUser, findOneByUsername, findOneByEmail } from "../datamappers/user.js";

//~controller
async function fetchAllUsers(req, res) {
  try {
    const users = await findAll();

    res.json(users);
  } catch (err) {
    _500(err, req, res);
  }
}

async function fetchOneUser(req, res) {
  try {
    const user = await findOne(req.params.id);

    res.json(user);
  } catch (err) {
    _500(err, req, res);
  }
}

async function createNewUser(req, res) {
  try {
    //~get datas
    const { username, email, password, role_id } = req.body;
    //remove after test
    console.log(req.body);
    //

    // await createUser(req.body);

  } catch (err) {
    _500(err, req, res);
  }
}

export { fetchAllUsers, fetchOneUser, createNewUser };
