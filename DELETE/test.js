
//https://rallycoding.herokuapp.com/api/music_albums


 fetchAlbums => {

fetch('https://rallycoding.herokuapp.com/api/music_albums')
    .then(resolve => resolve.json())
    .then(json1 => console.log(json1));
}

fetchAlbums();

