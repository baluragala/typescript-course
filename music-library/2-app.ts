/**
 * Created by moksha on 06/02/17.
 */

enum Genre { Jazz, Pop, Techno, Rock }

function GetAlbums() {
    const albums = [
        {id: 1, name: 'Nevermind', artist: 'Nirvana', releaseDate: '1991-01-17', genre: Genre.Rock},
        {id: 2, name: '1989', artist: 'Taylor Swift', releaseDate: '2014-10-27', genre: Genre.Pop},
        {id: 2, name: 'Kid A', artist: 'Radiohead', releaseDate: '2000-10-02', genre: Genre.Rock}
    ];
    return albums;
}

function printAlbums(albums): void {
    for (let album of albums) {
        console.log('Name : ' + album.name + ', Artist : ' + album.artist + ', Release Date: ' + album.releaseDate);
    }
}

function GetAlbumsByGenre(genre: Genre = Genre.Pop): Array<Object> {
    const albums = GetAlbums();
    const filteredAlbums = albums.filter(album => album.genre == genre);
    return filteredAlbums;
}

function GetAlbumByID(id: number): Object {
    const albums = GetAlbums();
    const filteredAlbums = albums.filter(album => album.id == id);
    return filteredAlbums.length == 1 ? filteredAlbums[0] : {};
}

function addAlbum(name: string, artist: string, genre: Genre, releaseDate?: string): Object[] {
    let albums = GetAlbums();
    albums.push(
        {
            id: albums.length + 1,
            name: name,
            artist: artist,
            genre: genre,
            releaseDate: releaseDate
        });
    return albums;
}

const rockAlbums = GetAlbumsByGenre(Genre.Rock);
printAlbums(rockAlbums);
console.log(GetAlbumByID(1));
console.log(printAlbums(GetAlbumsByGenre()));
