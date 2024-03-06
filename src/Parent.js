import Child from "./Child"

const Parent=()=>{
    const user={
        name:"Shubham",
        password:"dbbcsbjsk",
        phone:8458968638763
    }
    return(
        <>
        <Child msg={user} />
        </>
    );
}

export  default Parent;