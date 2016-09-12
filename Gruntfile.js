module.exports = function (grunt) {

  grunt.initConfig({
      //minifica os stylesheets
      cssmin: {
        all: {
          src: ['public/stylesheets/style.css'],
          dest: 'public/stylesheets/style.min.css'
        }
      },
    //Assiste as modificações
    sass: {
        dist: {
          files: {
            'public/stylesheets/style.css': 'public/stylesheets/style.scss'
          }
        }
      },
    //Verifica erros nos scripts
      jshint: {
        dist: {
          src: ['public/javascripts/main.js']
        }
      },
     //Comprimi as imagens
      imagemin: {
        dynamic: {
          files: [{
            expand: true,
            cwd: 'public/img/',
            src: ['**/*.{png, jpg, gif}'],
            dest: 'public/img/'
          }]
        }
      }

  
  });
    
    //carregamento do plugin

    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-imagemin');

    //registro de tarefas
    grunt.registerTask('build', [ 'cssmin', 'jshint', 'sass', 'imagemin']);

};
