import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { SignedInLinks } from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

class Navbar extends React.Component {
    render() {
        const { auth } = this.props;
        return (
            <nav className="navbar navbar-default navbar-static-top">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#app-navbar-collapse">
                            <span className="sr-only">Toggle Navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <Link to='/' className="navbar-brand">Blog</Link>
                    </div>
                    <div className="collapse navbar-collapse" id="app-navbar-collapse">
                        <ul className="nav navbar-nav">
                            <li><Link to='/posts'>Posts</Link></li>
                            <li><Link to='/categories'>Categories</Link></li>
                            <li><Link to='/tags'>Tags</Link></li>
                        </ul>
                        <div className="col-sm-3 col-md-3">
                            <form className="navbar-form" role="search">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Search" name="q"/>
                                <div className="input-group-btn">
                                    <button className="btn btn-default" type="submit">
                                    <i className="fa fa-search" aria-hidden="true"></i>
                                    </button>
                                </div>
                            </div>
                            </form>
                        </div>
                        { auth.loggedIn ? <SignedInLinks user={auth.user.name}/> : <SignedOutLinks/>}
                    </div>
                    
                </div>
            </nav>
        )
    }
}

function mapStateToProps(state) {
    const { auth } = state;
    return {
        auth
    };
  }
  
  const connectedNavbar = connect(mapStateToProps)(Navbar);
  export { connectedNavbar as Navbar }; 