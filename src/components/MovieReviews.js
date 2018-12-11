import React from 'react';

const MovieReviews = (props) => {
return (
  <div className="review-list">
    {(props.reviews) ? props.reviews.map((review, idx) => {
      return(
        <div key={idx} className="review">
          <h3>{review.headline}</h3>
          <p>By {review.byline}</p>
          <p>{review.summary_short}</p>
        </div>
      )
    }) : null}
  </div>
)
}



export default MovieReviews;
