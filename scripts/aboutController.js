(function(module) {
  var aboutController = {};
  aboutController.index = function() {
    $('#about').show().siblings().hide();
    $('#contact').hide();
    repo.request(repoView.index);
  };
  module.aboutController = aboutController;
})(window);
