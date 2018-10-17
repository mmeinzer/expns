import CurrencyInput from 'react-currency-masked-input'

const Add = props => (
  <>
    <h2>Add</h2>
    <CurrencyInput
      name="amountInput"
      placeholder="0.00"
      onChange={(_, value) => console.log(value)}
    />
  </>
)

export default Add
