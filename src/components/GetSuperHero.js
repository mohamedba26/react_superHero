import { TableBody, TableContainer, TableRow, Table, TableCell, Card, CardMedia, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import {GetSuperHeroById} from "../Services/SupersheroService"

export default function GetSuperHero({id}) {
    const [hero,setHero]=useState({})
    useEffect(()=>{
        GetSuperHeroById(id)
        .then(res=>setHero(res))
        console.log(hero)
    },[])
  return (
    <Card sx={{ maxWidth: 345 }}>
        <Grid container alignItems="center" justifyContent="center">
            <img height="194" src={`data:image/gif;base64,${hero.photo}`||"stage/user.png"}/>
        </Grid>
        <TableContainer>
            <Table>
                <TableBody>
                    <TableRow>
                        <TableCell>id</TableCell>
                        <TableCell>{hero.id}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>name</TableCell>
                        <TableCell>{hero.name}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>first name</TableCell>
                        <TableCell>{hero.firstName}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>last name</TableCell>
                        <TableCell>{hero.lastName}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>place</TableCell>
                        <TableCell>{hero.place}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            <Table>
                <TableBody>
                <TableRow>
                    <TableCell>name</TableCell>
                    <TableCell>duree</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>SpiderMan 1</TableCell>
                    <TableCell>80</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>SpiderMan 2</TableCell>
                    <TableCell>70</TableCell>
                </TableRow>
                {hero.movies?.map((movie,i)=>
                    <TableRow key={i}>
                        <TableCell>{movie.id}</TableCell>
                        <TableCell>{movie.name}</TableCell>
                        <TableCell>{movie.min}</TableCell>
                    </TableRow>)
                }
                </TableBody>
            </Table>
        </TableContainer>
    </Card>
  )
}
