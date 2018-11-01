import _ from 'lodash'
import Post from './models'

export default {
  async create(ctx) {
    if (!ctx.user) ctx.throw(403, { message: 'Forbidden' });

    const { _id } = await Post.create({
      ..._.pick(ctx.request.body, Post.createFields),
      userId: ctx.user._id,
    });

    const post = await Post.findOne({ _id });
    if (!post) ctx.throw(404, `Post with id "${_id}" not found`);

    ctx.status = 201
    ctx.body = { data: post };
  },

  async update(ctx) {
    if (!ctx.user) ctx.throw(403, { message: 'Forbidden' });

    const {
      params: { hash: hash },
      request: { body },
      user: { _id: userId },
    } = ctx

    const post = await Post.findOne({ hash });
    if (!post) ctx.throw(404, `Post with id "${hash}" not found`);
    if (post.userId !== userId.toHexString()) ctx.throw(403, `Forbidden. Post with id "${hash}" dont belong to user with id ${userId}`);

    post.set(_.pick(body, Post.createFields));

    const updatedPost = await post.save();
    ctx.body = { data: updatedPost };
  },

  async getPost(ctx) {
    const {
      params: { hash: hash }
    } = ctx

    const post = await Post.findOne({ hash });
    if (!post) ctx.throw(404, `Post with link "${hash}" not found`);

    ctx.body = { data: post };
  },

  async delete(ctx) {
    if (!ctx.user) ctx.throw(403, { message: 'Forbidden' });

    const {
      params: { hash: hash },
      user: { _id: userId },
    } = ctx

    const post = await Post.findOne({ hash })
    if (!post) ctx.throw(404, `Post with id "${hash}" not found`);
    if (post.userId !== userId.toHexString()) ctx.throw(403, `Forbidden. Post with id "${hash}" dont belong to user with id ${userId}`);

    await post.remove();
    ctx.body = { data: { id: hash} };
  }
};
