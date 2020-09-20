
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
 
 //  Complete the event handler function for the form
 
 function runEnter(){
 
 // prevent the page from refreshing
 //  d3.event.preventDefault();
 
 // Select the input element and get the raw html code
 var inputElement = d3.select("#datetime");
 console.log(inputElement);
 
 //  select the input element city
 var inputCityEle = d3.select("#city");
 
 // select the input element State
 var inputStateEle = d3.select("#state");
 
 // Get the value property of the input element
 
 var inputStateVal = inputStateEle.property("value");
 console.log(inputStateVal);

 //  select the input element Country
var inputCountryele =d3.select("#country");

//  Get the value property of the input element
var inputCountryVal = inputCountryele.property("value");
console.log(inputCountryVal);
 
 // Get the value property of the input element
 
 var inputCityVal = inputCityEle.property("value");
 console.log(inputCityVal);
 
 // Get the value property of the input element
 
 var inputValue =inputElement.property("value");

 // select the input element shape
var inputShapeEle =d3.select("#shape");

// Get the value property of the input element

var inputShapeVal = inputShapeEle.property("value");
console.log(inputShapeVal);
 
 console.log(inputValue);
 console.log(tableData);

 var displayData = tableData;

 if (inputValue) {
     // var filterdData = tableData.filter(dateEle =>dateEle.datetime===inputValue && dateEle.city === inputCityVal);
    var filterdData = displayData.filter(dateEle => dateEle.datetime===inputValue );
    displayData = filterdData;
 }
    if(inputCityVal){
 
     var cityData = displayData.filter(dateEle => dateEle.city === inputCityVal);
     displayData = cityData;
 
    }
    
    if (inputStateVal){
        var stateData = displayData.filter(dateEle => dateEle.state === inputStateVal);
        displayData = stateData;
    }
 
    if (inputCountryVal){
     var countryData = displayData.filter(dateEle =>dateEle.country === inputCountryVal);
     displayData = countryData;
 
    }
    if (inputShapeVal) {
 
     var shapeData = displayData.filter(dateEle =>dateEle.shape === inputShapeVal);
     displayData = shapeData;
 
    }
 
    showtableData(displayData);
 
 
 };
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 





 





 
 
 
 