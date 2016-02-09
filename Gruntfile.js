module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: 'modules',
          src: ['**/*.scss'],
          dest: 'modules',
          ext: '.css'
        }]
      }
    },

    concat: {
      dist: {
        files: [
          { src: ['modules/**/*.css'], dest: 'assets/css/my-app.css' }
        ]
      }
    },

    cssmin: {
      dist: {
        files: [
          { src: ['assets/css/my-app.css'], dest: 'assets/css/my-app-min.css' }   
        ]
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['sass','concat','cssmin']);

};