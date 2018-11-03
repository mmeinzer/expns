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

export const classes = {
  container: "w-full lg:max-w-xl",
  header: "text-indigo-darker mb-6",
  table: "table-fixed w-full whitespace-no-wrap text-indigo-darkest",
  thead: "text-left",
  tr: "hover:bg-purple hover:text-white",
  td: "h-6",
  th: "h-6",
  tbody: "mt-3"
};

class Expenses extends Component {
  render() {
    return (
      <div className={classes.container}>
        <h2 className={classes.header}>Transactions</h2>
        <table className={classes.table}>
          <thead className={classes.thead}>
            <tr>
              <th className={classes.th + " w-12"}>Date</th>
              <th className={classes.th + " w-24"}>Desc</th>
              <th className={classes.th + " w-24"}>Category</th>
              <th className={classes.th + " w-24"}>Amount</th>
            </tr>
          </thead>
          <tbody className={classes.tbody}>
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
