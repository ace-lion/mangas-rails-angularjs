function MangasCtrl($scope, Mangas, Manga, $location){
	'use strict'
	$scope.mangas = Mangas.query();

	
}

function MangasNewCtrl($scope, $location, Mangas){
	'use strict'
	$scope.manga = {};
	$scope.create = function(manga){
		var mangaService = new Mangas(manga);
		mangaService.$create(function(manga){
			$location.path('/')
		});
	}

}

function MangaShow($scope, Manga, $routeParams, $location){
	$scope.manga = Manga.show({id : $routeParams.id});

	$scope.destroy = function(manga){
		var nombre = manga.nombre;
		Manga.destroy({id : manga.id}, function(obj){
			$location.path('/')
		});
	}

}

function MangaEdit($scope, Manga, $routeParams, $location){
	$scope.manga = Manga.show({id : $routeParams.id});

	$scope.update = function(manga){
		manga.$update({id : manga.id},function(man){
			$location.path('/')
		});
	}
}


