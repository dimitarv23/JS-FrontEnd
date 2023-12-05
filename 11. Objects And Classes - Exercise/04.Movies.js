function printMovies(commands) {
    const movies = [];

    commands.forEach((cmdArgs) => {
        if (cmdArgs.includes("addMovie")) {
            const movieName = cmdArgs.replace("addMovie ", "");
            movies.push({
                name: movieName,
            });
        } else if (cmdArgs.includes("directedBy")) {
            const [movieName, director] = cmdArgs.split(" directedBy ");

            if (movies.some((x) => x.name === movieName)) {
                const movie = movies.find((x) => x.name === movieName);
                movie.director = director;
            }
        } else if (cmdArgs.includes("onDate")) {
            const [movieName, date] = cmdArgs.split(" onDate ");

            if (movies.some((x) => x.name === movieName)) {
                const movie = movies.find((x) => x.name === movieName);
                movie.date = date;
            }
        }
    });

    movies
        .filter((x) => x.name && x.director && x.date)
        .forEach((movie) => {
            const movieJson = JSON.stringify(movie);
            console.log(movieJson);
        });
}

printMovies([
    "addMovie Fast and Furious",
    "addMovie Godfather",
    "Inception directedBy Christopher Nolan",
    "Godfather directedBy Francis Ford Coppola",
    "Godfather onDate 29.07.2018",
    "Fast and Furious onDate 30.07.2018",
    "Batman onDate 01.08.2018",
    "Fast and Furious directedBy Rob Cohen",
]);
