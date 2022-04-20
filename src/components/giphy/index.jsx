
import './index.css'

const GiphyForm = ({ titleName, id, uploadDate, url, webPages,rating }) => {
  return (
    
    <div className="giphy-form">
      <div className="giphy-form-title">
        <h3>{titleName}</h3>
      </div>
      <div className="giphy-form-image">
        <img src={url} alt={titleName} />
      </div>
      <div className="giphy-form-info">
        <p>
          <span>Rating: </span>
          {rating}
        </p>
        <p>
          <span>ID: </span>
          {id}
        </p>
        <p>
          <span>Uploaded: </span>
          {uploadDate}
        </p>
        
      </div>
    </div>
  );
};

export default GiphyForm