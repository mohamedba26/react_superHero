import { TableBody, Table, TableCell, TableContainer, TableHead, TableRow, Button, IconButton, } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { GetSuperHeroes } from '../Services/SupersheroService'
import React, { useEffect, useState } from 'react'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import GetSuperHero from './GetSuperHero';
import AddSuperHero from './AddSuperHero';
import DeleteSuperHero from './DeleteSuperHero';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

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

export default function GetAllSuperHeroes() {
    const [heroes, setHeroes] = useState([])
    const [show, setShow] = useState(0)
    const [id, setId] = useState("")
    const [edit, setEdit] = useState(false)
    const [del, setDel] = useState(false)
    const [add, setAdd] = useState(false)

    const render = () => {
        GetSuperHeroes()
            .then(res => setHeroes(res.data))
    }

    useEffect(() => {
        render()
    }, [])

    return (
        <Box>
            <IconButton aria-label="add" onClick={() => setAdd(true)}>
                <AddCircleOutlineIcon />
            </IconButton>
            <Modal
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                open={add}
                onClose={() => setAdd(false)}
            >
                <Box sx={style}>
                    <AddSuperHero />
                </Box>
            </Modal>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>id</TableCell>
                            <TableCell>name</TableCell>
                            <TableCell>first name</TableCell>
                            <TableCell>last name</TableCell>
                            <TableCell>place</TableCell>
                            <TableCell>operations</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {heroes.map((hero, i) =>
                            <TableRow key={i}>
                                <TableCell>{hero.id}</TableCell>
                                <TableCell>{hero.name}</TableCell>
                                <TableCell>{hero.firstName}</TableCell>
                                <TableCell>{hero.lastName}</TableCell>
                                <TableCell>{hero.place}</TableCell>
                                <TableCell>
                                    <Button variant="contained" className="button" onClick={() => setShow(hero.id)}>Show Movies</Button>
                                    <IconButton aria-label="delete" onClick={() => {
                                        setDel(true)
                                        setId(hero.id)
                                    }}>
                                        <DeleteIcon />
                                    </IconButton>
                                    <IconButton aria-label="edit" onClick={() => {
                                        setEdit(true)
                                        setId(hero.id)
                                    }}>
                                        <EditIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
                <Modal
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    open={show != ""}
                    onClose={() => setShow("")}
                >
                    <Box sx={style}>
                        <GetSuperHero id={show} />
                    </Box>
                </Modal>
                <Modal
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    open={del > 0}
                    onClose={() => {
                        setDel(0)
                        render()
                    }}
                >
                    <Box sx={style}>
                        <DeleteSuperHero id={id} />
                    </Box>
                </Modal>
                <Modal
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    open={edit > 0}
                    onClose={() => {
                        setEdit(0)
                        render()
                    }}
                >
                    <Box sx={style}>
                        <AddSuperHero id={id} />
                    </Box>
                </Modal>
            </TableContainer>
        </Box>
    )
}
