var saveBtn = $(".saveBtn");

//var currentDay = document.querySelector("#currentDay");
//var currentDate = moment();
//currentDay.textContent = currentDate.format("MMMM Do YYYY");

$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage -done

var saveTasks = function () {
  
  var text = $(this).siblings(".content").val();
  var idInfo = $(this).siblings(".content").attr("id");
  
  
  console.log(idInfo);
  
  textInfo = localStorage.setItem(idInfo, JSON.stringify(text));
  console.log("button clicked");
};

saveBtn.on("click", saveTasks);

// WHEN I refresh the page
// THEN the saved events persist
var loadTask = function() {
// An array of id's for text area
  var textareaArray= ["9", "10", "11","12", "13", "14", "15", "16","17"];
// Methods to call the hour
  var currentTime = moment().hour();
  for (var i = 0; i < textareaArray.length; i++) {
// This calls the id from the textarea and adds it to the array
    var id = "#" + textareaArray[i];
// Pulls text area array 
    $(id).val(localStorage.getItem(textareaArray[i]));
// Write within for loop 
    
    if ( textareaArray[i] > currentTime) {
      
      $(id).addClass("bg-secondary");
      
      $(id).removeClass("bg-primary");

    } else if (textareaArray[i] < currentTime) {
      $(id).addClass("bg-info");
      $(id).removeClass("bg-primary");
    }
  } 
};


function clear() {
  var textareaArray= ["9", "10", "11","12", "13", "14", "15", "16","17"];
  for (var i = 0; i < textareaArray.length; i++) {
    var id = "#" + textareaArray[i];
    window.localStorage.removeItem(textareaArray[i]);
    $(id).val("");
}
};

$("#clearCalendar").click(clear);

loadTask();



