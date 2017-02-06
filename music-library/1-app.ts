/**
 * Created by moksha on 06/02/17.
 */

enum Genre { Jazz, Pop, Techno, Rock }

function GetAlbums() {
    const albums = [
        {id: 1, name: 'Nevermind', artist: 'Nirvana', releseDate: '1991-01-17', genre: Genre.Rock},
        {id: 2, name: '1989', artist: 'Taylor Swift', releseDate: '2014-10-27', genre: Genre.Pop},
        {id: 2, name: 'Kid A', artist: 'Radiohead', releseDate: '2000-10-02', genre: Genre.Rock}
    ];
    return albums;
}

function printAlbums(albums): void {
    for (let album of albums) {
        console.log('Name : ' + album.name + ', Artist : ' + album.artist + ', Release Date: ' + album.releseDate);
    }
}

function GetAlbumsByGenre(genre: Genre): Array<Object> {
    const albums = GetAlbums();
    const filteredAlbums = albums.filter(function (album) {
        //console.log(album.genre, genre, album.genre == genre);
        return album.genre == genre;
    });
    return filteredAlbums;
}

const rockAlbums = GetAlbumsByGenre(Genre.Rock);
printAlbums(rockAlbums);

