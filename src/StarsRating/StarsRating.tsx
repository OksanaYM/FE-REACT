import './StarsRating.css';

export const StarsRating = ({ rating })=>  {
    const stars = Math.round(rating);
    return(
        <>
            <div className='rating'>
                { '★'.repeat(stars) + '☆'.repeat(10 - stars) }
            </div>
        </>

    );
}
