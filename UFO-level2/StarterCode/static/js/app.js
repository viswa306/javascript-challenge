
 var tableData = data;


// YOUR CODE HERE!
// -------------------------- webpage is displaying all the table content---------------------------------------
// select the button
var button =d3.select("#filter-btn");

// Select the form
var form =d3.select("form");
console.log(form);
var tbody = d3.select("tbody");

function showtableData(rawdata ){
    tbody.html("");

    rawdata.forEach((tableinfo)=>{
        var row =tbody.append("tr");
    Object.entries(tableinfo).forEach(([k,v])=>{
        
        console.log(k,v);
        var cell = row.append("td");
        cell.text(v);
        
    
     });
    
    });

};

//  create event handlers

button.on("click",runEnter);
 form.on("change",showtableData(tableData));
// form.on("change",runEnter);

//  Complete the event handler function for the form

function runEnter(){

// prevent the page from refreshing
//  d3.event.preventDefault();

// Select the input element and get the raw html code
var inputElement = d3.select("#datetime");
console.log(inputElement);

// -------------------------------------------------------------------------------

//  select the  input  element city
 var inputCityEle = d3.select("#city");
// Get the value property of the input element

var inputCityVal = inputCityEle.property("value");
 console.log(inputCityVal);




// Get the value property of the input element


var inputValue =inputElement.property("value");

console.log(inputValue);
console.log(tableData);

//   var filterdData = tableData.filter(row =>row.datetime===inputValue && row.city === inputCityVal);
  if (inputCityVal && inputValue ){

    var filterdData = tableData.filter(dateEle =>dateEle.datetime===inputValue && dateEle.city === inputCityVal);
 }
 else if (!(inputCityVal) && !(inputValue)){
 
     var filterdData = tableData  ;
 
 }
 
 else if (inputValue ){
     var filterdData = tableData.filter(dateEle =>dateEle.datetime===inputValue);
 
 }
 else{
     var filterdData = tableData.filter(dateEle =>dateEle.city === inputCityVal); 
 }
  
 
 



//  var filterdData = tableData.filter(row =>row.datetime===inputValue);
 console.log(filterdData);

 showtableData(filterdData);


};











