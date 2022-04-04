import getCurrency from '../fetchAPI';

export const SAVE_LOGIN = 'SAVE_LOGIN';
export const SAVE_CURRENCY = 'SAVE_CURRENCY';

export const saveLogin = (email) => ({
  type: SAVE_LOGIN,
  email,
});

export const saveCurrency = (currencies) => ({
  type: SAVE_CURRENCY,
  currencies,
});

export const REQUEST_API = 'REQUEST_API';

export function fetchCurrency() {
  return async (dispatch) => {
    try {
      const data = await getCurrency();
      // REMOVENDO KEYS DE OBJETOS: https://www.horadecodar.com.br/2020/12/11/remover-propriedade-de-objeto-javascript/;
      delete data.USDT;
      const dataKeys = Object.keys(data);
      dispatch(saveCurrency(dataKeys));
    } catch (error) {
      console.log('ERRO');
    }
  };
}
