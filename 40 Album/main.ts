// Define the make_album function
function make_album( artist_name : string, album_title : string, tracks? : number){
    let album: { artist : string , tittle : string , tracks? } = {
        artist : artist_name,
        tittle : album_title,
    };
    if( tracks !== undefined ){
        album.tracks = tracks;
    }
      return album;
    }

    //Calling the function and creating three variables with three different values ;

let album1 = make_album(" Kashaf", "album_tittle 1");
let album2 = make_album("Sawaira" , "album_tittle 2");


// Calling a make_album function with third parameter
let album3 = make_album("kashmala", "album_tittle 3", 10 )

//print values of our object created by funtion
console.log(album1);
console.log(album2);
console.log(album3);