import React, { useState, useEffect } from 'react';
import SearchIcon from "@material-ui/icons/Search";
import {
    Button,
    createMuiTheme,
    Tab,
    Tabs,
    TextField,
    ThemeProvider,
} from "@material-ui/core";
import CustomPagination from '../Pagination/CustomPagination';
import SingleContent from '../SingleContent/SingleContent';


const Search = () => {
    const [type, setType] = useState(0);
    const [page, setPage] = useState(1);
    const [contents, setContents] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [numOfPages, setNumOfPages] = useState();


    const darkTheme = createMuiTheme({
        palette: {
            type: "dark",
            primary: {
                main: "#fff",
            },
        },
    });

  
    useEffect(() => {
        window.scroll(0, 0);
        const url = `https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}?api_key=c1b30049dd035636e32a9002d9816015&language=en-US&query=${searchText}&page=${page}&include_adult=false`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data.results);
                setContents(data.results);
                setNumOfPages(data.total_pages);
                
            })
            .catch(error =>console.log(error))
            
        
    }, [type, page, searchText]);
    return (
         <div>
            <ThemeProvider theme={darkTheme}>
                <div style={{ display: 'flex', margin: "15px 0" }}>
                     <TextField
                         style={{ flex: 1 }}
                       className="searchBox"
                         label="Search"
                        variant="filled"
                         onChange={(e) => setSearchText(e.target.value)}
                    />
                   {/* <Button onClick={fetch} variant="contained" style={{ marginLeft: 10 }}><SearchIcon /></Button> */}
        <Button
        onClick={fetch}
        variant="contained"
        style={{ marginLeft: 10 }}
      >
        <SearchIcon fontSize="large" />
      </Button>
                 </div>
                 <Tabs value={type} indicatorColor="primary" textColor="primary" onChange={(event, newValue) => {
                     setType(newValue);
                     setPage(1);
                 }}>
                     <Tab style={{ width: "50%" }} label="Search Movies" />
                     <Tab style={{ width: "50%" }} label="Search TV Series" />

                </Tabs>
            </ThemeProvider>
             <div className="trending">
                 { contents &&
                     contents.map(content => <SingleContent content={content} key={content.id} />)
                 }

                 {searchText &&
                     !contents &&
                     (type ? <h2>No Series Found</h2> : <h2>No Movies Found</h2>)}
             </div>
             {
                 numOfPages > 1 && (
                    <CustomPagination setPage={setPage} numOfPages={numOfPages} />
                 )
             }
         </div>

    );
};

export default Search;