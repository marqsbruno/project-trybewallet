import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { fetchCurrency } from '../actions';
import ExpensesTable from '../components/ExpensesTable';
import Form from '../components/Form';
import Header from '../components/Header';

class Wallet extends React.Component {
  async componentDidMount() {
    const { getCurrency } = this.props;
    await getCurrency();
  }

  render() {
    const { expenses } = this.props;
    console.log(expenses);
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

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

Wallet.propTypes = ({
  getCurrency: PropTypes.func,
}).isRequire;

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
