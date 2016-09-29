function EventHelper() {}

EventHelper.prototype.createProgressBar = function (emotion) {
    $("#details_emotions").append("<div><h5>" + emotion.name + "</h5><div class=\"progress\">\n\
        <div class=\"progress-bar progress-bar-info\" \n\ role=\"progressbar\" aria-valuenow=\"20\" \n\
        aria-valuemin=\"0\" aria-valuemax=\"100\" \n\
        style=\"width: " + emotion.probability + "%\"> \n\
        \n\</div></div></div>");
    
    $("#resultsContainer").toggleClass("hidden");
};

EventHelper.prototype.analizeJSON = function (resultJSON) {
    portrait.initialize(resultJSON.faces, resultJSON.image);
    portrait.updateFace(0);
    
    for(i = 0; i < portrait.emotionsNumber(); i++) {
        this.createProgressBar(face.getEmotions()[i]);
    }
    
};

EventHelper.prototype.swapUploadSend = function () {
    $("#upload_button, #send_button, #other_image_button").toggleClass("hidden");
};

EventHelper.prototype.otherPhoto = function () {
    var classes = ($("#resultsContainer").attr("class")).match(/hidden/g);
    if(classes === null) {
        $("#resultsContainer").toggleClass("hidden");
    }
    
    $("#img_container img").remove();
    $("#details_emotions div").remove();;
    this.swapUploadSend();
};

EventHelper.prototype.loadForm = function (helper) {

    $('#myForm').ajaxForm(function (result) {
        var resultJSON = JSON.parse(result);
        console.log(resultJSON);
        helper.analizeJSON(resultJSON);

    });
};

EventHelper.prototype.onLoad = function () {
    this.loadForm(this);
};

$(function () {

    var events = new EventHelper();
    events.onLoad();

    $("#upload_button").on("click", function () {
        $("#uploading_file").click();
    });

    $("#other_image_button").on("click", function () {
        events.otherPhoto();
    });

    $("#uploading_file").on("change", function () {
        var selectedFile = this.files[0];

        console.dir(selectedFile);

        var img = document.createElement("img");

        img.src = window.URL.createObjectURL(selectedFile);
        img.onload = function () {
            window.URL.revokeObjectURL(this.src);
        };
        img.className = "center-block maxWidth";

        $("#img_container").append(img);

        events.swapUploadSend();

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
 
 */