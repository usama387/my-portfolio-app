import { connectToDb } from "./connectToDb";
import { Product } from "./models";

// function to find all posts in the db
export const getPosts = async () => {
  try {
    connectToDb();
    const posts = await Product.find();
    return posts;
  } catch (error) {
    console.log(error);
    throw new Error("Error fetching posts");
  }
};

// function to single post in the db using id of the post
export const getSinglePost = async (id) => {
  try {
    connectToDb();
    const post = await Product.findById(id);
    return post;
  } catch (error) {
    console.log(error);
    throw new Error("Error fetching single post");
  }
};
