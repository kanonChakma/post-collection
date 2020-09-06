import React, { useState, useEffect } from 'react';
import { Box } from '@material-ui/core';
import fakeData from '../../fakeData/fakeData'
const Comment = (props) => {
        const{body,email}=props.comment;
        const[data,setData]=useState([]);
        useEffect(()=>{
            const url='https://randomuser.me/api/';
            fetch(url)
            .then(res=>res.json())
            .then(data=>setData(data.results))
        },[])
    return(
        <div>
         <Box display="flex" bgcolor="#ffca28" my={2}>
             <Box width="10%"  mt={3}  ml={6}> 
               {
                data.map(pd=>
                 <img style={{ borderRadius: "50%" }} src={pd.picture.medium} alt=""/>      
                )
               } 
             </Box>
             <Box width="70%"  borderColor="" my={1} borderBottom={1} mt={1}>
                 <h5>{email}</h5>
                   {body}
             </Box>
          </Box>
        </div>
    );
};
export default Comment;