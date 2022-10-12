import { CreateAlert } from "../../../server/controllers/alert";

export default async function handler(req, res) {
  await CreateAlert();
  res.status(200).json({ result: true });
}
