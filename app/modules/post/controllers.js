import _ from 'lodash'
import Post from './models'

export default {
  async create(ctx) {
    const data = {
      ..._.pick(ctx.request.body, Post.createFields),
      userId: ctx.user._id
    };

    // Posts limited
    // const { userId } = data;
    // const postCountByUserId = await Post.count({ userId });
    // if (postCountByUserId === 3) throw Error('The user cannot create more 3 Summary');

    const { _id } = await Post.create(data);
    const post = await Post.find({ _id });

    ctx.body = { data: post };
  },

  async update(ctx) {
    const {
      params: { id: _id },
      request: { body },
      user: { _id: userId },
    } = ctx

    const post = await Post.findOne({ _id }).select({ __v: 0 });

    if (post.userId !== userId.toHexString()) ctx.throw(403, `Forbidden. Post with id "${_id}" dont belong to user with id ${userId}`);
    post.set(_.pick(body, Post.createFields));
    const updatedPost = await post.save();

    ctx.body = { data: updatedPost };
  },

  async delete(ctx) {
    const {
      params: { id: _id },
      user: { _id: userId },
    } = ctx

    const post = await Post.findOne({ _id }).select({ __v: 0 });

    if (post.userId !== userId.toHexString()) ctx.throw(403, `Forbidden. Post with id "${_id}" dont belong to user with id ${userId}`);
    await post.remove();

    ctx.body = { data: { id: _id} };
  },

  async getPost(ctx) {
    const {
      params: { id: _id }
    } = ctx

    const post = await Post.findOne({ _id }).select({ __v: 0 });

    ctx.body = { data: post };
  },

  async getUserPosts(ctx) {
    const { user: { _id: userId } } = ctx;
    const posts = await Post.find({ userId }).select({ __v: 0 });

    ctx.body = { data: posts };
  }
};
