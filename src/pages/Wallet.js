import React from 'react';
import { connect } from 'react-redux';
import { fetchCurrency } from '../actions';
import Header from '../components/Header';

class Wallet extends React.Component {

  // tirar USDT do resultado da api ----CHECK
  // enviar o data por dispatch para uma action ---CHECK
  // terminar de ver a aula;
  // montar a action
  // montar o reducer
  componentDidMount() {
    const { getCurrency } = this.props;
    getCurrency();
  }

  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getCurrency: () => dispatch(fetchCurrency()),
});

export default connect(null, mapDispatchToProps)(Wallet);
