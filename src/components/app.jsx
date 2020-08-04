import React, { Component } from 'react';
import  SearchBar from './searchbar';
import  Gif from './gif';
import  GifList from './giflist';
import giphy from 'giphy-api';

const GIPHY_API_KEY = 'X2SYEVRhbA1AJ0Y2Yt8qVEtS6scDuBce';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: null//"xT9IgDEI1iZyb2wqo8"
    };
  }


  search = (query) => {
    giphy({ apiKey: GIPHY_API_KEY, https: true })
      .search({
        q: query,
        rating: 'g',
        limit: 10
      }, (error, result) => {
        this.setState({
          gifs: result.data
        });
      });
  }

 selectGif = (id) => {
   this.setState({
     selectedGifId: id
   });
 }

  // ShouldComponentUpdate(nextProps, nextstate) {
  //   debugger
  //   return this.props.id !==  nextProps.id;
  // }


 render() {
   return (
     <div>
       <div className="left-scene">
         <SearchBar searchFunction={this.search} />
         <div className="selected-gif">
           <Gif id={this.state.selectedGifId} />
         </div>
       </div>
       <div className="right-scene">
         <GifList gifs={this.state.gifs} selectGif={this.selectGif} />
       </div>
     </div>
   );
 }
}


export default App;
