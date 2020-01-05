angular.module('todo').controller('TodoCtrl', function($scope) {

  $scope.todos = [
    {
      title: 'Spring Boot Rest API',
      content: '백엔드 간단한 CRUD 기능',
    },
    {
      title: 'Angular.js 프론트',
      content: '프론트 간단한 CRUD 기능',
    },
    {
      title: '운동하기',
      content: '유산소 운동',
    }
  ];

  $scope.remove = function(todo) {
    var idx = $scope.todos.findIndex(function (item) {
      return item.title === todo.title;
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

  $scope.update = function () {
  };
});