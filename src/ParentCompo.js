import React from 'react';
import ChildComponent from './ChildComp.';

const ParentComponent=()=>{
    return(
        <>
        <h1>Parent Component</h1>

        <ChildComponent  message="Hello From Parent"/>
        </>
    );
}

export default ParentComponent;