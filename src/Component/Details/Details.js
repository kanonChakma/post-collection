import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography } from '@material-ui/core';
const Details = () => {
    const{postId}=useParams();
    const[post,setPost]=useState([]);
      
    useEffect(()=>{
         const url=`http://jsonplaceholder.typicode.com/posts/${postId}`;
         fetch(url)
        .then(res=>res.json())
        .then(data=>setPost(data));
    },[])
    const{id,userId,title,body}=post;
    return (
        <Box py={1} px={4}>
        <Typography align="center" variant="h4">
            
         </Typography>
         <h4>Post id is:{id}</h4>
         <h4>Userid is:{userId}</h4>
         <h4>{title}</h4>
         <p>{body}</p>
          </Box>
    );
};
export default Details;