var face = (function () {
    
    var PERCENTAGE = 100;
    
    var angerProbability;       var angerName = "AngerProbability";
    var blurredProbability;     var blurredName = "BlurredProbability";
    var joyProbability;         var joyName = "JoyProbability";
    var headwearProbability;    var headwearName = "HeadwearProbability";
    var sorrowProbability;      var sorrowName = "SorrowProbability";
    var surpriseProbability;    var surpriseName = "SurpriseProbability";
    var detectionConfidence;    var detectionName = "DetectionConfidence";

    
    var initialize = function(anger,blurred,joy,headwear,sorrow,surprise,detection) {
        angerProbability = anger; blurredProbability = blurred;
        joyProbability = joy; headwearProbability = headwear;
        sorrowProbability = sorrow; surpriseProbability = surprise;
        detectionConfidence = detection;
    };
    
    var getAnger = function () {
       return { name: angerName,
                probability: angerProbability*PERCENTAGE
            };
    };
    
    var getBlurred = function () {
       return { name: blurredName,
                probability: blurredProbability*PERCENTAGE
            };
    };
    
    var getJoy = function () {
       return { name: joyName,
                probability: joyProbability*PERCENTAGE
            };
    };
    
    var getHeadwear = function () {
       return { name: headwearName,
                probability: headwearProbability*PERCENTAGE
            };
    };
    
    var getSorrow = function () {
       return { name: sorrowName,
                probability: sorrowProbability*PERCENTAGE
            };
    };
    
    var getSurprise = function () {
       return { name: surpriseName,
                probability:  surpriseProbability*PERCENTAGE
            };
    };
    var getDetectionConfidence = function () {
       return { name: detectionName,
                probability: detectionConfidence*PERCENTAGE
            };
    };
    
    var getEmotions = function () {
        var emotions = [];
        emotions.push(this.getAnger());
        emotions.push(this.getBlurred());
        emotions.push(this.getJoy());
        emotions.push(this.getSorrow());
        emotions.push(this.getSurprise());
        emotions.push(this.getHeadwear());
        emotions.push(this.getDetectionConfidence());
        return emotions;
    };
    
    
    /*  Public methods
     * ------------------------------------------------------------------------ */
    return {
        initialize: initialize,
        getAnger: getAnger,
        getBlurred: getBlurred,
        getJoy: getJoy,
        getHeadwear: getHeadwear,
        getSorrow: getSorrow,
        getSurprise: getSurprise,
        getDetectionConfidence: getDetectionConfidence,
        getEmotions: getEmotions
    };
    
})();

