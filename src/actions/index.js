import getCurrency from '../fetchAPI';

export const SAVE_LOGIN = 'SAVE_LOGIN';
export const SAVE_CURRENCY = 'SAVE_CURRENCY';
export const SAVE_EXPENSE = 'SAVE_EXPENSE';

export const saveLogin = (email) => ({
  type: SAVE_LOGIN,
  email,
});

/* export const saveCurrencyKeys = (currencies) => ({
  type: SAVE_CURRENCY,
  currencies,
}); */

export const saveCurrency = (currencies) => ({
  type: SAVE_CURRENCY,
  currencies,
});

export const saveExpense = (expenses) => ({
  type: SAVE_EXPENSE,
  expenses,
});

export function fetchCurrency() {
  return async (dispatch) => {
    try {
      const data = await getCurrency();
      const newData = Object.keys(data).filter((elem) => elem !== 'USDT');
      dispatch(saveCurrency(newData));
    } catch (error) {
      console.log('ERRO');
    }
  };
}
