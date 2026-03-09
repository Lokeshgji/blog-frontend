"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function Navbar() {

const router = useRouter()
const [loggedIn,setLoggedIn] = useState(false)

useEffect(()=>{

const checkLogin = () => {
const token = localStorage.getItem("token")
setLoggedIn(!!token)
}

checkLogin()

window.addEventListener("storage",checkLogin)

return () => window.removeEventListener("storage",checkLogin)

},[])

const logout = () => {

localStorage.removeItem("token")

setLoggedIn(false)

router.push("/login")

}

return(

<nav className="flex justify-between p-4 bg-gray-900 text-white">

<Link href="/">
<h1 className="font-bold text-xl cursor-pointer">
Home
</h1>
</Link>

<div className="flex gap-4 items-center">

<Link href="/articles">Articles</Link>

{loggedIn && <Link href="/dashboard">Write</Link>}

{!loggedIn && <Link href="/login">Login</Link>}

{!loggedIn && <Link href="/signup">Signup</Link>}

{loggedIn && (
<button
onClick={logout}
className="bg-red-500 px-3 py-1 rounded"
>
Logout
</button>
)}

</div>

</nav>

)
}