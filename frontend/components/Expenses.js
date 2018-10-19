import { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

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

export default class Expenses extends Component {
  render() {
    return (
      <div>
        <p>Expenses!</p>
        <Query query={ALL_EXPENSES_QUERY}>
          {({ data, error, loading }) => {
            if (loading) return <p>Loading...</p>
            if (error) return <p>Error: {error.message}</p>
            return <p>{data.expenses.length} expenses</p>
          }}
        </Query>
      </div>
    )
  }
}