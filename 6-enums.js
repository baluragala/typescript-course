/**
 * Created by moksha on 06/02/17.
 */
var GenreDefault;
(function (GenreDefault) {
    GenreDefault[GenreDefault["Jazz"] = 0] = "Jazz";
    GenreDefault[GenreDefault["Pop"] = 1] = "Pop";
    GenreDefault[GenreDefault["Techno"] = 2] = "Techno";
    GenreDefault[GenreDefault["Funk"] = 3] = "Funk";
})(GenreDefault || (GenreDefault = {}));
;
var GenreCustom;
(function (GenreCustom) {
    GenreCustom[GenreCustom["Jazz"] = 1000] = "Jazz";
    GenreCustom[GenreCustom["Pop"] = 1001] = "Pop";
    GenreCustom[GenreCustom["Techno"] = 1002] = "Techno";
    GenreCustom[GenreCustom["Funk"] = 1003] = "Funk";
})(GenreCustom || (GenreCustom = {}));
;
var GenreUserDefine;
(function (GenreUserDefine) {
    GenreUserDefine[GenreUserDefine["Jazz"] = 1000] = "Jazz";
    GenreUserDefine[GenreUserDefine["Pop"] = 2000] = "Pop";
    GenreUserDefine[GenreUserDefine["Techno"] = 3000] = "Techno";
    GenreUserDefine[GenreUserDefine["Funk"] = 4000] = "Funk";
})(GenreUserDefine || (GenreUserDefine = {}));
;
var albumGenre = GenreUserDefine.Techno;
console.log(albumGenre);
console.log(GenreUserDefine[albumGenre]);
