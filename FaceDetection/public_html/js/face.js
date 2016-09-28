var face = (function () {
    
    var PERCENTAGE = 100;
    
    var angerProbability;
    var blurredProbability;
    var joyProbability;
    var headwearProbability;
    var sorrowProbability;
    var surpriseProbability;
    var detectionConfidence;
    
    var initialize = function(anger,blurred,joy,headwear,sorrow,surprise,detection) {
        angerProbability = anger; blurredProbability = blurred;
        joyProbability = joy; headwearProbability = headwear;
        sorrowProbability = sorrow; surpriseProbability = surprise;
        detectionConfidence = detection;
    }
    
    var getAnger = function () {
       return angerProbability*PERCENTAGE;
    };
    
    var getBlurred = function () {
       return blurredProbability*PERCENTAGE;
    };
    
    var getJoy = function () {
       return joyProbability*PERCENTAGE;
    };
    
    var getHeadwear = function () {
       return headwearProbability*PERCENTAGE;
    };
    
    var getSorrow = function () {
       return sorrowProbability*PERCENTAGE;
    };
    
    var getSurprise = function () {
       return surpriseProbability*PERCENTAGE;
    };
    var getDetectionConfidence = function () {
       return detectionConfidence*PERCENTAGE;
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
        getDetectionConfidence: getDetectionConfidence
    };
    
})();

