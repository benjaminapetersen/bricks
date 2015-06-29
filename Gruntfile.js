module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        sass: {
            options: {
                sourceMap: false
            },
            dist: {
                files: {
                    'dist/modules/flex-layout.css': 'src/flex-layout.scss',
                    'dist/modules/flex-resize.css': 'src/flex-resize.scss',
                     //'dist/flex-media-queries.css': 'src/flex-media-queries.scss',
                    'dist/modules/flex-ordering.css': 'src/flex-ordering.scss',
                    'dist/modules/positioning.css': 'src/positioning.scss',
                    'dist/modules/misc.css': 'src/misc.scss',
                    'dist/layout.attrs.css': 'src/flex-all.scss',
                }
            }
        },
        // NOTE: autoprefixer is deprecated, in favor of postcss.
        // will be moving to that soon...
        autoprefixer: {
            options: {
                browsers: ['last 2 versions', 'ie 8', 'ie 9']
            },
            // aribitrarily_named_target: {
            //     src: 'dist/something.css',
            //     dest: 'dist/something.css'
            // },
            all : {
                src: 'dist/**/*.css'
            }

        },
        cssmin: {
          target: {
            files: [{
              expand: true,
              cwd: 'dist/',
              src: ['*.css', '!*.min.css'],
              dest: 'dist/',
              ext: '.min.css',
              extDot: 'last' // don't eat my dots!
            }]
          }
        },
        watch: {
          scripts: {
            files: 'src/*',
            tasks: ['default'],
            options: {
                interrupt: true,
                debounceDelay: 250
            }
          }
        }

    });

    // 1. build the sass into css files
    // 2. autoprefix those files
    // 3. minify those files
    // - provide output at each level rather than overwriting
    grunt.registerTask('default', ['sass', 'autoprefixer', 'cssmin']);

};
