$(document).ready(function() {

//var Triejs = require('triejs');
//var trie = new Triejs();
var trie;


function create_trie(){
	trie = new Triejs();
	//Adding in trie from text area
	var lines = $("#searchedWords").val().split('\n');
	
	for(var i = 0;i < lines.length;i++){
	    //console.log(lines[i]);
	    trie.add(lines[i],lines[i]);
	}



	var vlinks;
	var vlines = $("#visitedLinks").val().split('\n');
	for(var i = 0;i < vlines.length;i++){
          //console.log(lines[i]);
	  vlinks = vlines[i].split(',');
          trie.add(vlinks[0],vlinks.slice(0,vlinks.length));
      }


}


	
$("#myText").keyup( function() {

    document.getElementById('myTextArea').innerHTML = '';
    var searchQuery = $("#myText").val();
    var result = trie.find(searchQuery);
    
    var urls = [];

    if(result === undefined) return;
    const iterator = result.values();
    
    for (const value of iterator) {

		      if(Array.isArray(value))
		      {	
			 document.getElementById("myTextArea").innerHTML += value[0] + "\n";
			 var len = value.length;
			 var i;
			 for(i=1;i<len;i++)
			 {
			      urls.push(value[i]);
			 }

		      }
			
		      else
		     {
		     
			     //console.log(typeof value);
			     document.getElementById("myTextArea").innerHTML += value + "\n";
		     }
	
    }


	for (const value of urls)
	{
		document.getElementById("myTextArea").innerHTML += value + "\n";
	}



});






document.getElementById ("updateButton").addEventListener ("click", create_trie);


});
