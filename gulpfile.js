var gulp = require("gulp");
var sass = require("gulp-sass");

gulp.task("sass", function(){
	gulp.src("./resource/sass/*.scss")
		.pipe(sass())
		.pipe(gulp.dest("./resource/css/"));
});