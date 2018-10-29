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

    ctx.body = { data: summary };
  }
};
