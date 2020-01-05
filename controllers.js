angular.module('todo').controller('TodoCtrl', function($scope) {

  $scope.todos = [
    {
      title: '스프링 공부',
      completed: false,
      createdAt: Date.now()
    },
    {
      title: '앵귤러 공부',
      completed: false,
      createdAt: Date.now()
    },
    {
      title: '운동하기',
      completed: true,
      createdAt: Date.now()
    }
  ];

  $scope.remove = function(todo) {
    // find todo index in todos
    var idx = $scope.todos.findIndex(function (item) {
      return item.title === todo.title;
    })

    // remove from todos
    if (idx > -1) {
      $scope.todos.splice(idx, 1)
    }
  }

  $scope.add = function (newTodoTitle) {
    // create new todo
    var newTodo = {
      title: newTodoTitle,
      completed: false,
      createdAt: Date.now()
    };

    // push into todos
    $scope.todos.push(newTodo);
    $scope.newTodoTitle = "";
  }

  $scope.update = function () {
  };
});