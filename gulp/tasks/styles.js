var gulp = require('gulp'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
nested = require('postcss-nested'),
cssImport = require('postcss-import'),
mixins = require('postcss-mixins'),
cssvars = require('postcss-simple-vars');


gulp.task('styles', function(){
   return gulp.src('./app/assets/styles/style.css')
    .pipe(postcss([cssImport, mixins, cssvars, nested, autoprefixer]))
    .on('error', function(errInfo){
       console.log(errInfo.toString());
       this.emit('end');
   })
    .pipe(gulp.dest('./app/temp/styles/'));
});