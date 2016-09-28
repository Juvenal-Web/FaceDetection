var portrait = (function () {
    
    var faces = [];
    
    var initialize = function(faces) {
        this.faces = faces;
    }
    
    var getFace = function(i) {
        return faces[i];
    }
    
    /*  Public methods
     * ------------------------------------------------------------------------ */
    return {
        initialize: initialize,
        getFace: getFace
    };
    
})();

