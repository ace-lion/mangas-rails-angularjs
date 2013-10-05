angular.module('mangaService', ['ngResource'])
.factory('Mangas', function($resource){
	return $resource('api/mangas', {},{
		create: {method: 'POST'} 
	});
}).factory('Manga', function($resource){
	return $resource('api/mangas/:id',{},{
		show: {method: 'GET'}, 
		destroy: {method: 'DELETE'}, 
		update: {method: 'PUT'}
	});
});


