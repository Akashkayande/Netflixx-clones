import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../../assets/assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'

const Player = () => {
  const [apiData,setApiData]=useState({name:"",key:"",published_at:"",typeof:""})
  const {id}=useParams();
  const navigate=useNavigate();

  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZjQ4Mzk0M2NkNGY1ZjkwNDFlNjhjZTU5NjZkMzg0MCIsIm5iZiI6MTc1MjU3MTUwMC42OTEsInN1YiI6IjY4NzYxZTZjOTEwOTM3Zjg2ZjU3MTI2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.g_77Mhs1ohedeZ283KILaT9Z5jsiXIsBfvnESXrBkGE'
  }
};
  useEffect(()=>{
    try {
      fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
      .then(res => res.json())
      .then(res => setApiData(res.results[0]))
      .catch(err => console.error(err));
    } catch (error) {
      console.log(error)
      alert(error)
    }
  },[])

  return (
    <div className='player'>
      <img src={back_arrow_icon} alt="" onClick={()=>navigate("/")}/>
      <iframe  width="90%" height="90%" src={`https://www.youtube.com/embed/${apiData.key}`} title='trailer' frameBorder='0' allowFullScreen></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player