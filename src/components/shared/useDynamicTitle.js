import { useEffect } from 'react';

const useDynamicTitle = (title) => {
    useEffect(()=>{
        document.title = `${title}-Be Smart with Older`;
    },[title])
};

export default useDynamicTitle;