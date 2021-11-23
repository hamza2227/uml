import * as React from 'react';
import { useEffect,useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import Chartaa  from '../components/Chartaa';


export default  (props) => {
  
 const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

  let [globalData,setglobalData]=useState({deaths:{}});
  useEffect(() => {
    async function getData(){
      const response =await fetch('https://api.coronatracker.com/v3/stats/custom-debug')
      let data = await response.json();
      data.filter((val)=>{
        if (globalData==""){
          return val;
        }
        else if(val.countryName)
        {
          return  val;
        }
      })
      setglobalData(data);
      // console.log(data[0]);
      // data[0].source;
      // https://covid19.mathdro.id/api
      //setglobalData(data);
      
    }    
    getData();
  }, [])
  
    
  return (
    < >
  <Box sx={{ flexGrow: 1 ,maxWidth:1000,margin :'0 auto',marginTop:5}}>
    <Grid container spacing={3} >
        {Object.keys(globalData) .map((key,index)=>{
          return (
            
            <Grid item xs={12} sm={4} key={index}>
        {/* <Item>{key}</Item> */}
        <Item><h3 className='name'>{globalData[key].countryName}</h3></Item>
        <Item>CONFIRMED  {globalData[key].confirmed}</Item>
        <Item >RECOVERED  {globalData[key].recovered}</Item>
        <Item className='con'>DEATHS  {globalData[key].deaths}</Item>
        <Item>DEATHS  {globalData[key].dailySummary}</Item>
             
      
      
      </Grid>
          )  
          
        })}
   
  
    </Grid>
  </Box>



{/* <Chartaa/> */}

  </>
);
}

      

// export default CBox;



  
  


