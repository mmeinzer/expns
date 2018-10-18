const Mutation = {
  async createExpense(parent, args, ctx, info) {
    const expense = await ctx.db.mutation.createExpense({
      data: {
        ...args
      }
    }, info)

    return expense
  }
};

module.exports = Mutation;