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
    }
  }
`;

const StyledExpenses = styled.div`
  display: grid;
  background: ${props => props.theme.lightBlue};
  box-shadow: ${props => props.theme.boxShadow};
  color: ${props => props.theme.offWhite};
  border: 2px solid ${props => props.theme.black};
  h2 {
    padding-left: 2rem;
  }
  div:nth-child(even) {
    background: ${props => props.theme.lightGrey};
    color: ${props => props.theme.black}
  }
`;

export default class Expenses extends Component {
  render() {
    return (
      <StyledExpenses>
        <h2>Expenses</h2>
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
    )
  }
}