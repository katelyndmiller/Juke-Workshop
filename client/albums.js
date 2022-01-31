import React from 'react'
// import Main from './Main'

function albums (props) {
    console.log('>>>>>>>>>>>>', props.album.artworkurl)
    return (
        <div id='albums' className='row wrap'>
            <div className='album'>
              <a>
                <div>
                    <img src={props.album.artworkurl} />
                    <p>{props.album.name}</p>
                    <small>{props.album.artist.name}</small>
                </div>
              </a>
            </div>
        </div>
    )
}

export default albums