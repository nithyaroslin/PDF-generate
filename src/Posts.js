import React, { useEffect, useState } from "react";
import generatePDF from "./services/reportGenerator";
import axios from "axios";
//import PostsComponent from "./PostsComponent";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getAllPosts = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        // console.log(response.data);
        setPosts(response.data);
      } catch (err) {
        console.log("error : " + { err });
      }
    };
    getAllPosts();
  }, []);

  return (
    <div>
      <div>
        <div className="container mb-2 mt-2 p-2">
          <p>Generate the report in a table</p>
          <button
            className="btn btn-primary"
            onClick={() => generatePDF(posts)}
          >
            Generate PDF
          </button>
        </div>
      </div>
      {/* <PostsComponent posts={posts} /> */}
    </div>
  );
};

export default Posts;
