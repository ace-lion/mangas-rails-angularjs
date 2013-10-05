angular.module("mangasng", ['mangaService']).config(['$httpProvider', function(provider){
    provider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
  }]).config(["$routeProvider", function($routeProvider){
	$routeProvider.when("/", {templateUrl: 'partials/home.html', controller: MangasCtrl})
	.when("/manga/:id/edit", {templateUrl: 'partials/edit.html', controller: MangaEdit})
	.when("/add", {templateUrl: 'partials/new.html', controller: MangasNewCtrl})
	.when("/manga/:id", {templateUrl: 'partials/show.html', controller: MangaShow})
	.otherwise({redirectTo: '/'})
}])