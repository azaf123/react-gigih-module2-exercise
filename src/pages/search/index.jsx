import { Component } from "react";
import axios from "axios";
import GiphyForm from "../../components/giphy";
// class Component
class Search extends Component{
    state ={
        search: "",
        data: []
    }

// ambil data dari API
getGiphys  = () => {
    fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_GIPHY_API_KEY}&q=${this.state.search}&limit=100`
      )
        .then((data) => data.json())
        .then((data) => {
          this.setState({
            data: data.data,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
// untuk input search
    handleChange = (e) => {
        this.setState({
            search: e.target.value
        })
    }

    handleSubmit = () => {
        this.getGiphys();
      };
    

      
    render(){
        return(
            <div>
                <h1>Search</h1>
                <form>
                    <input type="text" name="search" placeholder="Search" value={this.state.search} onChange={this.handleChange}/>
                    <button type="button" onClick={this.handleSubmit}>Search</button>
                </form>
                <div className="giphy-container">
                    {this.state.data.map((giphy) => (
                        <GiphyForm key={giphy.id} titleName={giphy.title} id={giphy.id} uploadDate={giphy.import_datetime} url={giphy.images.original.url} webPages={giphy.url} rating={giphy.rating} />
                    ))}
                </div>
                
            </div>
        )
    }
}
export default Search;