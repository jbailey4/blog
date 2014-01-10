module.exports = function(grunt) {

  grunt.initConfig({

    meta: {
      scripts: [
        'js/**/*.js'
      ],
      styles: [
        'sass/**/*.scss',
        'css/**/*.css'
      ]
    },

    //complie scss files to css
    compass: {                  
      dist: {                   
        options: {              
          sassDir: 'sass',
          cssDir: 'css',
          outputStyle: 'compressed'
        }
      }
    },

    // Watch files for changes
    watch: {
      styles: {
        files: ['<%= meta.styles %>'],
        tasks: ['compass:dist'],
      }
    },

    //Autoprefixer parses CSS and adds vendor-prefixed CSS 
    //properties using the Can I Use database.
    autoprefixer: {

      options: {
        // Task-specific options go here.
      },

        // just prefix the specified file
      single_file: {
        options: {
          // Target-specific options go here.
        },
        src: 'src/css/bass.css'
      },
    },  

    // Run Jekyll commands
    jekyll: {
      serve: {
          options: {
            serve : true,
            // Add the --watch flag, i.e. rebuild on file changes
            watch: true
          }
      },
      build: {
        options: {
            serve : false,
            // Add the --watch flag, i.e. rebuild on file changes
            watch: false
          }
      }
    }

});

grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-compass');
grunt.loadNpmTasks('grunt-autoprefixer');
grunt.loadNpmTasks('grunt-jekyll');

//alias for grunt serve - jekyll serve --watch
grunt.registerTask('serve', 'jekyll:serve');
grunt.registerTask('build', 'jekyll:build');

grunt.registerTask('dev', function() {
  grunt.task.run([
      'compass:dist',
      'autoprefixer'
    ]);
  grunt.task.run('watch');
});

grunt.registerTask('build', function() {
  grunt.task.run([
      'jekyll:build'
    ]);
});

grunt.registerTask('default', ['dev']);

}