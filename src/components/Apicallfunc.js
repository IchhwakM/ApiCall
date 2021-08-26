import React, { useEffect, useState } from "react";

const Apicallfunc = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url)
      .then((resp) => resp.json())
      .then((resp) => setPosts(resp));
  }, []);
  return (
    <div>
      {posts.map((post) => (
        <div>{`${post.id}, ${post.title}`}</div>
      ))}
    </div>
  );
};

export default Apicallfunc;
