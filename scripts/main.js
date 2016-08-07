var React = require('react');
var ReactDOM = require('react-dom');
var h = require('./helpers');


var App = React.createClass({

	getInitialState : function() {
		return {
			songs: {}
		}
	},


	getSongs(event){
		event.preventDefault();

		h.fetchResults(this.refs.searchQuery.value).then((data) => {
			console.log(data);
			this.setState({
				songs: data.matches,
			})
			}).catch(function(err){
				console.error(err);
			});
	},

	renderSongs(key){
		return <SearchResults key={key} index={key} details={this.state.songs[key]} />
	},

	render: function(){

		return (
	
		<div className="pickerPage">
			<div className="center">
				<img src="../css/images/karaoker-logo.png" alt=""/>
			</div>
			<div className="center">
				<form className="search-selector" onSubmit={this.getSongs}>
					<input className="search" ref="searchQuery" type="text" placeholder="Enter an Artist or Song Name"/>
					<input type="submit" className="enter"/>
				</form>
			</div>
			<div className="center">
				<h2>Because no one should have to wait for a turn with the binder.</h2>
			</div>
			{
				this.state.songs.length ?
				<div className="headings center">
					<h2>Song</h2>
					<h2>Artist</h2> 
				</div>
				:
				null
			}
			
			<div className="returnedResults">
				<ul className="allResults">
				{Object.keys(this.state.songs).map(this.renderSongs)}
				</ul>
			</div>
			
		</div>
		)
	},


});

 var SearchResults = React.createClass({

	

 	render : function() {
 		return (
		
			<li className="songList">
				<h3>{h.upperCase(this.props.details.title)}</h3>
				<h3>{this.props.details.artist}</h3>
			</li>

 		)
 	},
 });

			



ReactDOM.render(<App />, document.querySelector('#main'));
 


