function printSongsByTypeList(inputArr) {
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    const numberOfSongs = inputArr[0];
    const songs = [];
    const searchedTypeList = inputArr[inputArr.length - 1];

    for (let i = 1; i <= inputArr.length - 2; i++) {
        const [currTypeList, currSongName, currSongTime] =
            inputArr[i].split("_");

        songs.push(new Song(currTypeList, currSongName, currSongTime));
    }

    if (searchedTypeList === "all") {
        printSongs(songs);
    } else {
        const filteredSongs = songs.filter((song) => {
            return song.typeList === searchedTypeList;
        });

        printSongs(filteredSongs);
    }

    function printSongs(songs) {
        songs.forEach((song) => {
            console.log(song.name);
        });
    }
}

printSongsByTypeList([
    3,
    "favourite_DownTown_3:14",
    "favourite_Kiss_4:16",
    "favourite_Smooth Criminal_4:01",
    "favourite",
]);

printSongsByTypeList([
    4,
    "favourite_DownTown_3:14",
    "listenLater_Andalouse_3:24",
    "favourite_In To The Night_3:58",
    "favourite_Live It Up_3:48",
    "listenLater",
]);

printSongsByTypeList([2, "like_Replay_3:15", "ban_Photoshop_3:48", "all"]);
