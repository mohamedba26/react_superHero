import { TableBody,Table, TableCell, TableContainer, TableHead, TableRow, Button, IconButton, } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import React, { useEffect, useState } from 'react'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import GetMovie from './GetMovie';
import AddMovie from './AddMovie';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteMovie from './DeleteMovie';
import { GetMovies } from '../Services/MovieService';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export default function GetAllSuperMovies() {
    const [movies,setMovies]=useState([])
    const [show,setShow]=useState(0)
    const [edit,setEdit]=useState(0)
    const [del,setDel]=useState(0)
    const [add,setAdd]=useState(false)

    const render=()=>{
        GetMovies()
        .then(res=>setMovies(res.data))
    }

    useEffect(()=>{
        render()
        console.log(movies)
    },[])

  return (
    <Box>
        <IconButton aria-label="add" onClick={()=>setAdd(true)}>
            <AddCircleOutlineIcon />
        </IconButton>
        <Modal
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            open={add}
            onClose={()=>{
                setAdd(false)
                render()
            }}
        >
            <Box sx={style}>
                <AddMovie/>
            </Box>
        </Modal>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>id</TableCell>
                        <TableCell>name</TableCell>
                        <TableCell>duree</TableCell>
                        <TableCell>superhero id</TableCell>
                        <TableCell>operations</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {movies.map((movie,i)=>
                        <TableRow key={i}>
                            <TableCell>{movie.id}</TableCell>
                            <TableCell>{movie.name}</TableCell>
                            <TableCell>{movie.min}</TableCell>
                            <TableCell>{movie.superHeroId}</TableCell>
                            <TableCell>
                                <Button variant="contained" className="button" onClick={()=>setShow(movie.id)}>Show Movies</Button>
                                <IconButton aria-label="delete" onClick={()=>setDel(movie.id)}>
                                    <DeleteIcon />
                                </IconButton>
                                <IconButton aria-label="edit" onClick={()=>setEdit(movie.id)}>
                                    <EditIcon />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </TableContainer>
        <Modal
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            open={show>0}
        >
            <Box sx={style}>
                <GetMovie id={show}/>
            </Box>
        </Modal>
        <Modal
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            open={del>0}
            onClose={()=>{
                render()
            }}
        >
        <Box sx={style}>
            <DeleteMovie id={del}/>
        </Box>
        </Modal>
        <Modal
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            open={edit>0}
            onClose={()=>{
                render()
            }}
        >
            <Box sx={style}>
                <AddMovie id={edit}/>
            </Box>
        </Modal>
    </Box>
  )
}