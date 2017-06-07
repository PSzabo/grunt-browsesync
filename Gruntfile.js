module.exports = function (grunt) {

    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({

        autoprefixer: {
            dist: {
                src: ['www/css/main.css'],
                dest: 'www/css/main.css'
            },
            options:{
                browsers: ['> 10%']
            }
        },

        uglify: {
            options: {
                mangle: false
            },
            my_target: {
                files: {
                    'www/js/main.js': ['www/js/main.min.js']
                }
            }
        },

        cssmin: {
            target: {
                files: {
                    'www/css/main.min.css': ['www/css/main.css']
                }
            }
        },

        concat: {
            dist: {
                src: [
                    'bower_components/jquery/dist/jquery.min.js',
                    'bower_components/jquery-unveil/jquery.unveil.min.js',
                    'js/main.js'
                ],
                dest: 'www/js/main.min.js'
            }
        },

        less: {
            development: {
                files: {
                    "www/css/main.css": ['less/main.less']
                }
            }
        },

        watch: {
            less: {
                files: ['less/*.less'],
                tasks: ['less','autoprefixer','cssmin']
            },
            js:{
                files: [
                    'bower_components/jquery/dist/jquery.min.js',
                    'bower_components/jquery-unveil/jquery.unveil.min.js',
                    'js/main.js'
                ],
                tasks: ['concat','uglify']
            }
        },

        browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        'www/css/*.css',
                        'www/js/*.js',
                        'www/*.html'
                    ]
                },
                options: {
                    watchTask: true,
                    server: 'www'
                }
            }
        }
    });

    grunt.registerTask('default', ['browserSync', 'watch']);

};