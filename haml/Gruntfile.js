module.exports = function(grunt){

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        connect: {
            server: {
                options: {
                    port: 9000,
                    hostname: 'localhost'
                }
            }
        },
        watch: {
            scripts: {
                files: 'js/_src/*.js',
                tasks: ['concat', 'uglify']
            },
            sass: {
                files: '_sass/*.scss',
                tasks: ['sass', 'cssmin']
            },
            haml: {
                files: 'haml/*.haml',
                tasks: ['haml']
            }
        },
        concat: {
            common: {
                files: {
                    'js/all.js': [
                        'js/_src/test.js',
                        'js/_src/test02.js'
                    ]
                }
            }
        },
        uglify: {
            common: {
                files: {
                    'js/all.min.js': 'js/all.js'
                }
            }
        },
        sass: {
            common: {
                options: {
                    style: 'expanded'
                },
                files: {
                    'css/style.css': '_sass/style.scss'
                }
            }
        },
        cssmin: {
            compress: {
                files: {
                    'css/style-min.css': 'css/style.css'
                }
            }
        },
        haml: {
            dist: {
                files: {
                    'index.html': 'haml/index.haml'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-haml');
    grunt.registerTask('default', ['concat', 'uglify', 'sass', 'cssmin', 'connect', 'watch']);

}
