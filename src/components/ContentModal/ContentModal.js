
// import React, { useEffect, useState } from 'react';
// import { makeStyles } from "@material-ui/core/styles";
// import Backdrop from '@mui/material/Backdrop';
// import Box from '@mui/material/Box';
// import Modal from '@mui/material/Modal';
// import Fade from '@mui/material/Fade';
// import Button from '@mui/material/Button';
// import { img_500, unavailable } from '../../config/config';
// import YouTubeIcon from "@material-ui/icons/YouTube";
// import Carousel from "../Carousel/Carousel";
// import './ContentModal.css'



// const useStyles = makeStyles((theme) => ({
//     modal: {
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//     },
//     paper: {
//         width: "90%",
//         height: "80%",
//         backgroundColor: "#39445a",
//         border: "1px solid #282c34",
//         borderRadius: 10,
//         color: "white",
//         boxShadow: theme.shadows[5],
//         padding: theme.spacing(1, 1, 3),
       
//     },
// }));


// export default function ContentModal({ children, media_type, id }) {
//     const classes = useStyles();
//     const [open, setOpen] = useState(false);
//     const [contents, setContents] = useState();
//     const [video, setVideo] = useState();
//     const handleOpen = () => setOpen(true);
//     const handleClose = () => setOpen(false);

//     useEffect(() => {
//         const url = `https://api.themoviedb.org/3/${media_type}/${id}?api_key=c1b30049dd035636e32a9002d9816015&language=en-US`
//         fetch(url)
//             .then(res => res.json())
//             .then(data => {
//                // console.log(data)
//                 setContents(data)
//             })

//     }, [id, media_type])

//     useEffect(() => {
//         const url = `https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=c1b30049dd035636e32a9002d9816015&language=en-US`
//         fetch(url)
//             .then(res => res.json())
//             .then(data => {
//                 console.log(data)
//                 setVideo(data.results[0]?.key)
//             })
//     }, [id, media_type])

//     return (
//         <div>
//             <div className="media" onClick={handleOpen}>{children}</div>
//             <Modal
//                 aria-labelledby="transition-modal-title"
//                 aria-describedby="transition-modal-description"
//                 className={classes.modal}
//                 open={open}
//                 onClose={handleClose}
//                 closeAfterTransition
//                 BackdropComponent={Backdrop}
//                 BackdropProps={{
//                     timeout: 500,
//                 }}
//             >
//                 <Fade in={open}>
//                     {contents && (
//                         <Box className={classes.paper}>
//                             <div className="ContentModal">
//                                 <img className="ContentModal__portrait" src={contents.poster_path ? `${img_500}/${contents.poster_path}` : unavailable} alt={contents.name || contents.title} />
//                                 <img className="ContentModal__landscape" src={contents.backdrop_path ? `${img_500}/${contents.poster_path}` : unavailable} alt={contents.name || contents.title} />
//                                 <div className="ContentModal__about">
//                                     <span className="ContentModal__title">
//                                         {contents.name || contents.title} (
//                                         {(
//                                             contents.first_air_date ||
//                                             contents.release_date ||
//                                             "-----"
//                                         ).substring(0, 4)}
//                                         )
//                                     </span>
//                                     {contents.tagline && (
//                                         <i className="tagline">{contents.tagline}</i>
//                                     )}

//                                     <span className="ContentModal__description">
//                                         {contents.overview}
//                                     </span>

//                                     <div>
//                                         <Carousel id={id} media_type={media_type} />
//                                     </div>

//                                     <Button
//                                         variant="contained"
//                                         startIcon={<YouTubeIcon />}
//                                         color="secondary"
//                                         target="__blank"
//                                         href={`https://www.youtube.com/watch?v=${video}`}
//                                     >
//                                         Watch the Trailer
//                                     </Button>
//                                 </div>
//                             </div>
//                         </Box>
//                     )}
//                 </Fade>
//             </Modal>
//         </div>
//     );
// }


import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import {
  img_500,
  unavailable,
  unavailableLandscape,
} from "../../config/config";
import "./ContentModal.css";
import { Button } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import Carousel from "../Carousel/Carousel";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    width: "90%",
    height: "80%",
    backgroundColor: "#39445a",
    border: "1px solid #282c34",
    borderRadius: 10,
    color: "white",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(1, 1, 3),
  },
}));

export default function ContentModal({ children, media_type, id }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState();
  const [video, setVideo] = useState();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
            const url = `https://api.themoviedb.org/3/${media_type}/${id}?api_key=c1b30049dd035636e32a9002d9816015&language=en-US`
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    // console.log(data)
                     setContent(data)
                 })
    
         }, [id, media_type])
    
         useEffect(() => {
             const url = `https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=c1b30049dd035636e32a9002d9816015&language=en-US`
             fetch(url)
                 .then(res => res.json())
                 .then(data => {
                    // console.log(data)
                     setVideo(data.results[0]?.key)
                 })
         }, [id, media_type])

  

  return (
    <>
      <div
        className="media"
        style={{ cursor: "pointer" }}
        color="inherit"
        onClick={handleOpen}
      >
        {children}
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          {content && (
            <div className={classes.paper}>
              <div className="ContentModal">
                <img
                  src={
                    content.poster_path
                      ? `${img_500}/${content.poster_path}`
                      : unavailable
                  }
                  alt={content.name || content.title}
                  className="ContentModal__portrait"
                />
                <img
                  src={
                    content.backdrop_path
                      ? `${img_500}/${content.backdrop_path}`
                      : unavailableLandscape
                  }
                  alt={content.name || content.title}
                  className="ContentModal__landscape"
                />
                <div className="ContentModal__about">
                  <span className="ContentModal__title">
                    {content.name || content.title} (
                    {(
                      content.first_air_date ||
                      content.release_date ||
                      "-----"
                    ).substring(0, 4)}
                    )
                  </span>
                  {content.tagline && (
                    <i className="tagline">{content.tagline}</i>
                  )}

                  <span className="ContentModal__description">
                    {content.overview}
                  </span>

                  <div>
                    <Carousel id={id} media_type={media_type} />
                  </div>

                  <Button
                    variant="contained"
                    startIcon={<YouTubeIcon />}
                    color="secondary"
                    target="__blank"
                    href={`https://www.youtube.com/watch?v=${video}`}
                  >
                    Watch the Trailer
                  </Button>
                </div>
              </div>
            </div>
          )}
        </Fade>
      </Modal>
    </>
  );
}