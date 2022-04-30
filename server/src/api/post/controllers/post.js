"use strict";

/**
 *  post controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::post.post", ({ strapi }) => ({
  async likePost(ctx) {
    const { id } = ctx.params;
    const entity = await strapi.service("api::post.post").findOne(id);
    const data = await strapi.service("api::post.post").update(id, {
      data: {
        likes: entity.likes + 1,
      },
    });

    ctx.body = data;
  },
}));
