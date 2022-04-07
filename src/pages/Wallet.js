import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { fetchCurrency } from '../actions';
import ExpensesTable from '../components/ExpensesTable';
import Form from '../components/Form';
import Header from '../components/Header';

class Wallet extends React.Component {
  // tirar USDT do resultado da api ----CHECK
  // enviar o data por dispatch para uma action ---CHECK
  // montar a action ok
  // montar o reducer ok
  async componentDidMount() {
    const { getCurrency } = this.props;
    await getCurrency();
  }

  render() {
    return (
      <div>
        <Header />
        <Form />
        <ExpensesTable />
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
