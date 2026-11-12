"use client";
import {useEffect,useState} from "react";import {supabase} from "@/lib/supabase";import Link from "next/link";
type Course={id:string;title:string;description:string;slug:string};
export default function Courses(){const [items,setItems]=useState<Course[]>([]);const [message,setMessage]=useState("Loading courses...");
useEffect(()=>{supabase().from("courses").select("id,title,description,slug").eq("published",true).then(({data,error})=>{setItems(data||[]);setMessage(error?error.message:"No courses published yet. Check back soon.")})},[]);
return <main className="shell" style={{paddingTop:60}}><p className="eyebrow">LEARNING CATALOG</p><h1>Explore courses</h1><p className="muted">Learn at your pace with structured programming lessons.</p><div className="grid" style={{marginTop:40}}>{items.map(c=><article className="panel" key={c.id}><p className="eyebrow">PROGRAMMING COURSE</p><h3>{c.title}</h3><p className="muted">{c.description}</p><Link className="btn" href={"/courses/"+c.slug}>View course</Link></article>)}</div>{!items.length&&<p className="muted">{message}</p>}</main>}
