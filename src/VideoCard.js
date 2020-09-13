import React from 'react'
import './VideoCard.css'
import TextTruncate from 'react-text-truncate'
import ThumbUpSharpIcon from '@material-ui/icons/ThumbUpSharp';

function VideoCard({movie}) {
    const base_url= 'https://image.tmdb.org/t/p/original/';
    return (
        <div className='videoCard'>
            <img src={`${base_url}${movie.backdrop_path || movie.poster_path}`}
            alt='Movie Poster'
            ></img>
            <TextTruncate 
            line={1}
            element='p'
            truncateText='...'
            text={movie.overview}
            />
            <h2>{movie.title || movie.original_name}</h2>
            <p className='videoCard__stats'>
                {movie.media_type && `${movie.media_type}`}
                {movie.release_date || movie.first_air_date} · 
                 <ThumbUpSharpIcon /> {" "}
                 {movie.vote_count}</p>
        </div>
    )
}

export default VideoCard
