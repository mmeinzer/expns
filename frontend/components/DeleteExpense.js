import { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { ALL_EXPENSES_QUERY } from './Expenses';

const DELETE_EXPENSE_MUTATION = gql`
  mutation DELETE_EXPENSE_MUTATION($id: ID!) {
    deleteExpense(id: $id) {
      id
    }
  }
`;

class DeleteExpense extends Component {
  render() {
    return (
      <Mutation
        mutation={DELETE_EXPENSE_MUTATION}
        update={this.update}
      >
        {(deleteExpense, { error }) => (
          <button
            onClick={(e) => {
              deleteExpense({
                variables: {
                  id: this.props.id,
                },
                refetchQueries: [{
                  query: ALL_EXPENSES_QUERY,
                }]
              })
            }}
          >
            {this.props.children}
          </button>
        )}
      </Mutation>
    );
  }
}

export default DeleteExpense;