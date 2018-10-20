import formatCents from '../lib/formatMoney';
import styled from 'styled-components';

const ExpenseDetails = styled.div`
  color: ${props => props.theme.offWhite};
  background: ${props => props.theme.blue};
  padding: 1rem;
  text-align: right;
`;

const Expense = props => {
  const { expense } = props;
  return (
    <ExpenseDetails>{formatCents(expense.amount)}</ExpenseDetails>
  );
}

export default Expense