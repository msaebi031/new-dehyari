import { SelectAllNewsHome } from "../../../server/controllers/news";

export default async function handler(req, res) {
  const data = await SelectAllNewsHome({ limit: 4 });
  res.status(200).json({ result: true, data });
}
