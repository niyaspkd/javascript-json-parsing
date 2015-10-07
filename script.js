var header_list = []
var json_key = []
var table = document.createElement("table")
var trow = document.createElement("tr")
table.appendChild(trow)

var data
var header_name

function loadJSON(path, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        if (success)
          success(JSON.parse(xhr.responseText));
      } else {
        if (error)
          error(xhr);
      }
    }
  };
  xhr.open("GET", path, true);
  xhr.send();
}

function table_header(header_name)
{

  var th = document.createElement("th")
  trow.appendChild(th)
  var header = document.createTextNode(header_name)
  th.appendChild(header)

  document.getElementById("jsonTable").appendChild(trow)

  header_list.push(header_name)

}



loadJSON("person.json", function(data){


    table_header("FirstName")
    table_header("LastName")


    

   

    table_header("Address")


    



    for (var i = 0; i < header_list.length; i++) {
      var tr = document.createElement("tr")
      table.appendChild(tr)

      for (index in data[i]) {
        json_key.push(index)
        keys = Object.keys(data[0])
        
        console.log(header_list)

        if(header_list.indexOf(index) >-1){
        var td = document.createElement("td")
        tr.appendChild(td)
        if (index=="Address"){
        address=data[i][index]['streetAddress']+data[i][index]['city']+data[i][index]['postalCode']
        data_json = document.createTextNode(address)
        }
        else{
        data_json = document.createTextNode(JSON.stringify(data[i][index]))

        }

    td.appendChild(data_json)  
        }
        


    // Add Address, age and phone number here

    document.getElementById("jsonTable").appendChild(tr)
  }
    }



  },
  function(xhr) {
    console.error(xhr);
  }
);
// Code goes here

