const Mutations = {
  async createExpense(parent, args, ctx, info) {
    const expense = await ctx.db.mutation.createExpense({
      data: {
        ...args
      }
    }, info)

    return expense
  },
  async deleteExpense(parent, args, ctx, info) {
    const where = { id: args.id };
    const item = await ctx.db.query.expense({ where }, `{ id desc }`);
    return ctx.db.mutation.deleteExpense({ where }, info);
  }
};

module.exports = Mutations;