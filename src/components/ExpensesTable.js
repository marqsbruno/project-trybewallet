import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

class ExpensesTable extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    const { expenses } = this.props;
    console.log(expenses);
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <th>Descrição</th>
              <th>Tag</th>
              <th>Método de pagamento</th>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Moeda de conversão</th>
              <th>Editar/Excluir</th>
            </tr>
          </tbody>
          {
            expenses.map((elem) => (
              <tbody key={ elem.id }>
                <tr>
                  <td>{ elem.description }</td>
                  <td>{ elem.tag }</td>
                  <td>{ elem.method }</td>
                  <td>{ Number(elem.value).toFixed(2) }</td>
                  <td>{ elem.exchangeRates[elem.currency].name }</td>
                  <td>{ Number(elem.exchangeRates[elem.currency].ask).toFixed(2) }</td>
                  <td>
                    {
                      (Number(elem.value)
                      * Number(elem.exchangeRates[elem.currency].ask)).toFixed(2)
                    }
                  </td>
                  <td>Real</td>
                  <td>EXCLUIR</td>
                </tr>
              </tbody>
            ))
          }
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

ExpensesTable.propTypes = ({
  expenses: PropTypes.string,
}).isRequire;

export default connect(mapStateToProps)(ExpensesTable);
