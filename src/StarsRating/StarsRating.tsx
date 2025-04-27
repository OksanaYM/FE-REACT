export const StarsRating = ({ rating })=>  {
    const stars = Math.round(rating);
    return(
        <>
            <div>
                { '★'.repeat(stars) + '☆'.repeat(10 - stars) }
            </div>
        </>

    );
}
