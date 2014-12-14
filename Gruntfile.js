module.exports = function(grunt) {
    // 项目配置(任务配置)
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'src/scripts/*.js',
                dest: 'dest/scripts/main.min.js'
                //<%= pkg.name %>
            }
        },
        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                expand: true,
                cwd: 'src/sass/',
                src: ['*.scss'],
                dest: 'dest/styles',
                ext: '.css'
            },
            dev: {
                options: {
                    style: 'expanded',
                    debugInfo: false,
                    lineNumbers: false
                },
                expand: true,
                cwd: 'src/sass/',
                src: ['*.scss'],
                dest: 'dest/styles',
                ext: '.css'
            }
        },
        watch: {
            client: {
                files: ['*.html', 'css/*', 'js/*', 'images/**/*'],
                options: {
                    livereload: true
                }
            }
        }
    });

    // 加载插件
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');

    // 默认任务.
    grunt.registerTask('default', ['uglify', 'sass']);

    // 自定义任务
    grunt.registerTask('live', ['watch']);

};