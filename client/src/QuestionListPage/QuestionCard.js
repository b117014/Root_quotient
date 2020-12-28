import React from'react'


const QuestionCard = (props)=>{

   
        return(
            <div className="list-q">
                {props.data && props.data.map((res,i)=>(
                     <div className="container " key={i} >
                     <div className="">
                         <h4>{res.description}</h4>
                     </div>
                     <div className="q-container">
                         <div className="tag">{res.title}</div>
                         <div className="tag">{res.tag}</div>
                     </div>
                 </div>
                ))}
                   
                    
                
            </div>
        )
    
}

export {QuestionCard}