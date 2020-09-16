// from data.js
 var tableData = data;

// YOUR CODE HERE!
// -------------------------- webpage is displaying all the table content---------------------------------------
// var table = d3.select("#ufo-tableable");
// table.attr("class", "table table-striped");

// var tbody = d3.select("tbody");
// console.log(data);
// data.forEach(function(w_data){
//     console.log(w_data);
//     var t_row =tbody.append("tr");
//     Object.entries(w_data).forEach(function([k,v]){
//     console.log(k,v);
    
//     var cell = t_row.append("td");
//     cell.text(v);
    
    
//      });
    
    
//     });







// ------------------------------------------------------------ code for the filtered data-----------------------------------------------
// select the button
var button =d3.select("#filter-btn");

// Select th form
var form =d3.select("form");
console.log(form);
//  create event handlers

button.on("click",runEnter);
form.on("submit",runEnter);

//  Complete the event handler function for the form

function runEnter(){

// prevent the page from refreshing
 d3.event.preventDefault();

// Select the input element and get the raw html code
var inputElement = d3.select("#datetime");
console.log(inputElement);

// Get the value property of the input element

var inputValue =inputElement.property("value");

console.log(inputValue);
console.log(tableData);

 var filterdData = tableData.filter(dateEle =>dateEle.datetime===inputValue);
 console.log(filterdData);


//  once the data is filtered need to append  each row to the table
filterdData .forEach(function(filterdate){
    console.log(filterdate);
    var tbody = d3.select("tbody");
      var row =tbody.append("tr");
     Object.entries(filterdate).forEach(function([k,v]){
        
        console.log(k,v);
        var cell = row.append("td");
        cell.text(v);
    
    
     });
    
    
    });

};

