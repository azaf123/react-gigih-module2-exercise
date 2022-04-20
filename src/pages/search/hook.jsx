import { useState, useEffect } from "react";
import GiphyForm from "../../components/giphy";
import SearchBar from "../../components/searchbar";
import PrimarySearchAppBar from "./searchMui";
import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem'
// Fungsional component
const Hook = () => {
  const [giphy, setGiphy] = useState([]);
  const [search, setSearch] = useState("");

  const getGiphy = () => {
    fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_GIPHY_API_KEY}&q=${search}&limit=10`
    )
      .then((data) => data.json())
      .then((data) => {
        setGiphy(data.data);
        console.log(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  // handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    getGiphy();
  };

  // console.log(search);
  return (
    <>
      <SearchBar
        search={search}
        handleFormChange={handleChange}
        handleSubmit={handleSubmit}
      />
      {/* <PrimarySearchAppBar search={search} handleFormChange={handleChange} handleSubmit={handleSubmit}/> */}

      <div className="giphy-container">
      <ImageList sx={{ width: 500, height: 450 }}
        >
          {giphy.map((giphy) => (
            <ImageListItem>
            <GiphyForm
              key={giphy.id}
              titleName={giphy.title}
              id={giphy.id}
              uploadDate={giphy.import_datetime}
              url={giphy.images.original.url}
              webPages={giphy.url}
              rating={giphy.rating}
            />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    </>
  );
};
export default Hook;

// import SearchBar from "../../components/searchbar";
// import GiphyForm from "../../components/giphy";
// import { useSelector } from "react-redux";
// const Hook = () => {

//   const giphy = useSelector((state) => state.giphy);

//   return (
//     <>
//       <SearchBar />
//       <div className="giphy-container">
//         {giphy.map((giphy) => (
//           <GiphyForm key={giphy.id} titleName={giphy.title} id={giphy.id} uploadDate={giphy.import_datetime} url={giphy.images.original.url} webPages={giphy.url} rating={giphy.rating} />
//         ))}
//       </div>
//     </>
//   );
// }
// export default Hook;
