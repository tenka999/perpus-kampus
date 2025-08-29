import loginRegisUser from "../services/auth-service.js";
import { responseFormat } from "../utils/helper.js";
async function loginUser(req, res) {
  const { email, password } = req.body;
  const result = await loginRegisUser.loginUser(email, password);
  if (!result){
    res
      .status(500)
      .json(responseFormat("error", undefined, "User login failed"));
  }

  res
    .status(200)
    .json(responseFormat("success", result, "User logged in successfully"));
}

async function registerUser(req, res) {
  console.log('regis')
  const { email, password,nim,nidn, name } = req.body;
  console.log( email, password, name, nidn, nim );
  const result = await loginRegisUser.registerUser(email, password, name,nim,nidn);
  if (!result)
    res
      .status(500)
      .json(responseFormat("error", null, "User registration failed"));
  res
    .status(201)
    .json(responseFormat("success", result, "User registered successfully"));
}

export default { loginUser, registerUser };
