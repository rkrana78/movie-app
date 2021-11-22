import { Badge } from '@material-ui/core';
import React from 'react';
import {img_300, unavailable} from '../../config/config'
import './SingleContent.css'

const SingleContent = (props) => {
    const{title, id, poster_path, name, first_air_date ,release_date, media_type, vote_average} = props.content;
    return (
        <div className="media">
            <Badge badgeContent={vote_average} color={vote_average > 6 ? "primary" : "secondary"}/>
           <img className="poster" src={ poster_path ?`${img_300}/${poster_path}` : unavailable} alt={title} />
           <b className="title">{title}</b>
           <span className="subTitle">
               {
                   media_type === 'tv' ? 'TV Series' : 'Movie'
               }
               <span className="subTitle">{first_air_date || release_date}</span>
           </span>
        </div>
    );
};

export default SingleContent;