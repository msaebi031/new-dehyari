import { NewsCount } from "../../../server/controllers/news";

export default async function handler(req, res) {
  const data = await NewsCount();

  res.status(200).json({ result: true, count: data });
}
