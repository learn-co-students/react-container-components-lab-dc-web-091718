import React from 'react';



const Review = ({byline, summary_short}) => {
    return (
        <div className="review">
            <h4>{byline}</h4>
            <p>{summary_short}</p>
        </div>
    )
}

 const MovieReviews = ({reviews}) => {
    return (
        <div className="review-list">
            {reviews.map(review => Review(review))}
        </div>
    )
}


MovieReviews.defaultProps = {
    reviews: []
}

export default MovieReviews