"use client";
import React, { useState } from "react";
import { toast } from "react-toastify";
import Form from "@/components/Form";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
function page() {
  // const
  const router = useRouter();
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
      new Promise((reslove, reject) =>
        fetch("api/prompt", {
          method: "post",
          body: body,
        })
          .then((res) => {
            //    console.log();
            if (res.status == 201) {
              //     toast("The Prompt Add Successfuly");
              reslove();
              router.push("/");
            }
          })
          .catch((err) => {
            reject();
            toast.error("Some Thing Went Worng");
          })
          .finally(() => setSubmitting(false))
      ),

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
