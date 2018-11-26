import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

export default class LatestMovieReviewsContainer extends Component {

  state = {
    reviews: []
  }

  apiCall = () => {
    fetch(URL)
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

  componentDidMount() {
    this.apiCall()
  }
  render(){
    return(
      <div
        className="latest-movie-reviews"><br /><br />
      <h2>Latest Movie Reviews:</h2>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }

}

// Code LatestMovieReviewsContainer Here
