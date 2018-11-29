import _ from 'lodash'
import User from '../user/models'
import Services from '../../services'

export default {
  async signUp(ctx) {
    const { _id } = await User.create(_.pick(ctx.request.body, User.createFields));
    const user = await User.findOne({ _id }).select({ __v: 0 });

    ctx.status = 201
    ctx.body = { data: user }
  },

  async signIn(ctx) {
    const { email, password } = ctx.request.body
    if (!email || !password) ctx.throw(400, { message: 'Invalid data' });

    const user = await User.findOne({ email }).select({ createdAt: 0, updatedAt: 0, __v: 0 });
    if (!user) ctx.throw(400, { message: 'User not found' });
    if (!user.comparePasswords(password)) ctx.throw(400, { message: 'Invalid password' });
    const token = await Services.JWT.genToken({ email });

    ctx.body = { data: { token: token, user: user } }
  }
}
