//Wrapper function with one parameter
module.exports = function(grunt) {
  var name, latest, bannerContent, devRelease, minRelease,
      sourceMap, sourceMapUrl, lDevRelease, lMinRelease,
      lSourceMapMin;
 
  latest = '<%= pkg.name %>';
  name = '<%= pkg.name %>-v<%= pkg.version%>';
  bannerContent = '/*! <%= pkg.name %> v<%= pkg.version %> - ' +
    '<%= grunt.template.today("yyyy-mm-dd") %> \n' +
    ' *  License: <%= pkg.license %> */\n';
  devRelease = 'distrib/'+name+'.js';
  minRelease = 'distrib/'+name+'.min.js';

  minReleaseCss = 'distrib/style.min.css';
  minReleasePng = 'distrib/img/*';
  minReleaseJpg = 'distrib/img/*';

  sourceMapMin = 'distrib/'+name+'.min.js.map';
  sourceMapUrl = name+'.min.js.map';
 
  lDevRelease = 'distrib/'+latest+'.js';
  lMinRelease = 'distrib/'+latest+'.min.js';
  lSourceMapMin = 'distrib/'+latest+'.min.js.map';
   
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    qunit:{
      target: {
        src: ['test/**/*.html']
      }
    },


    // configure uglify task
    uglify:{
      options: {
        banner: bannerContent,
        sourceMapRoot: '../',
        sourceMap: sourceMapMin,
        sourceMappingURL: sourceMapUrl
      },
      target: {
        src: ['src/**/*.js'],
        dest: minRelease
      }
    },
    // configure concat task
    concat: {
      options: {
        banner: bannerContent
      },
      target: {
        src: ['src/**/*.js'],
        dest: devRelease
      }
    },
    // configure jshint task
    jshint: {
      options: {
        trailing: true,
        eqeqeq: true
      },
      target: {
        src: ['src/**/*.js', 'test/**/*.js']
      }
    },
    //configure cssmin task  
    cssmin: {
      minify: {
        src: ['src/**/*.css'],
        dest: minReleaseCss,
        ext: '.min.css'
      }
    },
    //configure imagemin
    imagemin: {
      png: {
        options: {
          optimizationLevel: 7
        },
        files: [
          {
            

          // Set to true to enable the following options…
          expand: true,
          // cwd is 'current working directory'
          cwd: 'src/img/',
          src: ['*.png'],
          // Could also match cwd line above. i.e. project-directory/img/
          dest: 'distrib/img/',
          ext: '.png'
          }
        ]
      },
      jpg: {
        options: {
          progressive: true
        },
        files: [
          {

          expand: true,
          // cwd is 'current working directory'
          cwd: 'src/img/',
          src: ['*.jpg'],
          // Could also match cwd. i.e. project-directory/img/
          dest: 'distrib/img/',
          ext: '.jpg'

          }
        ]
      }
    },

    //jasmine

    jasmine: {
    pivotal: {
      src: 'src/source/*.js',
      options: {
        specs: 'src/spec/*Spec.js',
      }
    }
  }




  });
 
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');


  grunt.loadNpmTasks('grunt-contrib-jasmine');
  

 

  grunt.registerTask('default', ['jshint', 'concat', 'uglify', 'cssmin', 'imagemin']);
};