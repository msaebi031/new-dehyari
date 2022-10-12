import { CreateLogin } from "../../../server/controllers/login";

export default async function handler(req, res) {
  const { password, email } = req.body;
  const login = await CreateLogin({
    email,
    password,
  });
  res.status(200).json(login);
}
