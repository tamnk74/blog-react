import React from 'react';
import { connect } from 'react-redux';
import { alertActions } from '../../store/actions'

class Alert extends React.Component {
  constructor(props) {
    super(props);
    this.timeOut = null;
  }

  componentWillMount() {
    console.log('Alert: componentWillMount');
  }

  componentDidMount() {
    console.log('Alert: componentDidMount');
  }
  componentDidUpdate() {
    console.log('Alert: componentDidUpdate');
    clearTimeout(this.timeOut);
    this.timeOut = setTimeout(() => {
      this.props.dispatch(alertActions.clear());
    }, 10000);
  }

  render() {
    console.log('Alert: render');
    const { alert } = this.props;
    if (alert.type === 'error' && alert.error) {
      return (
        <div className="container">
          <div className="alert alert-danger">
            <strong>STATUS CODE {alert.error.statusCode}: </strong>{alert.error.message}
          </div>
        </div>
      );
    }
    return (
      <div className={alert.type ? 'col-md-6 col-md-offset-3' : 'hidden'}>
        <div className="alert alert-warning"><strong>{alert.message}</strong></div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { alert } = state;
  return {
    alert
  };
}

const connectedAlert = connect(mapStateToProps)(Alert);
export { connectedAlert as Alert }; 