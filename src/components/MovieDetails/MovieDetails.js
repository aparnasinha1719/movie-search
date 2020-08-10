import React,{useEffect} from 'react'
import axios from 'axios'

const MovieDetails=(props)=> {
    useEffect(() => {
        let url = `http://www.omdbapi.com/?apikey=65ec2d05&i=${props.location.state.id}`;
        axios.get(url).then((response)=>{
            console.log(response);

        }).catch(err=>err)
    }, [])
    return (
        <div>
            
        </div>
    )
}

export default MovieDetails
