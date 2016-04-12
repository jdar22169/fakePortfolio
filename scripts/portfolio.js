(function(module) {
  function Project (proj) {
    this.projectTitle = proj.projectTitle;
    this.projectCategory = proj.projectCategory;
    this.publishedDate = proj.publishedDate;
    this.projectURL = proj.projectURL;
    this.body = proj.body;
  };

  Project.all = [];

  Project.prototype.toHtml = function() {
    var template = Handlebars.compile($('#projectsTemplate').html());
    this.daysAgo = parseInt((new Date() - new Date(this.publishedDate))/60/60/24/1000);
    this.publishStatus = this.publishedDate ? 'published ' + this.daysAgo + ' days ago' : 'Not yet published';
    return template(this);

  };

  Project.loadAll = function(projectData) {
    projectData.sort(function(a,b) {
      return (new Date(b.publishedDate)) - (new Date(a.publishedDate));
    });
    Project.all = projectData.map(function(ele) {
      return new Project(ele);
    });
  };

  Project.fetchAll = function() {
    if (localStorage.projectData) {
      Project.loadAll(JSON.parse(localStorage.projectData));
      projectView.initIndexPage();
    } else {
      $.getJSON('../data/projectData.json', function(projectData) {
        Project.loadAll(projectData);
        localStorage.setItem('projectData', JSON.stringify(projectData));
        projectView.initIndexPage();
      });
    }
  };

  Project.numProjects = function() {
    return Project.all.map(function(project){
      return (new Date(project.publishedDate)).getFullYear();
    })
    .reduce(function (a,b) {
      if (b > 2013) {
        a.push(b);
      }
      return a;
    }, []);
  };

  module.Project = Project;
})(window);
