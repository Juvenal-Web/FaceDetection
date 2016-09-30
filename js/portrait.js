var portrait = (function () {
    
    var faces = [];
    var imgBase64;
    
    var DETAILS_NUMBER = 7;
    
    var initialize = function(faces, img) {
        this.faces = faces; this.imgBase64 = img;
    }
    
    var updateFace = function(i) {
        console.log(faces);
        face.initialize(this.faces[i].angerLikelihood,this.faces[i].blurredLikelihood,this.faces[i].joyLikelihood,
                this.faces[i].headwearLikelihood, this.faces[i].sorrowLikelihood, this.faces[i].surpriseLikelihood,
                this.faces[i].detectionConfidence);
    }
    
    var emotionsNumber = function() {
        return DETAILS_NUMBER;
    }
    
    /*  Public methods
     * ------------------------------------------------------------------------ */
    return {
        initialize: initialize,
        updateFace: updateFace,
        emotionsNumber: emotionsNumber
    };
    
})();

