import { useEffect, useState } from "react";

const ExtraInformation = (user)=>{
    const [information,setInformation]=useState('')
    const email = user?.user?.email;
    

    useEffect(()=>{
        if(email){
            fetch(`https://rdxuniversity.onrender.com/user/${email}`,{
                method:'put',
            })
            .then(res => res.json())
            .then(data => console.log(data))
        }
    },[user])
    return [information]

}

export default ExtraInformation