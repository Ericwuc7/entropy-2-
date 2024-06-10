import "./todo.css"

function Todo({task,timings,days}){
    let styles={
        display:"flex",
        flexDirection:"column",
        flexWrap:"wrap",
        height:"100px",
        width:"100%",
        justifyContent:"center",
        

    };
    return(
        <div className="todo" style={styles}>
        <span>{task}</span>
        <span>{timings}</span> 
        <span>{days}</span>    
        </div>
    )

   
}

export default Todo;