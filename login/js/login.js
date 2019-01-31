

let movies = [];
//movies api
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://api.themoviedb.org/3/movie/top_rated?api_key=05bdfff5982d52263845729a88b8b104&page=4",
  "method": "GET",
}
$.ajax(settings).done(function (response) {
  //console.log(response);
  response.results.forEach(item => {
    movies.push({
      Title: item.title,
      Overview: item.overview,
      Release_date: item.release_date,
      Poster_path: "http://image.tmdb.org/t/p/w500" + item.poster_path,
      //Author: firebase.auth().currentUser.displayName ? firebase.auth().currentUser.displayName : firebase.auth().currentUser.email
      
   
    });

   
  });
  /*let movie = firebase.database().ref('movies');
  for(let i=0; i<movies.length; i++)
    movie.push(movies[i]);
*/
 
  
  
 
  
});



