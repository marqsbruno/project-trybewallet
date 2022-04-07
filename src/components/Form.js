import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { fetchCurrency, saveExpense } from '../actions';
import getCurrency from '../fetchAPI';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
  }

  handleChange = ({ target }) => {
    const { id, value } = target;
    this.setState({ [id]: value });
    // const { currencies } = this.props;
    // console.log(currencies);
  }

  handleClick = async () => {
    const { addExpense } = this.props;
    const newCurr = await getCurrency();
    const { id, value, description, currency, method, tag } = this.state;
    const expense = {
      id,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates: newCurr,

    };
    addExpense(expense);
    this.setState((prevState) => ({
      id: prevState.id + 1,
      value: '',
    }));
  }

  render() {
    const { currencies } = this.props;
    const { value } = this.state;
    return (
      <div>
        <form>
          <label htmlFor="value">
            <input
              data-testid="value-input"
              id="value"
              type="text"
              placeholder="valor"
              onChange={ this.handleChange }
              value={ value }
            />
          </label>
          <label htmlFor="description">
            <input
              data-testid="description-input"
              id="description"
              type="text"
              placeholder="descrição"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="currency">
            Moeda
            <select
              data-testid="currency-input"
              id="currency"
              onChange={ this.handleChange }
            >
              {
                currencies.map((elem) => (
                  <option key={ elem } value={ elem }>{ elem }</option>
                ))
              }
            </select>
          </label>
          <label htmlFor="method">
            <select
              data-testid="method-input"
              id="method"
              onChange={ this.handleChange }
            >
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
              <option value="Cartão de débito">Cartão de débito</option>
            </select>
          </label>
          <select
            data-testid="tag-input"
            id="tag"
            onChange={ this.handleChange }
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
          <button
            type="button"
            onClick={ this.handleClick }
          >
            Adicionar despesa
          </button>
        </form>
      </div>
    );
  }
}

Form.propTypes = ({
  currencies: PropTypes.arrayOf(PropTypes.string),
  addExpense: PropTypes.func,
}).isRequire;

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  addExpense: (state) => dispatch(saveExpense(state)),
  getNewCurrencies: () => dispatch(fetchCurrency()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
