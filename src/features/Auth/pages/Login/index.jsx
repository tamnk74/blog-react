import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import { connect } from 'react-redux';
import { loginAction, googleLoginAction } from '../../store/actions';
import { GOOGLE_CLIENT_ID, FACEBOOK_APP_ID } from '../../../../config';
import './styles.scss';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    console.log(GOOGLE_CLIENT_ID);
    // reset login status
    // this.props.dispatch(authActions.logout());

    this.state = {
      email: '',
      password: '',
      submitted: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.responseFacebook = this.responseFacebook.bind(this);
    this.responseGoogle = this.responseGoogle.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  responseFacebook(response) {
    console.log(response);
  }
  responseGoogle(response) {
    const { error, tokenId } = response;
    if (error) {
      return;
    }

    this.props.googleLogin({
      tokenId,
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({ submitted: true });
    const { email, password } = this.state;
    if (email && password) {
      this.props.login({
        email,
        password,
      });
    }
  }

  render() {
    const { loggingIn } = this.props;
    const { email, password, submitted } = this.state;
    return (
      <div className="card bg-light">
        <ul className="nav nav-tabs tab-menu">
          <li className="nav-item col">
            <a
              className="nav-link active"
              data-toggle="tab"
              href="#social-login"
            >
              <h3>Social Login </h3>
            </a>
          </li>
          <li className="nav-item col">
            <a className="nav-link" data-toggle="tab" href="#normal-login">
              <h3>Normal Login</h3>
            </a>
          </li>
        </ul>

        <div className="tab-content">
          <div className="tab-pane container active" id="social-login">
            <div className="d-flex justify-content-center align-items-center social">
              <GoogleLogin
                clientId={GOOGLE_CLIENT_ID}
                buttonText="Login by google"
                onSuccess={this.responseGoogle}
                onFailure={this.responseGoogle}
                cookiePolicy={'single_host_origin'}
              />
            </div>
          </div>
          <div className="tab-pane container fade" id="normal-login">
            <form name="form" onSubmit={this.handleSubmit}>
              <div
                className={
                  'form-group' + (submitted && !email ? ' has-error' : '')
                }
              >
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={email}
                  onChange={this.handleChange}
                />
                {submitted && !email && (
                  <div className="help-block">Email is required</div>
                )}
              </div>
              <div
                className={
                  'form-group' + (submitted && !password ? ' has-error' : '')
                }
              >
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  value={password}
                  onChange={this.handleChange}
                />
                {submitted && !password && (
                  <div className="help-block">Password is required</div>
                )}
              </div>
              <div className="form-group">
                <button className="btn btn-success">Login</button>
                {false && (
                  <FacebookLogin
                    cssClass="btn btn-primary"
                    appId={FACEBOOK_APP_ID}
                    autoLoad={false}
                    fields="name,email,picture"
                    callback={this.responseFacebook}
                    icon="fa-facebook"
                  />
                )}

                {loggingIn && (
                  <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                )}
                <Link to="/signup" className="btn btn-link">
                  Register
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

SignIn.propTypes = {
  login: PropTypes.func,
  googleLogin: PropTypes.func,
  loggingIn: PropTypes.bool,
};

const mapDispatchToProps = (dispatch) => ({
  login: (user) => dispatch(loginAction(user)),
  googleLogin: (user) => dispatch(googleLoginAction(user)),
});

const mapStateToProps = (state) => ({
  token: state.auth.token,
});

const connectedSignIn = connect(mapStateToProps, mapDispatchToProps)(SignIn);

export { connectedSignIn as SignIn };
