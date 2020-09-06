import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comment from '../Comment/Comment';
import Details from '../Details/Details';
import { Box } from '@material-ui/core';
const PostDetail = () => {
    const{postId}=useParams();
    const[comment,setComment]=useState([]);
    useEffect(()=>{
        const url=`http://jsonplaceholder.typicode.com/comments?postId=${postId}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setComment(data));
    },[])
    return(
         <Box width="90%"  ml={5} mt={3}>
             <Box bgcolor="#455a64" color="white" borderRadius="5px">
                <Details></Details>
            </Box>
            <Box>{
                comment.map(cm=><Comment 
                 comment={cm}></Comment>)
              }
            </Box>     
        </Box>  
        
    );
};

export default PostDetail;