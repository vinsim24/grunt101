var grunt = require('grunt');

/*grunt.registerTask('default', 'default task description', function(){
  console.log('hello world');
});*/
grunt.registerTask('default', ['world', 'hello:adrian']);

grunt.registerTask('world', 'world task description', function(){
  console.log('hello world');
});

grunt.registerTask('hello', 'say hello', function(name){
  if(!name || !name.length)
    grunt.warn('you need to provide a name.');

  console.log('hello ' + name);
});
