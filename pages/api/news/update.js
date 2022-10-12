import { UpdateNews } from "../../../server/controllers/news";

export default async function handler(req, res) {
  const { name, p, text, id } = req.body;
  await UpdateNews({ id, name, p, text });

  res.status(200).json({ result: true });
}
