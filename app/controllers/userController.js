//~import modules
import { _500, _401 } from "./errorController.js";
import { findAll, findOne, createUser, findOneByUsername, findOneByEmail } from "../datamappers/user.js";
//#protect DB
import bcrypt from "bcrypt";
import emailValidator from "email-validator";
import passwordValidator from "password-validator";
const schema = new passwordValidator();
//Add properties
schema.is().min(6); // Minimum length 6 // Blacklist these values //~controller
/* .is().max(100) // Maximum length 100
.has().uppercase(1) // Must have uppercase letters
.has().lowercase(1) // Must have lowercase letters
.has().digits(2) // Must have at least 2 digits
.has().symbols(1) // Must have at least 1 symbol
.has().not().spaces() // Should not have spaces
.is().not().oneOf(['Passw0rd', 'Password123']) */ async function fetchAllUsers(
  req,
  res
) {
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
    let { username, email, password, passwordConfirm, role_id } = req.body;

    //~if user already exist
    const userExist = await findOneByUsername(username);
    const emailExist = await findOneByEmail(email);

    if (userExist) return _401(req, res).json("User already exist !");
    if (emailExist) return _401(req, res).json("Email already exist !");
    if (!emailValidator.validate(email)) return res.json(`${email} is not a valid email !`);
    if (password !== passwordConfirm) return res.json("Not the same password !");
    if (!schema.validate(password)) return res.json(`Password must have 6 characters minimum`);

    //~encrypt password
    const salt = await bcrypt.genSalt(10);
    password = await bcrypt.hash(password, salt);
    console.log("password: ", password);

    //~create user
    await createUser({...req.body, password});

    res.json(`Welcome ${username}, you are regitered !`);

  } catch (err) {
    _500(err, req, res);
  }
}

export { fetchAllUsers, fetchOneUser, createNewUser };
