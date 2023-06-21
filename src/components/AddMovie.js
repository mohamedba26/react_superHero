import React, { useEffect, useState } from 'react'
import "./style.css"
import { Button, TextField } from '@mui/material';
import { GetMovieById,UpdateMovie,AddMov } from '../Services/MovieService';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { GetSuperHeroes } from '../Services/SupersheroService';
import Box from '@mui/material/Box';

export default function AddMovie({id}) {
    const [inputs,setInputs]=useState({});
    const [superHeroes,setSuperHeroes]=useState([])
    const [heroId,setHeroId]=useState()

    const handleChange=(event)=>{
      const name=event.target.name;
      const value=event.target.value;
      setInputs(values=>({...values,[name] : value}))
    }

    const handleClick=()=>{
      if(id===undefined)
        AddMov(heroId,inputs)
        .then(res=>{
          if(res.status==200)
          {
            alert("successful addition")
            setInputs({})
          }
          else
          {
            alert("failed addition")
          }
        })
      else
        UpdateMovie(id,inputs)
        .then(res=>{
          res.status==200?alert("successful modification"):alert("failed addition")
        })
    }
  
    useEffect(()=>{
      GetSuperHeroes()
      .then(res=>setSuperHeroes(res.data))
      if(id!==undefined)
      {
        GetMovieById(id)
        .then(res=>{
          delete res.data.id
          delete res.data.superHero
          setInputs(res.data)
        })
      }
    }
    ,[])
  
    return (
      <Box>
          <TextField id="name" margin="dense" label="name" name="name" variant="outlined" value={inputs.name||""} onChange={handleChange}/>
          <TextField id="min" margin="dense" label="duree" name="min" variant="outlined" value={inputs.min||""} onChange={handleChange}/>
          <FormControl fullWidth margin="dense">
            <InputLabel id="demo-simple-select-label">SuperHero</InputLabel>
            <Select
              name="superHeroId"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={heroId||""}
              label="superHero"
              onChange={event=>setHeroId(event.target.value)}
            >
              {superHeroes?.map((superHero,i)=><MenuItem key={i} value={superHero.id}>{superHero.name}</MenuItem>)}
              </Select>
          </FormControl>
          <Button variant="contained" onClick={handleClick}>{id===undefined?"Add":"Edit"}</Button>
      </Box>
    )
}
