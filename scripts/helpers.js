var url = 'http://karaoke.wolever.net/api/search';

let helpers = {

	fetchResults: function(query) {
		return fetch(url + '?q=' + query).then(function(response){
			if(response.status !==200) {
				console.log('Looks like there was an error');

				return
			}

			return response.json();
		})
	},

	upperCase: function(text) {
		return text.toString().toUpperCase();
	},

}



export default helpers;
