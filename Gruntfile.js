module.exports = function(grunt) {
  var browsers = [{
    browserName: "firefox",
    version: "19",
    platform: "XP"
  },{
  //   browserName: "chrome",
  //   platform: "XP"
  // }, {
  //   browserName: "chrome",
  //   platform: "linux"
  // }, {
    browserName: "internet explorer",
    version: "10",
    platform: "WIN8"
  // }, {
  //   browserName: "internet explorer",
  //   version: "9",
  //   platform: "VISTA"
  }];

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
    },
    connect: {
      server: {
        options: {
          base: "",
          port: 9999
        }
      }
    },
    watch: {},
    'saucelabs-mocha': {
      all: {
        options: {
          urls: ["http://127.0.0.1:9999/test/index.html"],
          tunnelTimeout: 5,
          build: process.env.TRAVIS_JOB_ID,
          concurrency: 3,
          browsers: browsers,
          testname: 'fundomplate',
          tags: ['master']
        }
      }
    }
  })

  grunt.loadNpmTasks('grunt-contrib-uglify')
  grunt.loadNpmTasks('grunt-contrib-jshint')
  grunt.loadNpmTasks("grunt-contrib-connect")
  grunt.loadNpmTasks("grunt-contrib-watch")
  grunt.loadNpmTasks('grunt-string-replace')
  grunt.loadNpmTasks("grunt-saucelabs")

  grunt.registerTask('default', ['jshint', 'string-replace', 'uglify'])
  grunt.registerTask('test', ['connect', 'saucelabs-mocha'])
  grunt.registerTask('dev', ['connect', 'watch'])
}
