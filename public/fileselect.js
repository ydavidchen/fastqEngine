$(function() {
  // We can attach the `fileselect` event to all file inputs on the page
  $(document).on('change', ':file', function() {
    var input = $(this),
        numFiles = input.get(0).files ? input.get(0).files.length : 1,
        //label = input.val(); 
        label = document.getElementsByTagName('input')[0].files[0].path
        // label = input.val().replace(/\\/g, '/').replace(/.*\//, ''); 
    input.trigger('fileselect', [numFiles, label]);
  });

  // We can watch for our custom `fileselect` event like this
  $(document).ready( function() {
      $(':file').on('fileselect', function(event, numFiles, label) {

          var input = $(this).parents('.input-group').find(':text'),
              log = numFiles > 1 ? numFiles + ' files selected' : label;

          console.log(input.length); 
          if( input.length ) {
              input.val(log);
          } else {
              if( log ) {
                console.log(log);
                // alert(log);
              }
          }
      });
  });

});

console.save = function(data, filename){

    if (! data) {
        console.error('Console.save: No data')
        return;
    }

    if (!filename) {
      filename = 'console.json'; 
    }

    if (typeof data === "object"){
        data = JSON.stringify(data, undefined, 4)
    }

    var blob = new Blob([data], {type: 'text/json'}),
        e    = document.createEvent('MouseEvents'),
        a    = document.createElement('a')

    a.download = filename; 
    a.href = window.URL.createObjectURL(blob); 
    a.dataset.downloadurl =  ['text/json', a.download, a.href].join(':'); 
    e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    a.dispatchEvent(e); 
 }


activateSaveAndExecute = function() {
  console.save(console); //save

  var mirror = require('browser-terminal-mirror');
  mirror({
      errorPattern: /Warning:/g //discussed below 
  });

  var shellscript = new File("../shellPipeline/");
  shellscript.execute();
}




