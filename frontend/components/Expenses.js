import { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Expense from "./Expense";

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

class Expenses extends Component {
  render() {
    return (
      <div>
        <h2>Transactions</h2>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Description</th>
              <th>Category</th>
              <th>Amount</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            <Query query={ALL_EXPENSES_QUERY}>
              {({ data, error, loading }) => {
                if (loading) return <p>Loading...</p>;
                if (error) return <p>Error: {error.message}</p>;
                return data.expenses.map(expense => (
                  <Expense expense={expense} key={expense.id} />
                ));
              }}
            </Query>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Expenses;
export { ALL_EXPENSES_QUERY };
