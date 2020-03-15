import React from 'react'
export default function Example() {
    return (
        <div className="example">
            <span style ={{backgroundColor:'red'}} onClick={()=>console.log(1+1)}> 1+1 = {1+1}</span>
        </div>
    )
}




import Example from './component/Example'
