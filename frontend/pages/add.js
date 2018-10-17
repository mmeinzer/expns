import CurrencyInput from 'react-currency-input'

const Add = props => (
  <>
    <h2>Add</h2>
    <CurrencyInput
      value={props.value || "0.00"}
      onChange={(_, value, float) => console.log(_, value, float)}
    />
  </>
)

export default Add
