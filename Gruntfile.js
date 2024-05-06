module.exports = function (grunt) {

    //Configuración de tareas

    grunt.initConfig({

        //Configuración de una tarea específica

        uglify: {

            suma: {

                //Opciones de la tarea

                src: 'js/suma.js',
                dest: 'dist/suma.min.js'

            },

            resta: {

                src: 'js/resta.js',
                dest: 'dist/resta.min.js'

            },

            dist: {

                src: ['js/*.js'],
                dest: 'dist/operaciones.min.js'

            }

        }

    })

    //Plugins de Grunt que proporcionan tareas

    grunt.loadNpmTasks('grunt-contrib-uglify')

    //Registro de tareas personalizadas

    grunt.registerTask('sumaresta', ['uglify:suma', 'uglify:resta']);
    grunt.registerTask('dist', ['uglify:dist']);

}
