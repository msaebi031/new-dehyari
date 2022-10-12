import { SelectAlert } from "../../../server/controllers/alert";

export default async function handler(req, res) {
  const data = await SelectAlert();

  res.status(200).json({ result: true, data });
}
