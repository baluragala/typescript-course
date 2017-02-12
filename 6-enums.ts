/**
 * Created by moksha on 06/02/17.
 */
enum GenreDefault { Jazz, Pop, Techno, Funk }
;
enum GenreCustom { Jazz = 1000, Pop, Techno, Funk }
;
enum GenreUserDefine { Jazz = 1000, Pop = 2000, Techno = 3000, Funk = 4000 }
;

const albumGenre: GenreUserDefine = GenreUserDefine.Techno;

console.log(albumGenre);
console.log(GenreUserDefine[albumGenre]);
