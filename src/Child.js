const Child=(props)=>{
    
    return(
        <>
            <h1>{props.msg.name}</h1>
            <h1>{props.msg.password}</h1>
            <h1>{props.msg.phone}</h1>
        </>
    );
}

export default Child;