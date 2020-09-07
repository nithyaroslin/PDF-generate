import React from "react";

const PostsComponent = ({ posts }) => {
  return (
    <div className="container">
      <table className="table table-striped table-bordered">
        <thead className="thead-dark">
          <tr>
            <th scope="col">UserID</th>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">Body</th>
            <th scope="col">Col-5</th>
            <th scope="col">Col-6</th>
            <th scope="col">Col-7</th>
            <th scope="col">Col-8</th>
            <th scope="col">Col-9</th>
            <th scope="col">Col-10</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td>{post.userId}</td>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.body}</td>
              <td>Column Five</td>
              <td>Column Six</td>
              <td>Column Seven</td>
              <td>Column Eight</td>
              <td>Column Nine</td>
              <td>Column Ten</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PostsComponent;
