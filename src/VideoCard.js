import React from 'react'
import './VideoCard.css'

function VideoCard({Movie}) {
    return (
        <div className='videoCard'>
            <img src='https://image.slidesharecdn.com/presentation-avatarfilmposteranalysis-150303060114-conversion-gate01/95/avatar-film-poster-analysis-1-638.jpg?cb=1425363082'
            alt=''
            ></img>
            <p>Lorem Ipsum </p>
            <h2>Movie Title</h2>
            <p>Likes</p>
        </div>
    )
}

export default VideoCard
