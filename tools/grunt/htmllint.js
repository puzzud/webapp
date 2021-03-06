/*global module*/

module.exports = function (grunt, tasks)
{
  'use strict';

  // Load our node module required for this task.
  grunt.loadNpmTasks('grunt-html');

  // The configuration for a specific task.
  tasks.htmllint =
  {
    // The files that we want to check.
    dist:
    {
      options:
      {
        force: true,
        path: false,
        reportpath: false, // Turns logging to a file off, output will show in the CLI.
        opts:
        {
          maxerr: 1 // Acount of viewport user-scalable=no warning/error bullshit.
        }
      },

      // The files that we want to check.
      src:
      [
        grunt.uri + '*.html', // Include all HTML files in this directory.
        '!' + grunt.uri + '*.min.html' // Exclude any files ending with `.min.html`
      ]
    }
  };

  return tasks;
};
