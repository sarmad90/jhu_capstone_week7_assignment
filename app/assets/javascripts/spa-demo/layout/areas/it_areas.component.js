(function() {
	angular
		.module("spa-demo.layout")
		.component("sdITAreas", {
			templateUrl: itareastemplateUrl,
			controller: ITAreasController,
			transclude: true,
		})
		.component("sdITArea", {
			templateUrl: itareatemplateUrl,
			controller: ITAreaController,
			transclude: true,
			require: {
				areasController: "^^sdITAreas"
			}
		})
		.directive("sdITAreasSide", [function(){
      return {
        controller: AreasSideController,
        controllerAs: "sideVM",
        bindToController: true,
        restrict: "A",
        scope: false,
        require: {
          areas: "^sdITAreas"
        }
      }
    }]);

	itareastemplateUrl.$inject = ["spa-demo.config.APP_CONFIG"];
	function itareastemplateUrl(APP_CONFIG) {
		return APP_CONFIG.it_areas_html;
	}
	itareatemplateUrl.$inject = ["spa-demo.config.APP_CONFIG"];
	function itareatemplateUrl(APP_CONFIG) {
		return APP_CONFIG.it_area_html;
	}

	ITAreasController.$inject = ["$scope"];
	function ITAreasController($scope) {
		var vm = this;
		vm.hidden = true;
		vm.$onInit = function() {
			console.log("ITAreasController",$scope);
		}
		return;
		////////////////////////
	}

	ITAreaController.$inject = ["$scope"];
	function ITAreaController($scope) {
		var vm = this;
		vm.show = true;
		vm.showThings = showThings;
		vm.$onInit = function() {
			console.log("ITAreaController",$scope);
		}
		return;
		//////////////////////////
		function showThings(check) {
			vm.show = check;
			vm.areasController.hidden = check ? false : true;
		}
	}
	AreasSideController.$inject = [];
  function AreasSideController() { 
    var vm = this;
    vm.isHidden = isHidden;

    return;
    /////////////////
    function isHidden() {
      var result=vm.areas.hidden;  
      return result;
    }
  }


})();