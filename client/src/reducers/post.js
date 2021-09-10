import React from "react";
import { getPosts } from "../action/post";

export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      getPosts();
      return action.paylaod;
    case "CREATE":
      return state;
    default:
      return state;
  }
};
