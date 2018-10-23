import formatCents from '../lib/formatMoney';
import styled from 'styled-components';

const ExpenseDetails = styled.tr`
`;

const RightData = styled.td`
  text-align: right;
`;

const CenterData = styled.td`
  text-align: center;
`;

const Expense = props => {
  const { expense } = props;
  return (
    <ExpenseDetails>
      <CenterData>{new Date(expense.createdAt).toLocaleDateString("en-US")}</CenterData>
      <td>{expense.desc.replace(/^\w/, c => c.toUpperCase())}</td>
      <td>{expense.category}</td>
      <RightData>{formatCents(expense.amount)}</RightData>
    </ExpenseDetails>
  );
}

export default Expense