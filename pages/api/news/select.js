import { SelectNews } from "../../../server/controllers/news";

export default async function handler(req, res) {
  const { name } = req.body;
  const data = await SelectNews({ name });

  res.status(200).json({ result: true, data });
}
