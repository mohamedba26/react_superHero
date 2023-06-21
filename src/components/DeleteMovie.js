import { IconButton } from '@mui/material'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';
import {DeleteMov} from "../Services/MovieService"

export default function DeleteMovie({id}) {
    const handleDelete=()=>{
        DeleteMov(id)
        .then(()=>{
            alert("successful delete");
          })
          .catch(()=>{
            alert("failed delete")
          })
    }

  return (
    <Box>
        are you sure you want to delete this Movie<br/>
        <IconButton aria-label="delete" onClick={handleDelete}>
            <DeleteIcon/>
        </IconButton>
    </Box>
  )
}
