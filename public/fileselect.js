var myJson = {
  users: {
    Job: "current job",
    Parameters: {}
  }
}; 

add2Json = function(s) {
  console.log(s);
  myJson.users.Parameters[s] = s;
  // alert(s);
}

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
                alert(log); 
              }
          }
      });
  });
  return myJson;
});

function exportJson() {
  console.log("Beginning to outputing genome parameters...");
  var txtFile = "/tmp/test.txt";
  console.log("Complete step 0!");
  var file = new File([""], txtFile, {type: "text/plain"})
  console.log("Complete step 1!");
  var str = JSON.stringify(myJson);
  console.log("Complete step 2!"); 

  file.open("w"); //open file with write access
  file.writeln("First line of text");
  file.writeln("Second line of text " + str);
  file.write(str);
  file.close();
  console.log("File written!");
}

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

// function convertToCSV(objArray) {
//     var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
//     var str = '';
//     for (var i = 0; i < array.length; i++) {
//         var line = '';
//         for (var index in array[i]) {
//             if (line != '') line += ','
//             line += array[i][index];
//         }
//         str += line + '\r\n';
//     }
//     return str;
// }

// function exportCSVFile(headers, items, fileTitle) {
//     if (headers) {
//         items.unshift(headers);
//     }
//     // Convert Object to JSON
//     var jsonObject = JSON.stringify(items);
//     var csv = this.convertToCSV(jsonObject);
//     var exportedFilenmae = fileTitle + '.csv' || 'export.csv';
//     var blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
//     if (navigator.msSaveBlob) { // IE 10+
//         navigator.msSaveBlob(blob, exportedFilenmae);
//     } else {
//         var link = document.createElement("a");
//         if (link.download !== undefined) { // feature detection
//             // Browsers that support HTML5 download attribute
//             var url = URL.createObjectURL(blob);
//             link.setAttribute("href", url);
//             link.setAttribute("download", exportedFilenmae);
//             link.style.visibility = 'hidden';
//             document.body.appendChild(link);
//             link.click();
//             document.body.removeChild(link);
//         }
//     }
// }

// $("#save-btn").click(function() {
//   exportJson(myJson); 
// });

