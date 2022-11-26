import { useEffect } from 'react';

const useDynamicTitle = (title) => {
    useEffect(()=>{
        document.title = `${title}-Old is Gold`;
    },[title])
};

export default useDynamicTitle;