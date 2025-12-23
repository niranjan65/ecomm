// import React, { useState } from 'react';
// import { Star, ThumbsUp } from 'lucide-react';

// const ReviewSection = () => {
//   const [reviews, setReviews] = useState([
//     {
//       id: 1,
//       name: "Sarah Johnson",
//       rating: 5,
//       date: "2024-12-15",
//       verified: true,
//       comment: "Excellent product! Exactly as described and works perfectly. The quality exceeded my expectations and delivery was fast.",
//       helpful: 12
//     },
//     {
//       id: 2,
//       name: "Michael Chen",
//       rating: 4,
//       date: "2024-12-10",
//       verified: true,
//       comment: "Good value for money. The product does what it promises, though the packaging could be better.",
//       helpful: 8
//     },
//     {
//       id: 3,
//       name: "Emma Wilson",
//       rating: 5,
//       date: "2024-12-05",
//       verified: false,
//       comment: "Absolutely love it! Will definitely recommend to friends and family.",
//       helpful: 5
//     }
//   ]);

//   const [newReview, setNewReview] = useState({
//     name: '',
//     email: '',
//     rating: 0,
//     comment: ''
//   });

//   const [hoveredRating, setHoveredRating] = useState(0);

//   const handleSubmitReview = () => {
//     if (newReview.name && newReview.rating && newReview.comment) {
//       const review = {
//         id: reviews.length + 1,
//         name: newReview.name,
//         rating: newReview.rating,
//         date: new Date().toISOString().split('T')[0],
//         verified: false,
//         comment: newReview.comment,
//         helpful: 0
//       };
//       setReviews([review, ...reviews]);
//       setNewReview({ name: '', email: '', rating: 0, comment: '' });
//     }
//   };

//   const handleHelpful = (id) => {
//     setReviews(reviews.map(review => 
//       review.id === id ? { ...review, helpful: review.helpful + 1 } : review
//     ));
//   };

//   const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;

//   return (
//     <div className="bg-white w-full px-4 sm:px-8 py-6 sm:py-8">
//       {/* Reviews Header */}
//       <div className="border-b border-gray-200 pb-6">
//         <h2 className="text-xl sm:text-2xl font-bold mb-4">Customer Reviews</h2>
        
//         <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
//           {/* Average Rating */}
//           <div className="flex flex-col items-center gap-2">
//             <div className="text-4xl font-bold">{averageRating.toFixed(1)}</div>
//             <div className="flex gap-1">
//               {[1, 2, 3, 4, 5].map((star) => (
//                 <Star
//                   key={star}
//                   size={20}
//                   color="#FFDE21"
//                   fill={star <= Math.round(averageRating) ? "#FFDE21" : "#f1f1f1"}
//                 />
//               ))}
//             </div>
//             <p className="text-sm text-gray-600">{reviews.length} reviews</p>
//           </div>

//           {/* Rating Breakdown */}
//           <div className="flex-1 w-full sm:w-auto">
//             {[5, 4, 3, 2, 1].map((rating) => {
//               const count = reviews.filter(r => r.rating === rating).length;
//               const percentage = (count / reviews.length) * 100;
//               return (
//                 <div key={rating} className="flex items-center gap-2 mb-2">
//                   <span className="text-sm w-8">{rating}</span>
//                   <Star size={14} color="#FFDE21" fill="#FFDE21" />
//                   <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
//                     <div 
//                       className="h-full bg-[#FFDE21]"
//                       style={{ width: `${percentage}%` }}
//                     />
//                   </div>
//                   <span className="text-sm text-gray-600 w-8">{count}</span>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>

//       {/* Write a Review */}
//       <div className="border-b border-gray-200 py-6 sm:py-8">
//         <h3 className="text-lg sm:text-xl font-bold mb-4">Write a Review</h3>
        
//         <div className="space-y-4">
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             <div>
//               <label className="block text-sm font-medium mb-2">Name *</label>
//               <input
//                 type="text"
//                 value={newReview.name}
//                 onChange={(e) => setNewReview({...newReview, name: e.target.value})}
//                 className="w-full border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
//               />
//             </div>
            
//             <div>
//               <label className="block text-sm font-medium mb-2">Email</label>
//               <input
//                 type="email"
//                 value={newReview.email}
//                 onChange={(e) => setNewReview({...newReview, email: e.target.value})}
//                 className="w-full border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
//               />
//             </div>
//           </div>

//           <div>
//             <label className="block text-sm font-medium mb-2">Rating *</label>
//             <div className="flex gap-1">
//               {[1, 2, 3, 4, 5].map((star) => (
//                 <Star
//                   key={star}
//                   size={28}
//                   className="cursor-pointer"
//                   color="#FFDE21"
//                   fill={(hoveredRating || newReview.rating) >= star ? "#FFDE21" : "none"}
//                   onMouseEnter={() => setHoveredRating(star)}
//                   onMouseLeave={() => setHoveredRating(0)}
//                   onClick={() => setNewReview({...newReview, rating: star})}
//                 />
//               ))}
//             </div>
//           </div>

//           <div>
//             <label className="block text-sm font-medium mb-2">Your Review *</label>
//             <textarea
//               value={newReview.comment}
//               onChange={(e) => setNewReview({...newReview, comment: e.target.value})}
//               rows={4}
//               className="w-full border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black resize-none"
//               placeholder="Share your experience with this product..."
//             />
//           </div>

//           <button
//             onClick={handleSubmitReview}
//             className="bg-black text-white px-8 py-3 hover:bg-gray-800 transition-colors"
//           >
//             Submit Review
//           </button>
//         </div>
//       </div>

//       {/* Reviews List */}
//       <div className="py-6 sm:py-8">
//         <h3 className="text-lg sm:text-xl font-bold mb-6">All Reviews ({reviews.length})</h3>
        
//         <div className="space-y-6">
//           {reviews.map((review) => (
//             <div key={review.id} className="border-b border-gray-200 pb-6 last:border-0">
//               <div className="flex flex-col sm:flex-row sm:items-start gap-4">
//                 {/* Reviewer Info */}
//                 <div className="flex items-start gap-3 flex-1">
//                   <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-lg font-bold text-gray-600">
//                     {review.name.charAt(0)}
//                   </div>
                  
//                   <div className="flex-1">
//                     <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
//                       <h4 className="font-semibold">{review.name}</h4>
//                       {review.verified && (
//                         <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded w-fit">
//                           Verified Purchase
//                         </span>
//                       )}
//                     </div>
                    
//                     <div className="flex items-center gap-2 mb-2">
//                       <div className="flex gap-1">
//                         {[1, 2, 3, 4, 5].map((star) => (
//                           <Star
//                             key={star}
//                             size={14}
//                             color="#FFDE21"
//                             fill={star <= review.rating ? "#FFDE21" : "#f1f1f1"}
//                           />
//                         ))}
//                       </div>
//                       <span className="text-sm text-gray-600">{review.date}</span>
//                     </div>
                    
//                     <p className="text-gray-700 leading-relaxed mb-3">{review.comment}</p>
                    
//                     <button
//                       onClick={() => handleHelpful(review.id)}
//                       className="flex items-center gap-2 text-sm text-gray-600 hover:text-black transition-colors"
//                     >
//                       <ThumbsUp size={16} />
//                       Helpful ({review.helpful})
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ReviewSection;





// Dynamic Review section



import React, { useState, useEffect } from 'react';
import { Star, ThumbsUp } from 'lucide-react';
import axios from 'axios';

const ReviewSection = ({ webItemCode }) => {
  const [reviewData, setReviewData] = useState({
    reviews: [],
    average_rating: 0,
    average_whole_rating: 0,
    reviews_per_rating: [0, 0, 0, 0, 0],
    total_reviews: 0
  });
  
  const [newReview, setNewReview] = useState({
    title: '',
    rating: 0,
    comment: ''
  });

  const [hoveredRating, setHoveredRating] = useState(0);
  const [loading, setLoading] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);

  const API_BASE_URL = 'http://192.168.101.182:8002';
  const API_TOKEN = 'token 1a5cfcab01776e5:63628feef82aa59';

  useEffect(() => {
    if (webItemCode) {
      fetchReviews();
    }
  }, [webItemCode]);

  const fetchReviews = async (start = 0, end = 10) => {
    setLoading(true);
    try {
      const response = await axios.post(
        `${API_BASE_URL}/api/method/webshop.webshop.doctype.item_review.item_review.get_item_reviews`,
        {
          web_item: webItemCode,
          start: start,
          end: end
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': API_TOKEN
          }
        }
      );

      if (response.data && response.data.message) {
        setReviewData(response.data.message);
      }
    } catch (error) {
      console.error('Error fetching reviews:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmitReview = async () => {
    if (!newReview.title || !newReview.rating || !newReview.comment) {
      alert('Please fill in all required fields');
      return;
    }

    setSubmitLoading(true);
    try {
     
      const normalizedRating = newReview.rating / 5;

      await axios.post(
        `${API_BASE_URL}/api/method/webshop.webshop.doctype.item_review.item_review.add_item_review`,
        {
          web_item: webItemCode,
          title: newReview.title,
          rating: normalizedRating,
          comment: newReview.comment
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': API_TOKEN
          }
        }
      );

      
      setNewReview({ title: '', rating: 0, comment: '' });
      
      
      await fetchReviews();
      
      
    } catch (error) {
      console.error('Error submitting review:', error);
      if (error.response?.data?.exception) {
        alert(error.response.data.exception);
      } else {
        alert('Failed to submit review. Please try again.');
      }
    } finally {
      setSubmitLoading(false);
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getStarRating = (normalizedRating) => {
    
    return Math.round(normalizedRating * 5);
  };

  return (
    <div className="bg-white w-full px-4 sm:px-8 py-6 sm:py-8">
      {/* Reviews Header */}
      <div className="border-b border-gray-200 pb-6">
        <h2 className="text-xl sm:text-2xl font-bold mb-4">Customer Reviews</h2>
        
        {loading ? (
          <div className="text-center py-8">Loading reviews...</div>
        ) : (
          <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
            {/* Average Rating */}
            <div className="flex flex-col items-center gap-2">
              <div className="text-4xl font-bold">
                {reviewData.average_rating ? reviewData.average_rating.toFixed(1) : '0.0'}
              </div>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={20}
                    color="#FFDE21"
                    fill={star <= reviewData.average_whole_rating ? "#FFDE21" : "#f1f1f1"}
                  />
                ))}
              </div>
              <p className="text-sm text-gray-600">{reviewData.total_reviews} reviews</p>
            </div>

            {/* Rating Breakdown */}
            {reviewData.total_reviews > 0 && (
              <div className="flex-1 w-full sm:w-auto">
                {[5, 4, 3, 2, 1].map((rating, index) => {
                  const percentage = reviewData.reviews_per_rating[5 - rating] || 0;
                  return (
                    <div key={rating} className="flex items-center gap-2 mb-2">
                      <span className="text-sm w-8">{rating}</span>
                      <Star size={14} color="#FFDE21" fill="#FFDE21" />
                      <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-[#FFDE21]"
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                      <span className="text-sm text-gray-600 w-12">{percentage.toFixed(0)}%</span>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Write a Review */}
      <div className="border-b border-gray-200 py-6 sm:py-8">
        <h3 className="text-lg sm:text-xl font-bold mb-4">Write a Review</h3>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Review Title *</label>
            <input
              type="text"
              value={newReview.title}
              onChange={(e) => setNewReview({...newReview, title: e.target.value})}
              className="w-full border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Give your review a title"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Rating *</label>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={28}
                  className="cursor-pointer"
                  color="#FFDE21"
                  fill={(hoveredRating || newReview.rating) >= star ? "#FFDE21" : "none"}
                  onMouseEnter={() => setHoveredRating(star)}
                  onMouseLeave={() => setHoveredRating(0)}
                  onClick={() => setNewReview({...newReview, rating: star})}
                />
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Your Review *</label>
            <textarea
              value={newReview.comment}
              onChange={(e) => setNewReview({...newReview, comment: e.target.value})}
              rows={4}
              className="w-full border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black resize-none"
              placeholder="Share your experience with this product..."
            />
          </div>

          <button
            onClick={handleSubmitReview}
            disabled={submitLoading}
            className="bg-black text-white px-8 py-3 hover:bg-gray-800 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {submitLoading ? 'Submitting...' : 'Submit Review'}
          </button>
        </div>
      </div>

      {/* Reviews List */}
      <div className="py-6 sm:py-8">
        <h3 className="text-lg sm:text-xl font-bold mb-6">
          All Reviews ({reviewData.total_reviews})
        </h3>
        
        {reviewData.reviews && reviewData.reviews.length > 0 ? (
          <div className="space-y-6">
            {reviewData.reviews.map((review) => {
              const starRating = getStarRating(review.rating);
              return (
                <div key={review.name} className="border-b border-gray-200 pb-6 last:border-0">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                    {/* Reviewer Info */}
                    <div className="flex items-start gap-3 flex-1">
                      <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-lg font-bold text-gray-600">
                        {review.customer ? review.customer.charAt(0).toUpperCase() : 'U'}
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                          <h4 className="font-semibold">{review.customer || 'Anonymous'}</h4>
                          {review.customer && (
                            <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded w-fit">
                              Verified Purchase
                            </span>
                          )}
                        </div>
                        
                        <div className="flex items-center gap-2 mb-2">
                          <div className="flex gap-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star
                                key={star}
                                size={14}
                                color="#FFDE21"
                                fill={star <= starRating ? "#FFDE21" : "#f1f1f1"}
                              />
                            ))}
                          </div>
                          <span className="text-sm text-gray-600">
                            {formatDate(review.published_on || review.creation)}
                          </span>
                        </div>
                        
                        {review.review_title && (
                          <h5 className="font-medium mb-2">{review.review_title}</h5>
                        )}
                        
                        {review.comment && (
                          <p className="text-gray-700 leading-relaxed mb-3">{review.comment}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <p className="text-gray-600 text-center py-8">No reviews yet. Be the first to review this product!</p>
        )}
      </div>
    </div>
  );
};

export default ReviewSection;