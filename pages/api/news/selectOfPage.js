import { NewsCount, SelectNewsOfPage } from "../../../server/controllers/news";

export default async function handler(req, res) {
  const { offset, limit } = req.body;
  const data = await SelectNewsOfPage({ offset, limit });
  const count = await NewsCount();
  res.status(200).json({ result: true, count, data });
}
