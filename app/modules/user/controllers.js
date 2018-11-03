import User from './models'

export default {
  async getCurrentUser(ctx) {
    const { user: { _id } } = ctx;
    const user = await User.findOne({ _id }).select({ __v: 0 });

    ctx.body = { data: user };
  }
};
