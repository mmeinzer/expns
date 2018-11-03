import formatCents from "../lib/formatMoney";
import DeleteExpense from "./DeleteExpense";
import { classes } from "./Expenses";

const dateOptions = {
  month: "numeric",
  day: "numeric"
};

const Expense = props => {
  const { expense } = props;
  return (
    <tr className={classes.tr}>
      <td className={classes.td}>
        {new Date(expense.createdAt).toLocaleDateString("en-US", dateOptions)}
      </td>
      <td className={classes.td}>
        {expense.desc.replace(/^\w/, c => c.toUpperCase())}
      </td>
      <td className={classes.td}>{expense.category}</td>
      <td className={classes.td}>{formatCents(expense.amount)}</td>
    </tr>
  );
};

export default Expense;
