import _ from 'lodash'
import User from '../user'
import Services from '../../services'

export default {
  async signUp(ctx) {
    const userData = _.pick(ctx.request.body, User.createFields)
    const { _id } = await User.create(userData);
    const user = await User.findOne({ _id });

    ctx.body = { data: user }
  },

  async signIn(ctx) {
    const { email, password } = ctx.request.body
    if (!email || !password) ctx.throw(400, { message: 'Invalid data' });

    const user = await User.findOne({ email });
    if (!user) ctx.throw(400, { message: 'User not found' });

    if (!user.comparePasswords(password)) ctx.throw(400, { message: 'Invalid password' });

    const token = await Services.JWT.genToken({ email });
    ctx.body = { data: token }
  },

  async getInfoByToken(ctx) {
    if (!ctx.user) ctx.throw(403, { message: 'Forbidden' });

    ctx.body = ctx.user
  }
};
