import _ from 'lodash'
import Post from './models'

export default {
  async create(ctx) {
    if (!ctx.user) ctx.throw(403, { message: 'Forbidden' });

    const { _id } = await Post.create({
      ..._.pick(ctx.request.body, Post.createFields),
      userId: ctx.user._id,
    });
    const summary = await Post.findOne({ _id });

    ctx.status = 201
    ctx.body = { data: summary };
  },

  async update(ctx) {
    if (!ctx.user) ctx.throw(403, { message: 'Forbidden' });

    const {
      params: { id: _id },
      request: { body },
      user: { _id: userId },
    } = ctx

    const post = await Post.findOne({ _id });

    if (!post) ctx.throw(404, `Summary with id "${_id}" not found`);
    if (post.userId !== userId.toHexString()) ctx.throw(403, `Forbidden. Summary with id "${_id}" dont belong to user with id ${userId}`);

    const newData = _.pick(body, Post.createFields);
    post.set(newData);

    const updatedPost = await post.save();

    ctx.body = { data: updatedPost };
  }
};
