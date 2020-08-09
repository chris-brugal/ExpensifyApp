import React from 'react';
import {connect} from 'react-redux';
import {Route, Redirect} from 'react-router-dom';

//cant access login if already logged in

export const PublicRoute = ({isAuthenticated, component: Component, ...rest}) => {
    return(
        <Route {...rest} component={(props)=>(
            isAuthenticated?
            (<Redirect to="/dashboard"/>) 
            :
            (<div>
                <Component />    
            </div>)
        )}/>
    );
};

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PublicRoute);