import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { saveLogin } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  }

  // REGEX: https://www.horadecodar.com.br/2020/09/07/expressao-regular-para-validar-e-mail-javascript-regex/

  VALID = () => {
    const { email, password } = this.state;
    const regex = /\S+@\S+\.\S+/;
    const validEmail = regex.test(email);
    const minPass = 6;
    const validPass = password.length >= minPass;
    if (validEmail && validPass) {
      return false;
    }
    return true;
  }

  handleClick = () => {
    const { email } = this.state;
    const { sendLogin } = this.props;
    const { history } = this.props;
    sendLogin(email);
    history.push('/carteira');
  }

  render() {
    const { email, password } = this.props;
    return (
      <div className="email">
        <form>
          <label htmlFor="email">
            <input
              type="email"
              data-testid="email-input"
              id="email"
              name="email"
              onChange={ this.handleChange }
              placeholder="email"
              value={ email }
            />
          </label>
          <label htmlFor="password">
            <input
              type="password"
              data-testid="password-input"
              id="password"
              name="password"
              onChange={ this.handleChange }
              placeholder="password"
              value={ password }
            />
          </label>
          <button
            type="button"
            onClick={ this.handleClick }
            disabled={ this.VALID() }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  sendLogin: (email) => dispatch(saveLogin(email)),
});

export default connect(null, mapDispatchToProps)(Login);

Login.propTypes = ({
  sendLogin: PropTypes.func,
}).isRequire;
