module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    jshint: {
      build: {
        src: 'lib/<%= pkg.name %>.js'
      }
    },
    uglify: {
      options: {
        banner: '/*! fundomplate <%= pkg.version %> */\n'
      },
      build: {
        src: 'lib/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    }
  })

  grunt.loadNpmTasks("grunt-contrib-uglify")
  grunt.loadNpmTasks("grunt-contrib-jshint")

  grunt.registerTask("default", ["uglify"])
}
