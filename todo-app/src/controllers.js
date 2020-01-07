angular.module('todo').controller('TodoCtrl', function($scope, todoStorage) {

  $scope.add = function (newTodoTitle, newTodoContent) {
    todoStorage.add(newTodoTitle, newTodoContent);
    $scope.newTodoTitle = "";
    $scope.newTodoContent = "";
  };

  $scope.todos = todoStorage.get();

  $scope.update = function (todo, updatedTodoTitle, updatedTodoContent) {
    todoStorage.update(todo, updatedTodoTitle, updatedTodoContent)
  };

  $scope.remove = function(todo) {
    todoStorage.remove(todo);
  }
});