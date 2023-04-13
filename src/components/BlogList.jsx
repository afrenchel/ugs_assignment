import React, { useState } from "react";
import { useFetch } from "./useFetchHook";
import Modal from "./Modal";
import Post from "./Post";

const BlogList = () => {
  const { data } = useFetch("https://jsonplaceholder.typicode.com/posts");
  const users = useFetch("https://jsonplaceholder.typicode.com/users");

  const [isOpen, setIsOpen] = useState(false);
  const [author, setAuthor] = useState({});

  const openDetails = (userId) => {
    setIsOpen(true);
    const modalUser = users.data.find((user) => user.id === userId);
    setAuthor(modalUser);
  };

  return (
    <div className="blog-list">
      {data.map((post) => {
        return (
          <Post
            key={post.id}
            post={post}
            handleClick={() => openDetails(post.userId)}
          />
        );
      })}
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} user={author} data={data} />
    </div>
  );
};

export default BlogList;
