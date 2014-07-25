module.exports = function(grunt) {
  var firefox = [{
    browserName: "firefox",
    version: "10",
    platform: "Windows 8"
  }, {
    browserName: "firefox",
    version: "16",
    platform: "Windows 8"
  }, {
    browserName: "firefox",
    version: "19",
    platform: "XP"
  }, {
    browserName: "firefox",
    version: "20",
    platform: "Windows 8"
  }, {
    browserName: "firefox",
    version: "22",
    platform: "Windows 8"
  }];

  var chrome = [{
    browserName: "googlechrome",
    platform: "OS X 10.6"
  }, {
    browserName: "chrome",
    platform: "XP"
  },{
    browserName: "chrome",
    platform: "Windows 7"
  }, {
    browserName: "chrome",
    platform: "linux"
  }];

  var ie = [{
    browserName: "internet explorer",
    version: "8",
    platform: "Windows XP"
  }, {
    browserName: "internet explorer",
    version: "9",
    platform: "VISTA"
  }, {
    browserName: "internet explorer",
    version: "9",
    platform: "Windows 7"
  }, {
    browserName: "internet explorer",
    version: "10",
    platform: "Windows 8"
  }, {
    browserName: "internet explorer",
    version: "11",
    platform: "Windows 8.1"
  }];

  var opera = [{
    browserName: "opera",
    version: "12",
    platform: "Windows 7"
  }];

  var safari = [{
    browserName:"android",
    version: "4.0",
    platform: "Linux"
  }, {
    browserName:"safari",
    version: "5",
    platform: "OS X 10.6"
  }, {
    browserName:"safari",
    version: "6",
    platform: "OS X 10.8"
  }];

  var iphone = [{
    browserName:"iphone",
    version: "5.0",
    platform: "OS X 10.6"
  }, {
    browserName:"iphone",
    version: "5.1",
    platform: "OS X 10.8"
  }, {
    browserName:"iphone",
    version: "6",
    platform: "OS X 10.8"
  }, {
    browserName:"iphone",
    version: "6.1",
    platform: "OS X 10.8"
  }];

  var browsers = firefox.concat(chrome).concat(ie).concat(opera).concat(safari).concat(iphone);

  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    jshint: {
      build: {
        src: 'src/<%= pkg.name %>.js'
      }
    },
    uglify: {
      options: {
        banner: '// ftl.js <%= pkg.version %>\n'
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
          build: "master-20140725-2321",
          concurrency: 3,
          browsers: browsers,
          testname: 'ftljs',
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
