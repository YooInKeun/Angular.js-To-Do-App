angular.module('todo').controller('TodoCtrl', function($scope) {

  $scope.todos = [
    {
      id: 1,
      title: 'Spring Boot Rest API',
      content: '백엔드 간단한 CRUD 기능',
    },
    {
      id: 4,
      title: 'Angular.js 프론트',
      content: '프론트 간단한 CRUD 기능',
    },
    {
      id: 3,
      title: '운동하기',
      content: '유산소 운동',
    }
  ];

  $scope.remove = function(todo) {
    var idx = $scope.todos.findIndex(function (item) {
      return item.id === todo.id;
    })

    if (idx > -1) {
      $scope.todos.splice(idx, 1)
    }
  }

  $scope.add = function (newTodoTitle, newTodoContent) {
    var newTodo = {
      title: newTodoTitle,
      content: newTodoContent
    };

    $scope.todos.push(newTodo);
    $scope.newTodoTitle = "";
    $scope.newTodoContent = "";
  }

  $scope.update = function (todo, updatedTodoTitle, updatedTodoContent) {
    var idx = $scope.todos.findIndex(function (item) {
      return item.id === todo.id;
    });

    $scope.todos[idx].title = updatedTodoTitle;
    $scope.todos[idx].content = updatedTodoContent;
  };
});