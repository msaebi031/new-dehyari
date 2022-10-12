import { DeleteNews } from "../../../server/controllers/news";

export default async function handler(req, res) {
  const { id } = req.body;
  await DeleteNews({ id });

  res.status(200).json({ result: true });
}
