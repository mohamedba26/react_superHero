import { IconButton } from '@mui/material'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';
import {DeleteHero} from "../Services/SupersheroService";

export default function DeleteSuperHero({id}) {

  const handleDelete=()=>{
    DeleteHero(id)
    .then((res)=>{
        if(res.status==200)
          alert("successful delete");
        else
          alert("failed delete")
      })
  }

  return (
    <Box>
        are you sure you want to delete this super hero<br/>
        <IconButton aria-label="delete" onClick={handleDelete}>
            <DeleteIcon/>
        </IconButton>
    </Box>
  )
}
