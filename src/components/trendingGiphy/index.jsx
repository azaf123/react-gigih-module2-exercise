import { useState, useEffect } from "react";
import GiphyForm from "../../components/giphy";

// Fungsional component
const Trending = () => {
  const [giphy, setGiphy] = useState([]);


useEffect(() => {
  getGiphy();
}, [])

  const getGiphy = () => {
    fetch(
      `https://api.giphy.com/v1/gifs/trending?api_key=${process.env.REACT_APP_GIPHY_API_KEY}&limit=10`
    )
      .then((data) => data.json())
      .then((data) => {
        setGiphy(data.data);
        console.log(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

 
  return (
    <>
    <h1>trending Giphy</h1>
      <div className="giphy-container">

        {giphy.map((giphy) => (
          <GiphyForm key={giphy.id} titleName={giphy.title} id={giphy.id} uploadDate={giphy.import_datetime} url={giphy.images.original.url} webPages={giphy.url} rating={giphy.rating} />
        ))}
      </div>
    </>
  );
}
export default Trending;
