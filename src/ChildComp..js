import React from 'react';
const  ChildComponent=(props)=>{
    return(
        <React.Fragment>
            <p>{props.message}</p>
        </React.Fragment>
    );

}
export default ChildComponent;