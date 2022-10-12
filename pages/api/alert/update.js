import { UpdateAlert } from "../../../server/controllers/alert";

export default async function handler(req, res) {
  const { power, p } = req.body;
  console.log(power);
  await UpdateAlert({ power, p });

  res.status(200).json({ result: true });
}
