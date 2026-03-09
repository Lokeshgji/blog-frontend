"use client"

import { useState, useEffect } from "react"
import axios from "axios"
import dynamic from "next/dynamic"
import { useRouter } from "next/navigation"
import api from "@/lib/api"

const SimpleMDE = dynamic(
  () => import("react-simplemde-editor"),
  { ssr: false }
)

import "easymde/dist/easymde.min.css"

export default function Dashboard(){

const router = useRouter()

const [title,setTitle] = useState("")
const [content,setContent] = useState("")
const [loading,setLoading] = useState(false)
const [slug, setSlug] = useState("")

useEffect(()=>{

const token = localStorage.getItem("token")

if(!token){
router.push("/login")
}

},[])

const createSlug = (title:string) => {

return title
.toLowerCase()
.replace(/ /g,"-")
.replace(/[^\w-]+/g,"")

}

const publishArticle = async () => {

if (!title || !content) {
  alert("Please fill title and content")
  return
}

try{

setLoading(true)

const slug = createSlug(title)

const token = localStorage.getItem("token")

await axios.post(
  "http://localhost:8080/articles",
  {
    title,
    content
  },
  {
     headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    }
  }
)

alert("Article published")

setTitle("")
setContent("")
setSlug("")

}catch(err: any){

console.error(err)

alert(
err?.response?.data?.error ||
err?.response?.data ||
err.message ||
"Failed to publish"
)

}finally{

setLoading(false)

}

}

return(

<div className="p-10 max-w-3xl mx-auto">

<h1 className="text-3xl font-bold mb-6">
Write Article
</h1>

<input
className="w-full p-3 mb-4 bg-gray-800 rounded text-white"
placeholder="Article Title"
value={title}
onChange={e=>setTitle(e.target.value)}
/>

<SimpleMDE
value={content}
onChange={setContent}
/>

<button
className="mt-6 bg-blue-600 px-6 py-3 rounded hover:bg-blue-700"
onClick={publishArticle}
disabled={loading}
>
{loading ? "Publishing..." : "Publish Article"}
</button>

</div>

)

}