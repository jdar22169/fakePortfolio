(function(module) {
  var homeController = {};
  Project.fetchAll();
  homeController.index = function() {
    $('.tab-content').show();
  };
  repo.request(repoView.index);
  module.homeController = homeController;
})(window);
