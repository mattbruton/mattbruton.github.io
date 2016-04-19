"use strict";

let repositories = [];

$(document).ready(function() {

  function displayRepos() {
    repositories.forEach(function(i){
      if (i.category == "NSS Exercises") {
      $("#exercises").append(`<div class="repo col-md-4 col-sm-6"><h5>${i.title}</h5><div class="repoInfo"><a href="${i.url}" class="repoUrl">Repository</a><a href="${i.live}" class="demoUrl">Live Demo</a></div></div>`)
      }
    });
  }

  function pushRepos(data){
    data.repo.forEach(function(i) {
      repositories.push(i);
    });
    displayRepos();
  };

  $.ajax({
    url: "repos.json",
    success: pushRepos
  });

});