import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`

export default class SearchableMovieReviewsContainer extends Component {

  state = {
    searchTerm: "",
    reviews: []
  }

  setSearchTerm = (event) => {
    this.setState({searchTerm: event.target.value})
  }

  submitForm = (event) => {
    event.preventDefault()
    this.apiCall()
  }

  apiCall = () => {
    fetch(URL.concat(this.state.searchTerm))
      .then(function(response) {
      	if (response.status >= 400) {
      		throw new Error("Bad response from server");
      	}
      	return response.json();
      })
      .then((data) => {
      	this.setState({reviews: data.results})
      });
      }

  render(){
    return(
      <div className= "searchable-movie-reviews">
        <h2>Search Results:</h2>
          <form
            onSubmit={this.submitForm}
            >
          <input
            type="text"
            onChange={(event) => this.setSearchTerm(event)}
            value={this.state.searchTerm}>
          </input>
          <input
            type="submit"
            >
          </input>
          </form>
      <div className="searchable-movie-reviews">
      <MovieReviews reviews={this.state.reviews} />
      </div>
      </div>
    )
  }
}
