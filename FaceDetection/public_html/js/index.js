


$(function () {
    // bind 'myForm' and provide a simple callback function 
    $('#myForm').ajaxForm(function (result) {
        var resultJSON = JSON.parse(result);
        console.log(resultJSON);
    });
});


/*
$(document).ready(function () {
    // bind 'myForm' and provide a simple callback function 
    $('#myForm').ajaxForm(function () {
        alert("Thank you for your comment!");
    });
}); */
/*
//progress bar
<div class="progress">
  <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 20%">
    <span class="sr-only">20% Complete</span>
  </div>
</div>
*/