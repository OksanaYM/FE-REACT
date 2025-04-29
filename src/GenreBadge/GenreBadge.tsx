import {genreMap} from "../MoviesList/MoviesList.tsx";

export const GenreBadge = ({ genre, onSelect }) => {
    function getByValue(map, searchValue) {
        for (let [key, value] of map.entries()) {
            if (value === searchValue)
                return key;
        }
    }

    return (
        <span className='genre-badge'
              onClick={() => onSelect(getByValue(genreMap, genre.id))}>
            {genre.name}
        </span>
    );
}
