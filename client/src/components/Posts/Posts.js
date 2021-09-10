import React from "react";

import Post from "../Posts/Post/Post";
import useStyles from "./styles";

export default function Posts() {
  const classes = useStyles();

  return (
    <>
      <Post />
    </>
  );
}
