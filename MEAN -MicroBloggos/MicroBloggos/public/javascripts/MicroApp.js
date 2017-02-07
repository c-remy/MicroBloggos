// Contenir toutes les logiques Angular
var app = angular.module('MicroApp', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
    //affichage de la timeline
    .when('/', {
      templateUrl: 'main.html',
      controller: 'mainController'
    })
    //affichage du login
    .when('/login', {
      templateUrl: 'login.html',
      controller: 'authController'
    })
    //affichage du register
    .when('/register', {
      templateUrl: 'register.html',
      controller: 'authController'
    });
});

// Ajout d'un controleur pour gêrer le fonctionnement de l'app (creation/affichage posts)
app.controller('mainController', function($scope){
  $scope.posts = []; //On range chaque nouveau post dans un array
  $scope.newPost = {created_by: '', text: '', created_at:''}; //On enregistre chaque nouveau post

  $scope.post = function(){
    $scope.newPost.created_at = Date.now();
    $scope.posts.push($scope.newPost);
    $scope.newPost = {created_by: '', text: '', created_at:''};
  };
});
app.controller('authController', function($scope){
  $scope.user = {username: '', password: ''};
  $scope.error_message = '';

  $scope.login = function(){
    //placeholder jusqu'à l'implantation de l'authentification
    $scope.error_message = 'login request for ' + $scope.user.username;
  };

  $scope.register = function(){
    //placeholder jusqu'à l'implantation de l'authentification
    $scope.error_message = 'registration request for ' + $scope.user.username;
  };
});
