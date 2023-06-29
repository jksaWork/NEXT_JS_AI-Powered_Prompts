"use client";
import React, { useState, useEffect } from "react";
import Profile from "@/components/Profile";
import { useSession } from "next-auth/react";
function page() {
  const handleEdit = () => console.log("HandelEdit");
  const handleDelete = () => console.log("HandelDelete");
  const [posts, setPosts] = useState([]);
  const { data: session } = useSession();
  const id = session?.user.id;
  useEffect(() => {
    const fetchPosts = async () => {
      const data = await fetch(`api/users/${id}/prompts`);
      const posts = await data.json();
      setPosts(posts);
    };
    if (id) fetchPosts();
  }, id);
  return (
    <div>
      <Profile
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        name="My"
        data={posts}
        description="My Profile  in  this Awasome Profile"
      />
    </div>
  );
}

export default page;
