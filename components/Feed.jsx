"use client";
import React, { useState, useEffect } from "react";
import PromptCard from "@/components/PromptCard";
function Feed() {
  const [searchTerm, setSearchTerm] = useState("");
  const [posts, setPosts] = useState("");

  const HandelSerachTerm = (e) => setSearchTerm(e.target.value);
  useEffect(() => {
    (async () => {
      const res = await fetch("/api/prompt");
      const posts = await res.json();
      console.log(posts);
      setPosts(posts.prompts);
    })();
  }, [searchTerm]);

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="search for tag and user name"
          value={searchTerm}
          onChange={HandelSerachTerm}
          className="search_input peer"
        />
      </form>
      <PromptCardList data={posts} />
    </section>
  );
}

const PromptCardList = ({ data }) => {
  let handleEdit = () => "jksa";
  let handleDelete = () => "jksa";
  let handleTagClick = () => "jksa";

  return (
    <section className="prompt_layout">
      {data &&
        data.map((el, index) => (
          <PromptCard
            handleTagClick={handleTagClick}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            post={el}
            key={el.id + " " + index}
          />
        ))}
    </section>
  );
};

export default Feed;
