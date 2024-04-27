// Define the make_album function
function make_album(artist_name, album_title, tracks) {
    var album = {
        artist: artist_name,
        tittle: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
//Calling the function and creating three variables with three different values ;
var album1 = make_album(" Kashaf", "album_tittle 1");
var album2 = make_album("Sawaira", "album_tittle 2");
// Calling a make_album function with third parameter
var album3 = make_album("kashmala", "album_tittle 3", 10);
//print values of our object created by funtion
console.log(album1);
console.log(album2);
console.log(album3);
