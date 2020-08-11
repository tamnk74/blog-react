import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Alert extends React.Component {
  constructor(props) {
    super(props);
    this.timeOut = null;
  }

  UNSAFE_componentWillMount() {
    console.log('Alert: componentWillMount');
  }

  componentDidMount() {
    console.log('Alert: componentDidMount');
  }
  componentDidUpdate() {
    console.log('Alert: componentDidUpdate');
  }

  render() {
    const { alert } = this.props;
    if (alert.type === 'error' && alert.error) {
      return (
        <div className="container">
          <div className="alert alert-danger">
            <strong>STATUS CODE {alert.error.statusCode}: </strong>
            {alert.error.message}
          </div>
        </div>
      );
    }
    return (
      <div className={alert.type ? 'col-md-6 col-md-offset-3' : 'd-none'}>
        <div className="alert alert-warning">
          <strong>{alert.message}</strong>
        </div>
      </div>
    );
  }
}

Alert.propTypes = {
  alert: PropTypes.object,
};

const mapStateToProps = (state) => ({
  alert: state.alert,
});

const connectedAlert = connect(mapStateToProps)(Alert);
export { connectedAlert as Alert };
