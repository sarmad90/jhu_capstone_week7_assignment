(function() {
  "use strict";

  angular
    .module("spa-demo.layout")
    .component("sdITTabs", {
      templateUrl: tabsITTemplateUrl,
      controller: ITTabsController,
      transclude: true,
    })
    .component("sdITTab", {
      templateUrl: tabITTemplateUrl,
      controller: ITTabController,
      transclude: true,
      bindings: {
        label: "@"
      },
      require: {
        tabsController: "^^sdITTabs"
      }
    })
    ;

  tabsITTemplateUrl.$inject = ["spa-demo.config.APP_CONFIG"];
  function tabsITTemplateUrl(APP_CONFIG) {
    return APP_CONFIG.it_tabs_html;
  }    
  tabITTemplateUrl.$inject = ["spa-demo.config.APP_CONFIG"];
  function tabITTemplateUrl(APP_CONFIG) {
    return APP_CONFIG.it_tab_html;
  }    

  ITTabsController.$inject = ["$scope"];
  function ITTabsController($scope) {
    var vm=this;
    vm.tabs=[];
    vm.selectTab = selectTab;
    vm.refreshThings = refreshThings;

    vm.$onInit = function() {
      //console.log("TabsController",$scope);
    }
    return;
    //////////////
    function selectTab(tab) {
      angular.forEach(vm.tabs, function(tab){
        tab.selected=false;
      });
      tab.selected=true;
    }
    function refreshThings() {
      vm.tabs = [];
    }
  }

  ITTabsController.prototype.addTab = function(tab) {
    if (this.tabs.length===0) {
      tab.selected = true;
    }
    this.tabs.push(tab);
  }


  ITTabController.$inject = ["$scope"];
  function ITTabController($scope) {
    var vm=this;

    vm.$onInit = function() {
      //console.log("TabController",$scope);
      vm.tabsController.addTab(vm);
    }
    return;
    //////////////
  }
})();
