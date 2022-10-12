import { CreateNews } from "../../../server/controllers/news";

export default async function handler(req, res) {
  const { name, p, text, dateCreate } = req.body;
  const news = await CreateNews({ name, p, text, dateCreate });
  res.status(200).json(news);
}
