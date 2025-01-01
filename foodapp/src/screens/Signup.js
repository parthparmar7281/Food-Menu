import React,{useState} from 'react'
import { Link } from 'react-router-dom'

export default function Signup() {
    const [data, setdata] = useState({name:"",email:"",password:"",location:""})
    const handleSubmit=async(e)=>{
        e.preventDefault();
        const response =await fetch("http://localhost:4000/api/creatuser",{
            method:'Post',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({name:data.name, email:data.email,password:data.password,location:data.location})
        });
        const json=await response.json()
        console.log(json);
        if(!json.success){
            alert("enter a vaid")
        }
    }
const onChange=(event)=>{
    setdata({...data,[event.target.name]:event.target.value})
}
    return (
        <>
        <div div className="container">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlfor="name" className="form-label">name</label>
                    <input type="text" className="form-control" name='name' value={data.name} onChange={onChange}/>
                </div>

                <div className="mb-3">
                    <label htmlfor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={data.email} onChange={onChange} />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlfor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" name='password' value={data.password} onChange={onChange}/>
                </div>
                <div className="mb-3">
                    <label htmlfor="exampleInputPassword1" className="form-label">address</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" name='location' value={data.location} onChange={onChange}/>
                </div>
                
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/login" className='m-3 btn btn-danger'>already user</Link>
            </form>
            </div>
        </>
    )
}
