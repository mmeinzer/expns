import { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';
import Expense from './Expense';

const ALL_EXPENSES_QUERY = gql`
  query ALL_EXPENSES_QUERY {
    expenses {
      id
      amount
      category
      desc
      createdAt
    }
  }
`;

const ExpensesSection = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: 1fr;
`;

const StyledExpenses = styled.table`
  border-collapse: collapse;
  td {
    border: 1px solid black;
  }
`;

const BoxShadowDiv = styled.div`
  box-shadow: ${props => props.theme.boxShadow};
`;

export default class Expenses extends Component {
  render() {
    return (
      <ExpensesSection>
        <h2>Transactions</h2>
        <StyledExpenses>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
          </tr>
          <Query query={ALL_EXPENSES_QUERY}>
            {({ data, error, loading }) => {
              if (loading) return <p>Loading...</p>
              if (error) return <p>Error: {error.message}</p>
              return (
                data.expenses.map(expense => <Expense expense={expense}/>)
                )
              }}
          </Query>
        </StyledExpenses>
      </ExpensesSection>
    )
  }
}