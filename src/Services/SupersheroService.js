import axios from "axios";

export const GetSuperHeroById = async (id) =>{
    var res={}
    res=await axios.get(`https://localhost:7190/api/SuperHero/${id}`)
    res=res.data
    console.log(res)
    return res
}

export const AddHero = async (superhero,f)=>{
    superhero.photo=""
    superhero.id=""
    var res=await axios.post("https://localhost:7190/api/SuperHero",superhero)
    if(res.status==200 && f!==undefined)
    {
        var bodyFormData = new FormData();
        bodyFormData.append('photo', f);
        var res1=await axios(
        {
            method: "post",
            url: `https://localhost:7190/api/Photo/`+res.data.id+'/Addphoto',
            data: bodyFormData,
            headers: { "Content-Type": "multipart/form-data" },
        });
    }
    return res
}

export const UpdateSuperHero = async (id,superhero,f) => {
    superhero.photo=""
    superhero.id=""
    var res=await axios.put(`https://localhost:7190/api/SuperHero/${id}`,superhero)
    console.log(f)
    if(res.status==200 && f!==undefined)
    {
        var bodyFormData = new FormData();
        bodyFormData.append('photo', f);
        var res1=await axios(
        {
            method: "put",
            url: `https://localhost:7190/api/Photo/`+id,
            data: bodyFormData,
            headers: { "Content-Type": "multipart/form-data" },
        });
    }    
    return res
}

export const DeleteHero = async (id) => {
    var res=await axios.delete(`https://localhost:7190/api/SuperHero/${id}`)
    return res
}

export const GetSuperHeroes = async () => {
    var res=await axios.get(`https://localhost:7190/api/SuperHero`)
    return res
}