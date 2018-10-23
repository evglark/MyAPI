export default {
  createFields: ['email', 'firstName', 'lastName', 'password'],
  findOneWithPublicFields: (params, cb) => {
    this.findOne(params, cb).select({ password: 0, _id: 0, __v: 0 });
  }
}
