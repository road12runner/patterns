var Task = function(data){
  this.name = data.name;
  this.priority = data.priority;
  this.project = data.project;
  this.user = data.user;
  this.completed = data.completed;
}


Task.prototype.finish = function() {
  console.log('finishing task ' + this.name);
}

Task.prototype.save = function() {
  console.log('saving tasks ' + this.name);
}

module.exports = Task;
