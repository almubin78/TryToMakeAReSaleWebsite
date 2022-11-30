import { useEffect, useState } from 'react';

const useToken = (email) => {
    const [issueToken,setIssueToken] = useState('');
    // const {user} = useContext(Context);
    // const email = ( user.email); useToken এ প্যারামিটার হিসেবে email নেয়ার জন্য পুনরায়  ভেরিএবল ডিক্লেয়ার করা অসম্ভব;

    useEffect(()=>{
        if(email){
            console.log("useEffect=>if(email) #useToken Hooks::::::::",email);
            const url = `http://localhost:5000/json?email=${email}`;
            console.log('url from useToken [fetch.then[jr],then[data.accessToken]]::',url);
            fetch(url)
            .then(res=>res.json())
            .then(data=>{
                console.log('useToken Hooks fatch data',data);
                console.log('useToken Hooks fatch data.accessToken',data.accToken);
                if(data.accToken){
                    localStorage.setItem('myToken',data.accToken);
                    setIssueToken(data.accToken)
                }
            })
        }
    },[email]);
    return [issueToken]
};

export default useToken;