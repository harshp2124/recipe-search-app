import axios from "axios";

const APP_ID = "b8029f79";
const APP_KEY = "897e9f4029e03c6ad29dd174e9c86645";

export const getRecipe = async (q = "milk") => {
  try {
    const URL = `https://api.edamam.com/search?q=${q}&app_id=${APP_ID}&app_key=${APP_KEY}`;
    const {
      data: { hits },
    } = await axios.get(URL);
    return hits;
  } catch (error) {
    console.log(error);
  }
};
