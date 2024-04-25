import Freecurrencyapi from "@everapi/freecurrencyapi-js";

const freecurrencyapi = new Freecurrencyapi(
  "fca_live_9GvM3jrq8zzpr7Uad5G1dWBvA4a27bHn3k5YOTbo"
);

export async function convertCurrency(fromCurrency, toCurrency, units) {
  const res = await freecurrencyapi.latest({
    base_currency: fromCurrency,
    currencies: toCurrency,
  });
  const multiplier = res.data[toCurrency];
  // console.log(multiplier*units);
  return multiplier * units;
}

//  convertCurrency('USD', 'INR', 5)
