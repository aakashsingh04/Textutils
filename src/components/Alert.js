import React from 'react';

function Alert(props) { 
    console.log(props.type);
    console.log(props.msg);
    return (
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{props.alert.msg}</strong>
        </div>
    );
}

export default Alert;