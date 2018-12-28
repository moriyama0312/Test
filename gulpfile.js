var gulp = require("gulp");
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");

gulp.task("sass", function(){
	gulp.src("./resource/sass/*.scss")
		.pipe(sass())
		.pipe(autoprefixer())
		.pipe(gulp.dest("./resource/css/"));
});

gulp.task("default", function() {
    gulp.watch("./resource/sass/*.scss", gulp.series("sass"));
});