module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    jshint: {
      build: {
        src: 'src/<%= pkg.name %>.js'
      }
    },
    uglify: {
      options: {
        banner: '// fundomplate <%= pkg.version %>\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },
    'string-replace': {
      build: {
        files: {
          'lib/<%= pkg.name %>.js': 'src/<%= pkg.name %>-npm.js'
        },
        options: {
          replacements: [{
            pattern: /\/\*! import (.*?) \*\//ig,
            replacement: function(match, p, offset, string) {
              return grunt.file.read('src/' + p);
            }
          }]
        }
      }
    }
  })

  grunt.loadNpmTasks("grunt-contrib-uglify")
  grunt.loadNpmTasks("grunt-contrib-jshint")
  grunt.loadNpmTasks("grunt-string-replace")

  grunt.registerTask("default", ["jshint", "string-replace", "uglify"])
}
