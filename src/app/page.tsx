"use client";

import axios from "axios";
import Link from "next/link";
import React from "react";

const Home = () => {
  const comment = async () => {
    const { data } = await axios.post("/api/comment", {
      text: "hello",
      tags: ["TypeScript"],
    });

    console.log(data);
  };

  return (
    <div className="flex flex-col gap-8 items-start">
      <Link href="/comments" prefetch={false}>
        See comments
      </Link>
      <button onClick={comment}>make comments</button>
    </div>
  );
};

export default Home;
