import { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import CurrencyInput from "react-currency-input";
import ErrorMessage from "./ErrorMessage";
import { ALL_EXPENSES_QUERY } from "./Expenses";

const CREATE_EXPENSE_MUTATION = gql`
  mutation CREATE_EXPENSE_MUTATION(
    $amount: Int!
    $category: String!
    $desc: String!
  ) {
    createExpense(amount: $amount, category: $category, desc: $desc) {
      id
    }
  }
`;

const initialState = {
  description: "",
  displayAmount: "",
  category: "",
  amount: 0
};

const classes = {
  form: "shadow-md rounded px-4 py-3 bg-white",
  fieldset: "flex flex-col",
  label: "block text-grey-darker text-sm mb-2",
  input:
    "shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight mb-4",
  submit:
    "bg-purple py-2 px-3 text-grey-lightest rounded mt-3 hover:bg-purple-dark"
};

class CreateExpense extends Component {
  state = initialState;
  handleChange = (e, amountString, amountFloat) => {
    if (amountString) {
      this.setState({
        displayAmount: e.target.value,
        amount: Math.floor(amountFloat * 100)
      });
    } else {
      const { name, value } = e.target;
      this.setState({ [name]: value });
    }
  };
  render() {
    return (
      <Mutation mutation={CREATE_EXPENSE_MUTATION} variables={this.state}>
        {(createExpense, { loading, error }) => (
          <form
            className={classes.form}
            onSubmit={async e => {
              e.preventDefault();
              await createExpense({
                variables: {
                  amount: this.state.amount,
                  category: this.state.category,
                  desc: this.state.description
                },
                refetchQueries: [
                  {
                    query: ALL_EXPENSES_QUERY
                  }
                ]
              });
              this.setState(initialState);
            }}
          >
            <ErrorMessage error={error} />
            <fieldset disabled={loading} aria-busy={loading}>
              <div className={classes.fieldset}>
                <label className={classes.label} htmlFor="amount">
                  Amount
                </label>
                <CurrencyInput
                  className={classes.input}
                  id="amount"
                  name="amount"
                  placeholder="Amount"
                  prefix="$"
                  value={this.state.displayAmount}
                  onChangeEvent={this.handleChange}
                />
                <label className={classes.label} htmlFor="description">
                  Description
                </label>
                <input
                  className={classes.input}
                  type="text"
                  id="description"
                  name="description"
                  placeholder="Description"
                  required
                  value={this.state.description}
                  onChange={this.handleChange}
                />
                <label className={classes.label} htmlFor="category">
                  Category
                </label>
                <input
                  className={classes.input}
                  type="text"
                  id="category"
                  name="category"
                  placeholder="Category"
                  required
                  value={this.state.category}
                  onChange={this.handleChange}
                />
                <button className={classes.submit} type="submit">
                  Submit
                </button>
              </div>
            </fieldset>
          </form>
        )}
      </Mutation>
    );
  }
}

export default CreateExpense;
export { CREATE_EXPENSE_MUTATION };
