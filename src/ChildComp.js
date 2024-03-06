const ChildComp=(props)=>{
    return(
        <>
        <h1>{props.msg}</h1>
        <h1>{props.age}</h1>
        <h1>{props.person.name}</h1>
        <h1>{props.person.age}</h1>
        <button onClick={props.handleClick}>Clicked me</button>
        </>
    );
}
export default ChildComp;