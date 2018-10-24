import bcrypt from 'bcrypt'

export default {
  preSave: function(next) {
    if (!this.isModified('password')) return next();

    const salt = bcrypt.genSaltSync(10);
    this.password = bcrypt.hashSync(this.password, salt);

    next();
  }
}
