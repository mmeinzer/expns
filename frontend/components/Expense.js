import formatCents from "../lib/formatMoney";
import DeleteExpense from "./DeleteExpense";

const Expense = props => {
  const { expense } = props;
  return (
    <tr>
      <td>{new Date(expense.createdAt).toLocaleDateString("en-US")}</td>
      <td>{expense.desc.replace(/^\w/, c => c.toUpperCase())}</td>
      <td>{expense.category}</td>
      <td>{formatCents(expense.amount)}</td>
      <td>
        <DeleteExpense id={expense.id}>X</DeleteExpense>
      </td>
    </tr>
  );
};

export default Expense;
