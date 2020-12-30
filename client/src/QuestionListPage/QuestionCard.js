import React from'react'


const QuestionCard = (props)=>{

   
        return(
            <div className="p-5">
                
                {props.data && props.data.map((res,i)=>(
                 <div className="card " key={i} >
                    <div className="">
                         <h4>{res.description}</h4>
                    </div>
                        
                    
                    <div className="" style={{display:'flex', flexDirection:'row', justifyContent:'flex-end'}}>
                         <div className=""><h6>Title<p>{res.title}</p></h6></div>
                         <div className=""><h6>Tag<p>{res.tag}</p></h6></div>
                     </div>
                    {props.onCheckRightUser(res.user) && (
                        <div>
                            <button className="btn btn-primary btn-sm"
                            onClick={()=>props.onUpdateQuestion(res)}
                            >Update</button>
                            <button className="btn btn-danger btn-sm"
                            onClick={()=>props.onRemoveQuestion(res._id)}
                            >Delete</button>
                            
                            
                        </div>
                    )}
                    <button className="btn btn-success btn-sm"
                            onClick={()=>props.onChangeRoute(res._id)}
                            >Answer</button>
                     

                 </div>
                ))}
                   
                    
                
            </div>
        )
    
}

export {QuestionCard}