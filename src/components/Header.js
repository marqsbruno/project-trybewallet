import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

class Header extends React.Component {
  sumValues = () => {
    const { expenses } = this.props;
    const sum = expenses.reduce((acc, curr) => {
      const expenseValue = Number(curr.value);
      const askValue = Number(curr.exchangeRates[curr.currency].ask);
      // ask e value são string
      acc += expenseValue * askValue;
      return acc;
    }, 0);
    return sum.toFixed(2);
  }

  render() {
    const { email } = this.props;
    return (
      <div>
        <p data-testid="email-field">{email}</p>
        <p data-testid="total-field">{ this.sumValues() }</p>
        <p data-testid="header-currency-field">BRL</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = ({
  email: PropTypes.string,
}).isRequire;

export default connect(mapStateToProps)(Header);
