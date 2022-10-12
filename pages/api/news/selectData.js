import { SelectAllNews, SelectNews } from "../../../server/controllers/news";

export default async function handler(req, res) {
  const { id } = req.body;
  if (id) {
    const data = await SelectNews({ id });
    res.status(200).json({ result: true, data });
  } else {
    const data = await SelectAllNews();
    res.status(200).json({ result: true, data });
  }
}
