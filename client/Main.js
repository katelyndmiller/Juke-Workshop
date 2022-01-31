import React from 'react'
import Album from './albums.js'
import Player from './player.js'
import Sidebar from './sidebar.js'
import axios from 'axios'

const dummyData = [
  {
    "id": 1,
    "name": "No Dummy",
    "artworkUrl": "default-album.jpg",
    "artistId": 1,
    "artist": {
      "id": 1,
      "name": "The Crash Test Dummies"
    }
  },
  {
    "id": 2,
    "name": "I React to State",
    "artworkUrl": "default-album.jpg",
    "artistId": 1,
    "artist": {
      "id": 1,
      "name": "The Crash Test Dummies"
    }
  }
]

export default class Main extends React.Component {
  constructor () {
    super()
    this.state = {
      albums: [],
      isLoading: true
    }
  }
  async componentDidMount () {
    try {
      const {data} = await axios.get('/api/albums');
      console.log(data)
      this.setState ({
        albums: data,
        isLoading: false
      })
    } catch (error) {
      console.error(error)
    }
  }
  render () {
    let content;
    if (this.state.isLoading === true) {
      content = 'Page is Loading'
    } else {
      content = (
        <div id='main' className='row container'>
          <div className='container'>
            {this.state.albums.map((album) => {
              return <Album key={album.id} album={album}/>
            })}
            {<Player />}
          </div>
         {<Sidebar />}
        </div>
      )
    }

    return (
      <div>
        {content}
      </div>
    )
  }
}
