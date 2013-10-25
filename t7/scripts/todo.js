function TodoCtrl($scope) {

	
	
	if (localStorage.getItem("angularLocalStorage") === null)
	{
		$scope.todos = [];
	}
	else
	{
		$scope.todos = JSON.parse(localStorage.getItem('angularLocalStorage'));
	}
	
 
  $scope.addTodo = function() {
    $scope.todos.push({text:$scope.todoText, done:false});
	
	
	localStorage.setItem('angularLocalStorage', JSON.stringify($scope.todos));

    
	//reset placeholder
	$scope.todoText = 'Insert your new favorite movie';
	
	//localStorageService.add('localStorageKey','Add this!');
	console.log($scope.todos);
	
  };
 
  $scope.remaining = function() {
    var count = 0;
    angular.forEach($scope.todos, function(todo) {
      count += todo.done ? 0 : 1;
    });
    return count;
  };
 
  $scope.archive = function() {
    var oldTodos = $scope.todos;
    $scope.todos = [];
    angular.forEach(oldTodos, function(todo)
	{
      if (!todo.done) $scope.todos.push(todo);
    });
	localStorage.setItem('angularLocalStorage', JSON.stringify($scope.todos));
  };
}