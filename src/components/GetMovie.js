import { TableBody, TableContainer, TableRow, Table, TableCell, Box } from '@mui/material'
import { GetMovieById } from '../Services/MovieService'
import React, { useEffect, useState } from 'react'

export default function GetMovie({id}) {
    const [movie,setMovie]=useState({})
    useEffect(()=>{
        GetMovieById(id)
        .then(res=>setMovie(res.data))
    },[])
  return (
    <Box>
        <TableContainer>
            <Table>
                <TableBody>
                    <TableRow>
                        <TableCell>id</TableCell>
                        <TableCell>{movie.id}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>name of movie</TableCell>
                        <TableCell>{movie.name}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>duree</TableCell>
                        <TableCell>{movie.min}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>SuperHero id</TableCell>
                        <TableCell>{movie.superHeroId}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>name of superHero</TableCell>
                        <TableCell>{movie.superHero?.name}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>first name of superHero</TableCell>
                        <TableCell>{movie.superHero?.firstName}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>last name of superHero</TableCell>
                        <TableCell>{movie.superHero?.lastName}</TableCell>
                    </TableRow>
                    <TableRow> 
                        <TableCell>place of superHero</TableCell>
                        <TableCell>{movie.superHero?.place}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    </Box>
  )
}
