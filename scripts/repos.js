(function(module) {
  var repo = {};
  repo.all = [];
  repo.request = function(callback) {
    $.get('/github/users/jdar22169/repos', function(data) {
      repo.all = data;
    })
    .done(callback);
  };

  repo.with = function(attr) {
    return repo.all.filter(function(repo) {
      return repo[attr];
    });
  };

  module.repo = repo;
})(window);
