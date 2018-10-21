export const checkUser = () => (ctx, next) => {
  if (!ctx.user) ctx.throw(403, { message: 'Forbidden' });
  next();
}
