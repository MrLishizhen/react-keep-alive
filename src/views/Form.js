import { useState } from "react"

function Form (){
    const [username,setUserName] = useState('')
    return (
        <div>
            <h1>{username}</h1>
            <input value={username} onChange={(e)=>setUserName(e.target.value)}/>
        </div>
    )
}
export default Form
