module.exports = {
  routes: [
    {
      method: "POST",
      path: "/posts/:id/like",
      handler: "post.likePost",
    },
  ],
};
