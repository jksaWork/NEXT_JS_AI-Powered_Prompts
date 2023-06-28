"use client";
import React, { useState } from "react";
import { toast } from "react-toastify";
import Form from "@/components/Form";
import { useSession } from "next-auth/react";
function page() {
  // const
  const { data: session } = useSession();
  const [post, setPost] = useState({
    tag: "",
    prompt: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    //     toast("🦄 Wow so easy!");
    setSubmitting(true);
    const body = JSON.stringify({ ...post, userId: session?.user.id });
    console.log(body);
    toast.promise(
      fetch("api/prompt", {
        method: "post",
        body: body,
      })
        .then((res) => {})
        .catch((err) => console.log(err.message))
        .finally(() => setSubmitting(false)),

      {
        pending: "Insert Prompt To System",
        success: "Insert Prompt Done 👌",
        error: "Insert Prompt Faild 🤯",
      }
    );
  };
  return (
    <Form
      type="create"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={handleSubmit}
    />
  );
}

export default page;
