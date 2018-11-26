// Code MovieReviews Here
import React, { Component } from 'react';
const MovieReviews = (props) => {
  return (
    <div
      className="review-list"
      >
      {props.reviews.map(review =>

        <div
          className="review"
          >
          {review.display_title}
        </div>
      )}

    </div>
  )
}

export default MovieReviews


// byline: "MANOHLA DARGIS"
// critics_pick: 1
// date_updated: "2018-11-26 17:44:21"
// display_title: "Shoplifters"
// headline: "‘Shoplifters’ Review: A Family That Steals Together, Stays Together"
// link: {type: "article", url: "http://www.nytimes.com/2018/11/22/movies/shoplifters-review.html", suggested_link_text: "Read the New York Times Review of Shoplifters"}
// mpaa_rating: "R"
// multimedia: {type: "mediumThreeByTwo210", src: "https://static01.nyt.com/images/2018/11/23/arts/23…2a-4dfb-ae9d-6d4222e39c29-mediumThreeByTwo210.jpg", width: 210, height: 140}
// opening_date: "2018-11-23"
// publication_date: "2018-11-22"
// summary_short:
