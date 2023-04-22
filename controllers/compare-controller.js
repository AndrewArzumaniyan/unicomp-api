import { Category } from "../models/category.js";
import { University } from "../models/university.js";

const getComparePage = async (req, res) => {
  const title = 'Home';
  let categories = await Category
    .find()
    .catch((err) => {
      console.log(err);
      res.status(404).json({
        "success": false
      });
    });
  let universities = await University
    .find()
    .catch((err) => {
      console.log(err);
      res.status(404).json({
        "success": false
      });
    });

  res.status(200).json({ title, categories, universities });
}

const redirectComparePage = (req, res) => {
  res.redirect('/');
}

export { getComparePage, redirectComparePage }