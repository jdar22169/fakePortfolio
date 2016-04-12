(function(module) {
  var repoView = {};
  var emptyList = function() {
    $('#about').find('ul').empty;
  };
  var makeTemplate = function(repo) {
    var template = Handlebars.compile($('#reposTemplate').text());
    return template(repo);
  };
  repoView.index = function() {
    emptyList();
    $('#gitRepos').append(repo.with('description').map(makeTemplate));
  };

  module.repoView = repoView;
})(window);
