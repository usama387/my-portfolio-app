import { getSinglePost } from "@/lib/data";
import React from "react";

const SinglePage = async ({ params }) => {
  const { id } = params;

  const post = await getSinglePost(id);
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.desc}</p>
      <span>{post.link}</span>
    </div>
  );
};

export default SinglePage;
