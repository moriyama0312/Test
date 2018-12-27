var gulp = require("gulp");

gulp.task("sass", function(){
	gulp.src("./resource/sass/*.scss")
		.pipe(sass())
		.pipe(gulp.dest("./resource/css/"))
});