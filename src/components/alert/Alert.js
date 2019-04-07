import React from 'react';
import { connect } from 'react-redux';

class Alert extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            alert: {} 
        };
    }

    render() {
        const { alert } = this.props;
        return (
            <div className={ alert.type ? 'col-md-6 col-md-offset-3' : 'hidden'}> 
                <div className={`alert ${ alert.type || '' }`}><strong>{ alert.message }</strong></div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const {alert} = state;
    return {
        alert
    };
}

const connectedAlert = connect(mapStateToProps)(Alert);
export { connectedAlert as Alert }; 