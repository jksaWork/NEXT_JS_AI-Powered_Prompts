import React from "react";
import Feed from "@/components/Feed";
const metadata = {
  title: "Hello World",
};
function page() {
  return (
    <div className="flex flex-col justify-center">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center"> AI-Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        Promptopia is an open-source AI prompting tool for modern world to
        discover, create and share creative prompts
      </p>
      <Feed />
    </div>
  );
}

export default page;
