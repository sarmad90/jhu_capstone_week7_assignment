(function() {
  "use strict";

  angular
    .module("spa-demo.subjects")
    .component("sdITImages", {
      templateUrl: itImagesTemplateUrl,
      controller: sdITImagesController,
    });

  itImagesTemplateUrl.$inject = ["spa-demo.config.APP_CONFIG"];
  function itImagesTemplateUrl(APP_CONFIG) {
    return APP_CONFIG.it_images_html;
  }   
  sdITImagesController.$inject = ["$scope","spa-demo.subjects.ITImages"]
  function sdITImagesController($scope,imageThings) {
    var vm = this;
    vm.$postLink = function() {
      $scope.$watch(
        function() { return imageThings.getImages(); }, 
        function(images) { 
          vm.images = images; 
        }
      );
    }
    vm.updateImageId = updateImageId;
    return;
    //////////////////////////
    function updateImageId(index) {
      // console.log("index", index);
      imageThings.updateImageId(index);
    }
  }
})();