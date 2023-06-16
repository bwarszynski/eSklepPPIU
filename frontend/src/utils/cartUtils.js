export const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
  };

  export const updateCart = (state, action) => {
  
  // Oblicz cenę przedmiotów w koszyku
  state.itemsPrice = addDecimals(
    state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  );

  // Oblicz cenę wysyłki, jeśli cena przedmiotów jest większa niż 100zł, wysyłka jest darmowa, w przeciwnym razie koszt wysyłki wynosi 10zł
  state.shippingPrice = addDecimals(state.itemsPrice > 100 ? 0 : 10);

  // Oblicz cenę podatku, podatek wynosi 23% ceny przedmiotów
  state.taxPrice = addDecimals(
    Number((0.23 * state.itemsPrice).toFixed(2))
  );

  // Oblicz całkowitą cenę, cena przedmiotów + cena wysyłki + cena podatku
  state.totalPrice = (
    Number(state.itemsPrice) +
    Number(state.shippingPrice) +
    Number(state.taxPrice)
  ).toFixed(2);

  // Zachowaj koszyk w localStorage
  localStorage.setItem('cart', JSON.stringify(state));
  
  return state;
  }