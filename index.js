/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleMovies` variable below to gain access to an array of movies.

  Keep in mind that your functions must still have and use a parameter for accepting all movies.
*/
const { getVersion } = require("jest");
const exampleMovies = require("./movies");
// Do not change the line above.

/**
 * getAllMovieTitles()
 * -----------------------------
 * Returns all of titles from an array of movies. If the inputted `movies` array is empty, return `[]`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {string[]} An array of strings, which are movie titles.
 *
 * EXAMPLE:
 *  getAllMovieTitles(movies);
 *  //> [
      "Toy Story 4",
      "Inside Out",
      "Coco",
      "Incredibles 2",
      "Moana",
      "How to Train Your Dragon",
      "Paddington",
      "The Lion King",
      "Fantasia",
      "James and the Giant Peach",
    ];
 */
function getAllMovieTitles(movies) {
  //declaring empty array
  let arr = []
  //looping through movies array
  for (let i = 0; i < movies.length; i++) {
    //entering in movies array, grabbing movie title, and pushing into array
    arr.push(movies[i].title)
  }//for loop closing tag
  //will return array of movies titles or an empty array if no movies are found
  return arr
}

/**
 * getHighestMetascore()
 * -----------------------------
 * Returns the highest `metascore` among all movies. If the inputted `movies` array is empty, return `0`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {number} The highest `metascore` of all movies.
 *
 * EXAMPLE:
 *  getHighestMetascore(movies);
 *  //> 96
 */
function getHighestMetascore(movies) {
  //setting variable if arr is empty
  let empty = 0
  //looping through movies arr
  for (let i = 0; i < movies.length; i++) {
    //checking if element one is greater than element 1 and so on
    if (movies[i].metascore > movies[1].metascore) {
      //returning the biggest score and converting from string to number
      return Number(movies[i].metascore)
    }//if closing tage
  }//for closing tag
  return empty
}

/**
 * getAverageIMDBRating()
 * -----------------------------
 * Averages all of the IMDB ratings from all movies and returns it, as a number. If the inputted `movies` array is empty, return `0`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {number} The average IMDB rating across all movies.
 *
 * EXAMPLE:
 *  getAverageIMDBRating(movies);
 *  //> 7.76
 */

/**
 * 1.loop through movies array for movie ratings
 * 2. take movie ratings and put in new array
 * 3. convert array of strings to array of numbers
 * 4. add numbers in array and set to 'average' as we go until we reach the total
 * 5. get length(number of elements) of the array
 * 6. divide the total from 'average bucket' and divide by the length
 * 7. return outcome as average
 */

function getAverageIMDBRating(movies) {
  //variable if no movies are in the array
  let noMovies = 0
  //bucket tracking average rating
  let average = 0
  //new array holding only the averages *as strings*
  let arr = []
  //taking arr of strings to arr of numbers
  let arrNum

  //looping through movies array
  for (let i = 0; i < movies.length; i++) {
    //pushing movie ratings into empty array
    arr.push(movies[i].imdbRating)
  }//for loop closing tag

  //loop into our new array with just movie ratings
  for (let i = 0; i < arr.length; i++) {
    //converting arr from strings to numbers and setting it to new arr
    arrNum = arr.map(str => {
      return Number(str)
    });
    //adding + updating average value
    average += arrNum[i]
  }

  //error if there are no movies in movies array
  if (movies.length === 0) {
    return noMovies
  }

  //setting average by taking the total and dividing it by the number of elements in arr
  average = average / arr.length

  //return average
  return average

}

/**
 * countByRating()
 * -----------------------------
 * Returns an object where the keys are movie ratings and the values are the number of movies in the array with that rating. If the inputted `movies` array is empty, return `{}`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {Object} An object where keys are movie ratings (e.g. "PG") and the values are how many movies in the array have that rating (e.g. 7).
 *
 * EXAMPLE:
 *  countByRating(movies);
 *  //> { G: 3, PG: 7 }
 */
function countByRating(movies) {
  //setting empty obj
  let ratings = {}
  //looping through movies arr
  for (let i = 0; i < movies.length; i++) {
    //if there are no movies in obj, start count
    if (!ratings[movies[i].rated]) {
      ratings[movies[i].rated] = 1
    } else {
      //otherwise if there are, count how many
      ratings[movies[i].rated] += 1
    }//if closing tag
  }//for closing tag
  return ratings

}
/*let ratings = {}
  let pgRating = {}
  let gRating = {}
  let pgCount = 0
  let gCount = 0
  let count = 0
  let rating = {}
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].rated === "PG") {
      pgCount += 1
      pgRating[`${movies[i].rated}`] = pgCount
      console.log(pgRating[`${movies[i].rated}`] = pgCount)
    }//if closing tag

    if (movies[i].rated === "G") {
      gCount++
      console.log(gCount)
      gRating[`${movies[i].rated}`] = gCount
    }//if closing tag

    if (movies[i].rated === "PG-13") {
      count++
      console.log(count)
      rating[`${movies[i].rated}`] = count
    }


  }//for loop closing tag
  ratings = {
    ...gRating,
    ...pgRating,
    ...rating
  }

  return ratings
 */




/**
 * findById()
 * -----------------------------
 * Returns a movie object from an array of objects based on the ID. If the inputted `movies` array is empty or the ID does not match any movie, return `null`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} id - A unique `imdbID`.
 * @returns {Object|null} The movie object with the matching `imdbID`.
 *
 * EXAMPLE:
 *  findById(movies, "tt1979376");
 *  //> {
      // Toy Story 4
    };
 */
function findById(movies, id) {
  //setting error to 'null'
  let error = null
  //looping through arr
  for (let i = 0; i < movies.length; i++) {
    //checking id movies' imdbID is the same as given id
    if (movies[i].imdbID === id) {
      //if so, return movie obj
      return movies[i]
    }//for closing tag
  }//for closing tag

  //if id doesn't match or not in the arr, return error
  return error
}

/**
 * filterByGenre()
 * -----------------------------
 * Returns all movie objects with a matching genre. Case-insensitive. If the inputted `movies` array is empty or no movies match the inputted `genre`, return `[]`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} genre - The genre of a movie. (e.g. "Fantasy")
 * @returns {Object[]} An array of movies where at least one of the genres matches the `genre` inputted.
 *
 * EXAMPLE:
 *  filterByGenre(movies, "Mystery");
 *  //> [
      {
        // Coco
      }
    ]
 *
 * EXAMPLE:
 *  filterByGenre(movies, "Horror")
 *  //> []
 */
function filterByGenre(movies, genre) {
  //setting empty arr
  let arr = []
  //looping through movies arr
  for (let i = 0; i < movies.length; i++) {
    //making genres all lower case and checking to see if the genre given is included in the movies genres
    //.includes() works b/c multi elements in string???
    //if(movies[i].genre.toLowerCase() === genre.toLowerCase())
    if (movies[i].genre.toLowerCase().includes(genre.toLowerCase())) {
       arr.push(movies[i])
    }//if closing tag
  }//for closing tag
  return arr
}

/**
 * getAllMoviesReleasedAtOrBeforeYear()
 * -----------------------------
 * Returns all movie objects with a `released` year equal to or less than the given year.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {number} year - A year as a number. (e.g. 2000)
 * @returns {Object[]} An array of movies where the `released` year is equal to or less than the inputted year.
 *
 * EXAMPLE:
 *  getAllMoviesReleasedAtOrBeforeYear(movies, 2000);
 *  //> [
      {
        // The Lion King
      },
      {
        // Fantasia
      },
      {
        // James and the Giant Peach
      }
    ];
 */
function getAllMoviesReleasedAtOrBeforeYear() { }

/**
 * getBiggestBoxOfficeMovie()
 * -----------------------------
 * Returns the name of the movie with the highest `boxOffice` amount.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {string} The name of the movie that made the most money at the box office.
 *
 * EXAMPLE:
 *  getBiggestBoxOfficeMovie(movies);
 *  //> "Incredibles 2"
 */
function getBiggestBoxOfficeMovie() { }

// Do not change anything below this line.
module.exports = {
  getAllMovieTitles,
  getHighestMetascore,
  getAverageIMDBRating,
  countByRating,
  findById,
  filterByGenre,
  getAllMoviesReleasedAtOrBeforeYear,
  getBiggestBoxOfficeMovie,
};
