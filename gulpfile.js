import gulp from "gulp";

const paths = {
	pages: ["scss/**/*", "!scss/**/*.test.scss"],
};

gulp.task("default", () => gulp.src(paths.pages).pipe(gulp.dest("dist")));
