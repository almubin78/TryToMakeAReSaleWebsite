import { useEffect, useState } from "react";


const useAdmin = (email) => {
    const [isAdmin,setIsAdmin]=useState(false);
    const [isLoading,setIsLoading]=useState(true);
    useEffect(()=>{
        if(email){
            fetch(`https://assigment-12-server-almubin78.vercel.app/users/admin/${email}`)
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                setIsAdmin(data.isAdmin);
                setIsLoading(false)

            })
        }
    },[email]);
    return[isAdmin,isLoading]
};

export default useAdmin;