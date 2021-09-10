const posts = (posts = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.paylaod;
    case "CREATE":
      console.log("posts in reducers:", posts, action.paylaod);
      return [...posts, action.paylaod];
    default:
      return posts;
  }
};
export default posts;
