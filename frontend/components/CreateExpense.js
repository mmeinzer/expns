import { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import CurrencyInput from 'react-currency-input'
import ErrorMessage from './ErrorMessage';

const CREATE_EXPENSE_MUTATION = gql`
  mutation CREATE_EXPENSE_MUTATION(
    $amount: Int!
    $category: String!
    $desc: String!
  ) {
    createExpense(
      amount: $amount
      category: $category
      desc: $desc
    ) {
      id
    }
  }
`;

class CreateExpense extends Component {
  state = {
    description: '',
    displayAmount: '',
    category: '',
    amount: 0,
  }
  handleChange = (e, amountString, amountFloat) => {
    if (amountString) {
      this.setState({
        displayAmount: e.target.value,
        amount: amountFloat * 100,
      })
    }
    else {
      const { name, value } = e.target; 
      this.setState({[name]: value});
    }
  }
  render() {
    return (
      <Mutation
        mutation={CREATE_EXPENSE_MUTATION}
        variables={this.state}
      >
        {(createExpense, { loading, error }) => (
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              const res = await createExpense({
                variables: {
                  amount: this.state.amount,
                  category: this.state.category,
                  desc: this.state.description,
                }
              });
            }}
          >
            <ErrorMessage error={error} />
            <fieldset disabled={loading} aria-busy={loading}>
              <label htmlFor="amount">
                Amount
                <CurrencyInput
                  id="amount"
                  name="amount"
                  placeholder="Amount"
                  prefix="$"
                  value={this.state.displayAmount}
                  onChangeEvent={this.handleChange}
                />
              </label>
              <label htmlFor="description">
                Description
                <input
                  type="text"
                  id="description"
                  name="description"
                  placeholder="Description"
                  required
                  value={this.state.description}
                  onChange={this.handleChange}
                />
              </label>
              <label htmlFor="category">
                Category
                <input
                  type="text"
                  id="category"
                  name="category"
                  placeholder="Category"
                  required
                  value={this.state.category}
                  onChange={this.handleChange}
                />
              </label>
              <button type="submit">Submit</button>
            </fieldset>
          </form>
        )}
      </Mutation>
    )
  }
}

export default CreateExpense;
export { CREATE_EXPENSE_MUTATION };
