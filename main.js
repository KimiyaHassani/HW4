let movieArray = [];
let selectedGenre = "";

// define a constructor to create note objects
let MovieObject = function (movieTitle, movieYear, movieGenre) {
    this.Title = movieTitle;
    this.Year = movieYear;
    this.Genre = movieGenre;
}



document.addEventListener("DOMContentLoaded", function (event) {

    document.getElementById("buttonAdd").addEventListener("click", function () {

        movieArray.push(new MovieObject(document.getElementById("movieTitle").value, document.getElementById("movieYear").value, selectedGenre));
        console.log(movieArray);
        document.getElementById("movieTitle").value = "";
    });

    $(document).bind("change", "#select-type", function (event, ui) {
        selectedGenre = document.getElementById("select-type").value;
    });

    // page before show code *************************************************************************
    $(document).on("pagebeforeshow", "#list", function (event) {   
        createList();
    });
    

});



function createList() {
    
    // clear prior data


    var myul = document.getElementById("myList");
    myul.innerHTML = '';

    movieArray.forEach(function (element,) {   // use handy array forEach method
        var li = document.createElement('li');
        li.innerHTML = element.Title + " (" + element.Year + ") " + ":  " + element.Genre;
        myul.appendChild(li);
    });
};

