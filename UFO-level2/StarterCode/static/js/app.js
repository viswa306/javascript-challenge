
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
 // -------------------------------------------  input city element logic--------------------------------------
 //  select the input element city
 var inputCityEle = d3.select("#city");
 
 // select the input element State
 var inputStateEle = d3.select("#state");
 
 // Get the value property of the input element
 
 var inputStateVal = inputStateEle.property("value");
 console.log(inputStateVal);
 
 // Get the value property of the input element
 
 var inputCityVal = inputCityEle.property("value");
 console.log(inputCityVal);
 
 // Get the value property of the input element
 
 var inputValue =inputElement.property("value");
 
 console.log(inputValue);
 console.log(tableData);
 
 //  var filterdData = tableData.filter(dateEle =>dateEle.datetime===inputValue)
 //                             .map(dateEle => dateEle.city === inputCityVal);
 if (inputCityVal && inputValue && inputStateVal ){
 
     // var filterdData = tableData.filter(dateEle =>dateEle.datetime===inputValue && dateEle.city === inputCityVal);
    var filterdData = tableData.filter(dateEle =>dateEle.datetime===inputValue && dateEle.city === inputCityVal && dateEle.state === inputStateVal );
 }
 else if (!(inputCityVal) && !(inputValue) &&!(inputStateVal)){
 
     var filterdData = tableData  ;
 
 }
 
 else if (inputValue && inputStateVal ){
     var filterdData = tableData.filter(dateEle =>dateEle.datetime===inputValue && dateEle.state === inputStateVal );
 
 }
 else if (inputCityVal && inputValue){
     var filterdData = tableData.filter(dateEle =>dateEle.datetime===inputValue && dateEle.city === inputCityVal);
 }
 else if(inputCityVal && inputStateVal ){
     var filterdData = tableData.filter(dateEle => dateEle.city === inputCityVal && dateEle.state === inputStateVal );
 }
 
 else {
     var filterdData = tableData.filter(dateEle => dateEle.state === inputStateVal||dateEle.city===inputCityVal|| dateEle.datetime===inputValue ); 
 
 }
 
  console.log(filterdData);
 
  showtableData(filterdData);
 
 
 };
 
 
 
 
 