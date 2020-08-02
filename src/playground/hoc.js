//HOC- a component that renders another compnent
//reuse code
//render hijacking
//prop manipulation
//abstract state
import React from 'react';
import reactDOM from 'react-dom';

const Info = (props) =>(
    <div>
        <h1>info</h1>
        <p>info is: {props.Info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) =>{
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info, plz dont share</p>}
            <WrappedComponent {...props}/>
        </div>
    )
    //...props allows them to be brought down to the lower component
}

const requireAuthentication = (WrappedComponent) =>{
    return(props) =>(    
    <div>
        {props.isAuthenticated ? (<WrappedComponent {...props}/>) : <p>log in plz</p>}
    </div>)
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

ReactDOM.render(<AuthInfo isAuthenticated={true} info="deets" />, document.getElementById("app"));


