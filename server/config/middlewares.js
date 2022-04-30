module.exports = [
  "strapi::errors",
  "strapi::security",
  "strapi::cors",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
  {
    name: "strapi::cors",
    config: {
      enabled: true,
      header: "*",
      origin: ["http://localhost:8080", "http://146.56.146.29:1337/"],
    },
  },
];
