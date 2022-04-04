import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { fetchCurrency } from '../actions';
import Form from '../components/Form';
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
        <Form />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getCurrency: () => dispatch(fetchCurrency()),
});

Wallet.propTypes = ({
  getCurrency: PropTypes.func,
}).isRequire;

export default connect(null, mapDispatchToProps)(Wallet);
