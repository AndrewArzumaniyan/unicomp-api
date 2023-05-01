import { Category } from "../models/category.js";
import { University } from "../models/university.js";
import { Gid } from "../models/gid.js";

const getCategories = async (req, res) => {
  let categories = await Category
    .find()
    .catch((err) => {
      console.log(err);
      res.status(404).json({
        "success": false
      });
    });

  res.status(200).json(categories);
}


const getUniversities = async (req, res) => {
  let universities = await University
    .find()
    .catch((err) => {
      console.log(err);
      res.status(404).json({
        "success": false
      });
    });

  res.status(200).json(universities);
}

const getGid = async (req, res) => {
  let gid = await Gid
    .find()
    .catch((err) => {
      console.log(err);
      res.status(404).json({
        "success": false
      });
    });

  res.status(200).json(gid);
}

export { getCategories, getUniversities, getGid }