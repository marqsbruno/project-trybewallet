import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

class Form extends React.Component {
  render() {
    const { currencies } = this.props;
    return (
      <div>
        <form>
          <label htmlFor="value">
            <input
              data-testid="value-input"
              id="value"
              type="text"
              placeholder="valor"
            />
          </label>
          <label htmlFor="description">
            <input
              data-testid="description-input"
              id="description"
              type="text"
              placeholder="descrição"
            />
          </label>
          <label htmlFor="currency">
            Moeda
            <select
              data-testid="currency-input"
              id="currency"
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
            >
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de crédito">VolCartão de créditovo</option>
              <option value="Cartão de débito">Cartão de débito</option>
            </select>
          </label>
          <select
            data-testid="tag-input"
            id="tag"
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps)(Form);
