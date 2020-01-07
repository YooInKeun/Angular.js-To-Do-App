angular.module('todo').factory('todoStorage', function() {
  axios.defaults.baseURL = 'http://localhost:8000/api';

  var storage = {
    todos : [],

    add: function (newTodoTitle, newTodoContent) {
      var postData = {
        title: newTodoTitle,
        content: newTodoContent
      };

      axios.post('notes/', postData)
        .then((res) => {
          storage.todos.push(postData);
          alert("생성 완료", res);
        })
        .catch(function (err) {
          console.log("CREATE FAIL", err);
        });
    },

    get: function () {
      axios.get('/notes/')
        .then((res) => {
          angular.copy(res.data, storage.todos)
          console.log("조회 완료", res);
        })
        .catch(function (err) {
          console.log("GET FAIL", err);
        });
      return storage.todos;
    },

    update: function (todo, updatedTodoTitle, updatedTodoContent) {

      var params = {
        title: updatedTodoTitle,
        content: updatedTodoContent,
      };

      axios.put('/notes/' + String(todo.id) + '/', params)
        .then((res) => {
          var idx = storage.todos.findIndex(function (item) {
            return item.id === todo.id;
          })

          storage.todos[idx].title = updatedTodoTitle;
          storage.todos[idx].content = updatedTodoContent;
          alert("수정 완료");
        })
        .catch(function (err) {
          console.log("PUT FAIL", err);
        });
    },

    remove: function (todo) {
      axios.delete('/notes/' + String(todo.id) + '/')
        .then((res) => {
          var idx = storage.todos.findIndex(function (item) {
            return item.id === todo.id;
          })
          
          if (idx > -1) {
            storage.todos.splice(idx, 1);
          }
          alert("제거 완료");
        })
        .catch(function (err) {
          console.log("DELETE FAIL", err);
        });
    }
  }

  return storage;
});