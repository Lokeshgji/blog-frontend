"use client"

import { useState } from "react"
import axios from "axios"
import { useRouter } from "next/navigation"

export default function Login(){

const router = useRouter()

const [email,setEmail] = useState("")
const [password,setPassword] = useState("")

const login = async () => {

try{

const res = await axios.post(
"http://localhost:8080/login",
{email,password}
)

localStorage.setItem("token",res.data.token)

router.push("/dashboard")

}catch(err){

alert("Invalid credentials")

}

}

return(

<div className="p-10 max-w-md mx-auto">

<h1 className="text-2xl font-bold mb-6">
Login
</h1>

<input
className="w-full p-3 mb-4 bg-gray-800 rounded"
placeholder="Email"
onChange={e=>setEmail(e.target.value)}
/>

<input
type="password"
className="w-full p-3 mb-4 bg-gray-800 rounded"
placeholder="Password"
onChange={e=>setPassword(e.target.value)}
/>

<button
className="bg-blue-600 px-6 py-3 rounded"
onClick={login}
>
Login
</button>

<p className="mt-4">
New user?
<a className="text-blue-400 ml-2" href="/signup">
Create account
</a>
</p>

</div>

)
}