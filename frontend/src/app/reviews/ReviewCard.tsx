import React from 'react';
import './reviewPage.css';
interface Review {
  id: number;
  fullName: string;
  date: string;
  title: string;
  selectCountry: string;
  reviewDetails: string;
}

interface CardProps {
  reviews: Review[];
  currentIndex: number;
  Decrement: () => void;
  Increment: () => void;
}

const ReviewCard: React.FC<CardProps> = (props) => {
  const { reviews, currentIndex, Decrement, Increment } = props;
  const review = reviews[currentIndex];

  return (
    <div className='card-container'>
      <a className='review' href="./reviews">Write a review</a>
      <h1 className='underline'></h1>
      {review && (
        <div key={review.id}>
          <div className='text-container'>
            <div className='name-date'>
              <h4 className='name'>{review.fullName}</h4>
              <h1>|</h1>
              <p className='date'>{review.date}</p>
            </div>
          </div>
          <div className='title-desc'>
            <h5 className='job'>{review.title.toUpperCase()}</h5>
            <p className='description'>{review.reviewDetails}</p>
          </div>
        </div>
      )}
      <h1 className='underline'></h1>
      <div className='button-container flex justify-center items-center'>
        <button
          className='font-bold text-7xl p-1 hover:text-blue-200 rounded-xl'
          onClick={Decrement}
        >
          &#x2190;
        </button>
        <button
          className='font-bold text-7xl p-1 hover:text-blue-200 rounded-xl'
          onClick={Increment}
        >
          &#x2192;
        </button>
      </div>
    </div>
  );
};

export default ReviewCard;
