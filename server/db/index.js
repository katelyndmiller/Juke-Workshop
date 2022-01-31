const db = require('./db')
// require each of your models here...
const Album = require('./album.js')
const Artist = require('./artist.js')
const Song = require('./song.js')

// ...and give them some nice associations here!
Album.hasMany(Song)
Song.belongsTo(Album)

Artist.hasMany(Song)
Song.belongsTo(Artist)

Artist.hasMany(Album)
Album.belongsTo(Artist)

module.exports = {
  db,
  Album,
  Artist,
  Song
  // Include your models in your module.exports as well!
  // The seed file expects to find them there!
}

/*
  Albums many artists
  Artists many Albumns
  Albums many song
  Song has one album
  Artists many song
  Song many artists
*/
