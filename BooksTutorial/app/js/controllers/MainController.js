app.controller('MainController', ['$scope', function($scope) {
	$scope.title = 'This Month\'s Bestsellers';
	$scope.promo = 'The most popular books this month.';
	$scope.products = [
		{
			name: 'The Book of Trees',
			price: 19,
			pubdate: new Date('2014', '03', '08'),
			cover: 'https://images-na.ssl-images-amazon.com/images/I/61ZhNmvIl1L._SX364_BO1,204,203,200_.jpg',
			likes: 0,
			dislikes: 0
		},
		{
			name: 'Program or be Programmed',
			price: 8,
			pubdate: new Date('2013', '08', '01'),
			cover: 'https://images-eu.ssl-images-amazon.com/images/I/414rzVq4eiL.jpg',
			likes: 0,
			dislikes: 0
		},
		{
			name: 'Harry Potter & The Prisoner of Azkaban',
			price: 11.99,
			pubdate: new Date('1999', '07', '08'),
			cover: 'https://upload.wikimedia.org/wikipedia/en/a/a0/Harry_Potter_and_the_Prisoner_of_Azkaban.jpg',
			likes: 0,
			dislikes: 0
		},
		{
			name: 'Ready Player One',
			price: 7.99,
			pubdate: new Date('2011', '08', '16'),
			cover: 'http://upload.wikimedia.org/wikipedia/en/a/a4/Ready_Player_One_cover.jpg',
			likes: 0,
			dislikes: 0
		}
	];

	$scope.plusOne = function(index) {
		$scope.products[index].likes += 1;
	};

	$scope.minusOne = function(index) {
		$scope.products[index].dislikes += 1;
	};
}]);
