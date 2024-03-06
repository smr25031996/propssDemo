import ChildComp from "./ChildComp"

const ParentComp=()=>{
    const person={
        name:"Shubam",
        age:27
    }
    const handleClick=()=>{
        alert('Button Clicked');
    }
    return(
        <>
        <ChildComp msg="Hello I am passed from parent to child" age={27} person={person} handleClick={handleClick}/>
        </>
    );

}
export default ParentComp;