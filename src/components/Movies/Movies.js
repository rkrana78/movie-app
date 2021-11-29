import React, { useEffect, useState } from 'react';
import useGenres from '../../hooks/useGenre';
import Genres from '../Genres/Genres';
import CustomPagination from '../Pagination/CustomPagination';
import SingleContent from '../SingleContent/SingleContent';


const Movies = () => {
    const [page, setPage] = useState(1);
    const [contents, setContents] = useState([]);
    const [numOfPages, setNumOfPages] = useState();
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [genres, setGenres] = useState([]);
    const genreforURL = useGenres(selectedGenres)

    useEffect(() => {
        const url = `https://api.themoviedb.org/3/discover/movie?api_key=c1b30049dd035636e32a9002d9816015&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
               // console.log(data.results);
                setContents(data.results);
                setNumOfPages(data.total_pages);
            })
            // eslint-disable-next-line
    }, [page, genreforURL])
    return (
        <div>
            <span className="pageTitle">Movies</span>
            <Genres
                type="movie"
                selectedGenres={selectedGenres}
                setSelectedGenres={setSelectedGenres}
                genres={genres}
                setGenres={setGenres}
                setPage={setPage} />
            <div className="trending">
                { contents &&
                    contents.map(content => <SingleContent content={content} key={content.id} />)
                }
            </div>
            {
                numOfPages > 1 && (
                    <CustomPagination setPage={setPage} numOfPages={numOfPages} />
                )
            }
        </div>
    );
};

export default Movies;