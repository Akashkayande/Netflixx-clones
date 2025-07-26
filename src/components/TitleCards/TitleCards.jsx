import React, { useEffect, useState } from 'react'
import './TitleCards.css'
import { Link } from 'react-router-dom';
// import cards_data from '../../assets/assets/cards/Cards_data'

const TitleCards = ({title,category}) => {
  const [apiData,setApiData]=useState([])
  // const API_KEY="df483943cd4f5f9041e68ce5966d3840";

 const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZjQ4Mzk0M2NkNGY1ZjkwNDFlNjhjZTU5NjZkMzg0MCIsIm5iZiI6MTc1MjU3MTUwMC42OTEsInN1YiI6IjY4NzYxZTZjOTEwOTM3Zjg2ZjU3MTI2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.g_77Mhs1ohedeZ283KILaT9Z5jsiXIsBfvnESXrBkGE'
  }
};



  useEffect(()=>{
    try {
      fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
      .then(res => res.json())
      .then(res => setApiData(res.results))
      .catch(err => console.error(err));
    } catch (error) {
      console.log(error)
    }
      
  },[])


  return (
    <div className='titlecards'>
      <h2>{title?title:"Populer on Netflix"}</h2>
      <div className="card-list">
        {apiData.map((card,index)=>(
          <Link to={`/player/${card.id}`}><div className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500${card.backdrop_path}`} alt="" />
            <p>{card.original_title}</p>
          </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default TitleCards