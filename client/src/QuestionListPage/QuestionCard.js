import React from'react'


const QuestionCard = (props)=>{

   
        return(
            <>
                
                {props.data && props.data.map((res,i)=>(
                 <div className=" " key={i} >
                    
                         <h4>{res.description}</h4>
                    
                    <div className="">
                         <div className=""><p>{res.title}</p></div>
                         <div className=""><p>{res.tag}</p></div>
                     </div>
                    {props.onCheckRightUser(res.user) && (
                        <div>
                            <button className="btn btn-primary"
                            onClick={()=>props.onUpdateQuestion(res)}
                            >Update</button>
                            <button className="btn btn-danger"
                            onClick={()=>props.onRemoveQuestion(res._id)}
                            >Delete</button>
                        </div>
                    )}
                     

                 </div>
                ))}
                   
                    
                
            </>
        )
    
}

export {QuestionCard}