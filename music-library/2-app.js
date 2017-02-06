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
        { id: 1, name: 'Nevermind', artist: 'Nirvana', releaseDate: '1991-01-17', genre: Genre.Rock },
        { id: 2, name: '1989', artist: 'Taylor Swift', releaseDate: '2014-10-27', genre: Genre.Pop },
        { id: 2, name: 'Kid A', artist: 'Radiohead', releaseDate: '2000-10-02', genre: Genre.Rock }
    ];
    return albums;
}
function printAlbums(albums) {
    for (var _i = 0, albums_1 = albums; _i < albums_1.length; _i++) {
        var album = albums_1[_i];
        console.log('Name : ' + album.name + ', Artist : ' + album.artist + ', Release Date: ' + album.releaseDate);
    }
}
function GetAlbumsByGenre(genre) {
    if (genre === void 0) { genre = Genre.Pop; }
    var albums = GetAlbums();
    var filteredAlbums = albums.filter(function (album) { return album.genre == genre; });
    return filteredAlbums;
}
function GetAlbumByID(id) {
    var albums = GetAlbums();
    var filteredAlbums = albums.filter(function (album) { return album.id == id; });
    return filteredAlbums.length == 1 ? filteredAlbums[0] : {};
}
function addAlbum(name, artist, genre, releaseDate) {
    var albums = GetAlbums();
    albums.push({
        id: albums.length + 1,
        name: name,
        artist: artist,
        genre: genre,
        releaseDate: releaseDate
    });
    return albums;
}
var rockAlbums = GetAlbumsByGenre(Genre.Rock);
printAlbums(rockAlbums);
console.log(GetAlbumByID(1));
console.log(printAlbums(GetAlbumsByGenre()));
