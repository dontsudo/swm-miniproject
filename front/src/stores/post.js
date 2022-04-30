import { defineStore } from "pinia";
import _ from "lodash";
import axios from "axios";

export const usePostStore = defineStore({
  id: "post",
  state: () => ({
    posts: [],
    loading: false,
    error: null,

    page: 1,
    pageSize: 10,
    hasMorePost: true,
  }),
  actions: {
    getPosts: _.throttle(async function () {
      if (this.hasMorePost) {
        this.error = null;
        this.loading = true;

        try {
          const { data } = await axios.get("/api/posts", {
            params: {
              sort: "id:desc",
              "pagination[page]": this.page,
              "pagination[pageSize]": this.pageSize,
            },
          });
          this.loading = false;

          const newPosts = data.data.map((post) => ({
            id: post.id,
            ...post.attributes,
          }));
          this.posts = [...this.posts, ...newPosts];
          this.page++;
          this.hasMorePost = data.data.length === 10;
        } catch (err) {
          this.error = err.toString();
          return;
        }
      }
    }, 1000),

    createPost(username, content) {
      axios
        .post("/api/posts", {
          data: {
            username,
            content,
          },
        })
        .then(() => {
          this.posts = [];
          this.page = 1;
          this.hasMorePost = true;

          this.getPosts();
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
