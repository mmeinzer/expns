const Query = {
  expenses(parent, args, ctx, info) {
    const expenses = ctx.db.query.expenses({}, info)

    return expenses
  }
};

module.exports = Query;