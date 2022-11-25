import { useEffect, useState } from 'react';

const useToken = (email) => {
    const [issueToken,setIssueToken] = useState('');
    useEffect(()=>{
        if(email){
            fetch(`http://localhost:5000/jwt?email=${email}`)
            .then(res=>res.json())
            .then(data=>{
                if(data.accessToken){
                    localStorage.setItem('myToken',data.accessToken);
                    setIssueToken(data.accessToken)
                }
            })
        }
    },[email]);
    return [issueToken]
};

export default useToken;