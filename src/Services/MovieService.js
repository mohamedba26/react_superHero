import axios from "axios";

export const GetMovieById = async (id) =>{
    
    let res=await axios.get(`https://localhost:7190/api/Movie/${id}`)
    return res
}

export const AddMov = async (id,Movie)=>{
    Movie.id=""
    let res=await axios.post(`https://localhost:7190/api/Movie/${id}`,Movie)
    return res
}

export const UpdateMovie = async (id,Movie) => {
    let res=await axios.put(`https://localhost:7190/api/Movie/${id}`,Movie)
    return res
}

export const DeleteMov = async (id) => {
    let res=await axios.delete(`https://localhost:7190/api/Movie/${id}`)
    return res
}

export const GetMovies = async () => {
    let res=await axios.get(`https://localhost:7190/api/Movie`)
    return res
}