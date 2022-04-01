import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import getCurrency from '../fetchAPI';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      currencies: [],
    };
  }

  // tirar USDT do resultado da api ----CHECK
  // enviar o data por dispatch para uma action ---CHECK
  // terminar de ver a aula;
  // montar a action
  // montar o reducer
  async componentDidMount() {
    const data = await getCurrency();

    // REMOVENDO KEYS DE OBJETOS: https://www.horadecodar.com.br/2020/12/11/remover-propriedade-de-objeto-javascript/;
    delete data.USDT;
    this.setState({ currencies: data });
    const { currencies } = this.state;
    const { sendWallet } = this.props;
    sendWallet(currencies);
    console.log(data);
  }

  render() {
    // const { currencies } = this.state;
    return (
      <div>
        <Header />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  sendWallet: (currencies) => dispatch(ACTION(currencies)),
});

export default connect(null, mapDispatchToProps)(Wallet);
