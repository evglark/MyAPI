const user = () => (ctx, next) => {
  if (!ctx.user) ctx.throw(403, { message: 'Forbidden' });
  next();
}

const Check = { user }
export default Check
