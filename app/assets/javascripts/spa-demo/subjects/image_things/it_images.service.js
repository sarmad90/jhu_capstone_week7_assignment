(function() {
  "use strict";

  angular
    .module("spa-demo.subjects")
    .service("spa-demo.subjects.ITImages", ITImages);

  ITImages.$inject = [
  										"$resource",
                      "spa-demo.config.APP_CONFIG"];
  function ITImages($resource, APP_CONFIG) {
    var imagesResource = $resource(APP_CONFIG.server_url + "/api/images/:id",
    	{ id: '@id' },
    	{ 
    		query: { cache:false, isArray:true }
    	});
    var thingsResource = $resource(APP_CONFIG.server_url + "/api/find_things");
    var service = this;
    service.image_id = null;
    service.images = [];
    service.images = imagesResource.query();
    service.things = [];
    service.updateImageId = updateImageId;
    
    return;
    ///////////////////////
    function refresh() {
      console.log("refresh");
    	var result = thingsResource.query({image_id:service.image_id});
      result.$promise.then(function(things) {
        service.things = things;
        console.log("things",things);
      });
    }
    function updateImageId(image_id) {
    	service.image_id = image_id;
    	refresh();
    }
	}
	ITImages.prototype.getImages = function() {
    return this.images;
  }
  ITImages.prototype.getThings = function() {
  	return this.things;
  }

})();