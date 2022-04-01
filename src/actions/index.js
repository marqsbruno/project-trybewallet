export const SAVE_LOGIN = 'SAVE_LOGIN';
export const WALLET_STATE = 'WALLET_STATE';

export const saveLogin = (email) => ({
  type: SAVE_LOGIN,
  email,
});

export const saveWallet = (wallet) => ({
  type: WALLET_STATE,
  wallet,
});
