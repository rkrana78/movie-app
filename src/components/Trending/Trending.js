import React, { useState, useEffect } from 'react';
import CustomPagination from '../Pagination/CustomPagination';
import SingleContent from '../SingleContent/SingleContent';
import './Trending.css'
const Trending = () => {
    const [page, setPage] = useState(1);
    const [contents, setContents] = useState([]);

    useEffect(() => {
        window.scroll(0, 0)
        const url = `https://api.themoviedb.org/3/trending/all/week?api_key=c1b30049dd035636e32a9002d9816015&page=${page}`
        console.log(url)
        fetch(url)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setContents(data.results)
            })
    }, [page])
    return (
        <div>
            <span className="pageTitle">Trending</span>
            <div className="trending">
                {
                    contents.map(content => <SingleContent content={content} key={content.id} />)
                }
            </div>
            <CustomPagination setPage={setPage} />
        </div>
    );
};

export default Trending;