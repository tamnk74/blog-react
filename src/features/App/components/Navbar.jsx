import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { SignedInLinks } from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { setQuery } from '../store/actions';

class Navbar extends React.Component {
  handleChangeQuery = (e) => {
    this.props.dispatch(setQuery(e.target.value));
  };

  render() {
    const { auth } = this.props;
    return (
      <nav className="navbar navbar-default navbar-static-topnavbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#app-navbar-collapse" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link to='/' className="navbar-brand">Blog</Link>
          <div className="collapse navbar-collapse" id="app-navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item"><Link to='/posts' className="nav-link">Posts</Link></li>
              <li className="nav-item"><Link to='/categories' className="nav-link">Categories</Link></li>
              {/* <li className="nav-item"><Link to='/tags' className="nav-link">Tags</Link></li> */}
            </ul>
            <form className="form-inline my-2 my-lg-0" role="search">
              <input type="text" className="form-control" placeholder="Search" name="q" onChange={this.handleChangeQuery} />
              <button className="btn btn-default my-2 my-sm-0" type="submit">
                <i className="fa fa-search" aria-hidden="true"></i>
              </button>
            </form>
            {auth.user ? <SignedInLinks user={auth.user} /> : <SignedOutLinks />}
          </div>

        </div>
      </nav>
    )
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth
});

const connectedNavbar = connect(mapStateToProps)(Navbar);
export { connectedNavbar as Navbar }; 