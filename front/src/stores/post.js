import { defineStore } from "pinia";
import axios from "axios";

export const usePostStore = defineStore({
  id: "post",
  state: () => ({
    posts: [],
    loading: false,
    error: null,
  }),
  actions: {
    getPosts(page, pageSize) {
      this.error = this.posts = null;
      this.loading = true;
      axios
        .get("/api/posts", {
          params: {
            sort: "id:desc",
            "pagination[page]": page,
            "pagination[pageSize]": pageSize,
          },
        })
        .then(({ data }) => {
          this.loading = false;
          this.posts = data.data.map((post) => ({
            id: post.id,
            ...post.attributes,
          }));
        })
        .catch((err) => {
          this.error = err.toString();
        });
    },
    createPost(username, content) {
      axios
        .post("/api/posts", {
          data: {
            username,
            content,
          },
        })
        .then(() => {
          this.getPosts(1, 10);
        })
        .catch((err) => {
          this.error = err.toString();
        });
    },
    likePost(id) {
      axios
        .post(`/api/posts/${id}/like`)
        .then(() => {
          const post = this.posts.find((post) => post.id === id);
          post.likes += 1;
        })
        .catch((err) => {
          this.error = err.toString();
        });
    },
  },
});
