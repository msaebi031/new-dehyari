const News = require("../models/news");

const CreateNews = async ({ name, p, text, dateCreate }) => {
  const checkExistingUser = await News.count({ where: { name } });

  if (checkExistingUser) {
    return { result: false, error: "نام خبر وارد شده تکراری است!" };
  } else {
    const data = await News.create({ name, p, text, dateCreate });
    return { result: true, data };
  }
};

const DeleteNews = async ({ id }) => {
  await News.destroy({ where: { id } });
};

const SelectAllNews = async () => {
  return await News.findAll({
    order: [["id", "DESC"]],
  });
};
const SelectAllNewsHome = async ({ limit }) => {
  return await News.findAll({
    order: [["id", "DESC"]],
    limit,
  });
};

const SelectNews = async ({ name, id }) => {
  if (id) {
    return await News.findOne({ where: { id } });
  } else {
    return await News.findOne({ where: { name } });
  }
};

const SelectNewsOfPage = async ({ offset, limit }) => {
  const orders = await News.findAll({ offset, limit, order: [["id", "DESC"]] });
  return orders;
};

const NewsCount = async () => {
  const newsCount = await News.count();
  return newsCount;
};

const UpdateNews = async ({ id, name, p, text }) => {
  const news = await News.findOne({ where: { id } });
  news.name = name;
  news.p = p;
  news.text = text;
  await news.save();
};

module.exports = {
  CreateNews,
  SelectAllNews,
  SelectNews,
  SelectNewsOfPage,
  SelectAllNewsHome,
  NewsCount,
  DeleteNews,
  UpdateNews,
};
