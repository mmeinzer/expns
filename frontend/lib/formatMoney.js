export default function(costInCents) {
  const options = {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2
  };
  const formatter = new Intl.NumberFormat("en-US", options);
  return formatter.format(-costInCents / 100);
}
