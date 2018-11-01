import User from './models'
import Post from '../post/models'

export default {
  async getCurrentUser(ctx) {
    if (!ctx.user) ctx.throw(403, { message: 'Forbidden' });

    const { user: { _id } } = ctx;
    const user = await User.findOne({ _id }).select({ __v: 0 });

    ctx.body = { data: user };
  },

  async getUserPosts(ctx) {
    if (!ctx.user) ctx.throw(403, { message: 'Forbidden' });

    const { user: { _id: userId } } = ctx;
    const posts = await Post.find({ userId }).select({ __v: 0 });

    ctx.body = { data: posts };
  }
};
