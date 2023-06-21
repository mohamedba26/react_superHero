import React, { useEffect, useState } from 'react'
import "./style.css"
import { Button, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import { Input } from '@mui/material';
import { AddHero,GetSuperHeroById,UpdateSuperHero} from '../Services/SupersheroService'

const style = {
  height:500
};

export default function AddSuperHero({id}) {

  const [superHero,setSuperHero]=useState({});
  const [image, setImage] = useState();

  const handleChange=(event)=>{
    const name=event.target.name;
    const value=event.target.value;
    setSuperHero(values=>({...values,[name] : value}))
  }

  const handleUpload = (e) => {
    setImage(e.target.files[0])
  }

  const handleSave=()=>{
    if(id===undefined){
      AddHero(superHero,image).then(res=>{
        if(res.status==200)
          alert("succesful addition")
        else
          alert("failed addition")
      })
    }
    else{
      UpdateSuperHero(id,superHero,image).then(res=>{
        if(res.status==200)
        {
          alert("succesful modification")
          delete res.data.id
          delete res.data.movies
          setSuperHero(res.data)
        }
        else
          alert("failed modification")
      })
    }
  }

  useEffect(()=>{
    if(id!==undefined)
    {
      GetSuperHeroById(id)
      .then(res=>{
        delete res.id
        delete res.movies
        delete(res.image)
        setSuperHero(res)
      });
    }
  }
  ,[])

  return (
    <Box>
        <TextField id="name" margin="dense" label="name" name="name" variant="outlined" value={superHero.name||""} onChange={handleChange}/>
        <TextField id="first" margin="dense" label="first name" name="firstName" variant="outlined" value={superHero.firstName||""} onChange={handleChange}/>
        <TextField id="last" margin="dense" label="last name" name="lastName" variant="outlined" value={superHero.lastName||""} onChange={handleChange}/>
        <TextField id="place" margin="dense" label="place" name="place" variant="outlined" value={superHero.place||""} onChange={handleChange}/>
        <Box>
          image :<Input type="file" onChange={handleUpload}/>
        </Box>
        <Box>
          <Button variant="contained" onClick={()=>handleSave(id,superHero)}>{id===undefined?"Add":"Edit"}</Button>
        </Box>
    </Box>
  )
}
