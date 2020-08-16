import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { user } = this.props;
    if (!user) {
      return <div>Loading</div>;
    }
    const style = {
      width: '60px',
    };
    return (
      <div className="col-md-12">
        <div className="media border p-3">
          <img
            src={`http://localhost:3000/images/avatars/${user.avatar}`}
            alt={user.name}
            className="mr-3 mt-3 rounded-circle"
            style={style}
          />
          <div className="media-body">
            <h4>{user['full-name']}</h4>
            <p>
              <small>
                <i>{user.email}</i>
              </small>
            </p>
            <p>{user.birthday}</p>
            <p>{user.address}</p>
          </div>
        </div>
      </div>
    );
  }
}

Profile.propTypes = {
  user: PropTypes.object,
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

const connectedProfile = connect(mapStateToProps)(Profile);
export { connectedProfile as Profile };
