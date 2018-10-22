import Check from '../../handlers/check'

export default {
  async getInfoByToken(ctx) {
    Check.user();
  }
};
