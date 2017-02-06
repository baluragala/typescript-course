/**
 * Created by moksha on 06/02/17.
 */
var Genre;
(function (Genre) {
    Genre[Genre["Jazz"] = 0] = "Jazz";
    Genre[Genre["Pop"] = 1] = "Pop";
    Genre[Genre["Techno"] = 2] = "Techno";
    Genre[Genre["Rock"] = 3] = "Rock";
})(Genre || (Genre = {}));
function GetAlbums() {
    var albums = [
        { id: 1, name: 'Nevermind', artist: 'Nirvana', releseDate: '1991-01-17', genre: Genre.Rock },
        { id: 2, name: '1989', artist: 'Taylor Swift', releseDate: '2014-10-27', genre: Genre.Pop },
        { id: 2, name: 'Kid A', artist: 'Radiohead', releseDate: '2000-10-02', genre: Genre.Rock }
    ];
    return albums;
}
function printAlbums(albums) {
    for (var _i = 0, albums_1 = albums; _i < albums_1.length; _i++) {
        var album = albums_1[_i];
        console.log('Name : ' + album.name + ', Artist : ' + album.artist + ', Release Date: ' + album.releseDate);
    }
}
function GetAlbumsByGenre(genre) {
    var albums = GetAlbums();
    var filteredAlbums = albums.filter(function (album) {
        //console.log(album.genre, genre, album.genre == genre);
        return album.genre == genre;
    });
    return filteredAlbums;
}
var rockAlbums = GetAlbumsByGenre(Genre.Rock);
printAlbums(rockAlbums);
