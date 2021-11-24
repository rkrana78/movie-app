import { Chip } from '@material-ui/core';
import React, { useEffect } from 'react';

const Genres = (
    {
        type,
        selectedGenres,
        setSelectedGenres,
        genres,
        setGenres,
        setPage,
    }
) => {
    const handleAdd = (genre) => {
        setSelectedGenres([...selectedGenres, genre]);
        setGenres(genres.filter(g=> g.id !== genre.id));
        setPage(1);
    }
    const handleRemove =( genre) => {
        setSelectedGenres(
            selectedGenres.filter((selected => selected.id !== genre.id))

        );
        setGenres([...genres, genre]);
        setPage(1);
    }
    useEffect(() => {
        const url = `https://api.themoviedb.org/3/genre/${type}/list?api_key=c1b30049dd035636e32a9002d9816015&language=en-US`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data.genres)
                setGenres(data.genres)
            })
        // return () => {
        //     setGenres({});
        // }
        // eslint-disable-next-line
    }, [])
    return (
        <div style={{ padding: "6px 0" }}>
            {
                selectedGenres && selectedGenres.map(genre =>
                    <Chip
                        label={genre.name}
                        style={{ margin: 2 }}
                        size="small"
                        color="primary"
                        key={genre.id}
                        clickable
                         onDelete = {()=> handleRemove(genre)} />)
            }
            {
                genres && genres.map(genre =>
                    <Chip
                        label={genre.name}
                        style={{ margin: 2 }}
                        size="small"
                        key={genre.id}
                        clickable
                        onClick={()=>handleAdd(genre)} />)
            }
        </div>
    );
};

export default Genres;