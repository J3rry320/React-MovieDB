import React,{Component} from 'react';
import axios from 'axios';

import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import Stars from './starcounter'

class UpcomingMovies extends Component{
    constructor(props){
        super(props);
        this.state={
         element:[],
         item:[],
         ifForOther:this.props.data
        }
        this._onSelect=this._onSelect.bind(this)
    }

    updateItems(array){
        if(this.state.ifForOther){

            let items=this.state.ifForOther.map(items=>{
                return (  <li className="media" data-id={items.id} key={items.id}>
                <img className="mr-3" src={"http://image.tmdb.org/t/p/w185_and_h278_bestv2//"+items.poster_path} alt="Generic placeholder image"/>
                <div className="media-body">
                  <h5 className="mt-3 mb-1">{items.title}</h5>
                  <br/>
                  <span className="left-span">

                  <Stars total={items.vote_average} /></span><br/>
                  <span>{items.release_date}</span>
                  <br/>
                {items.overview}
                </div>
              </li>)
            })

            this.setState({
                item: [ items]
              })
        }
else{
    let items=array.map(items=>{
        return (  <li className="media" data-id={items.id} key={items.id}>
        <img className="mr-3" src={items.Poster} alt="Generic placeholder image"/>
        <div className="media-body">
          <h5 className="mt-3 mb-1">{items.title}</h5>
          <br/>
          <span className="left-span">

          <Stars total={items.avgRating} /></span><br/>
          <span>{items.date}</span>
          <br/>
        {items.Description}
        </div>
      </li>)
    })

    this.setState({
        item: [ items]
      })
}




    }
    fetchUpcoming(){
        axios.get("https://api.themoviedb.org/3/movie/upcoming?api_key=b1ceec131e81ece0cacf2f641d01910a&language=en-US&page=1&append_to_response=credits").then(
          result=>{
            result.data.results.forEach(element=>{

              this.state.element.push({
                    title:element.title,
                    Description:element.overview,
                    Poster:"http://image.tmdb.org/t/p/w185_and_h278_bestv2//"+element.poster_path,

                    date:element.release_date,

                    avgRating:element.vote_average,

                    popularity:element.popularity,
                    background:"http://image.tmdb.org/t/p/w185_and_h278_bestv2//"+element.backdrop_path,
                    language:element.original_language,
                    voteCount:element.vote_count,

                    id:element.id,//All are array from here

                    genre:element.genre_ids,





                })
                            })
                        this.updateItems(this.state.element)

          }
        )
      }
      _onSelect(value){

    switch(value.value){
        case "Rating Low To High":

        if(this.state.ifForOther){
            this.updateItems(this.state.ifForOther.sort(function(a, b) {
                let textA = a.vote_average;
                let textB = b.vote_average;
                return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
            }));
        }
        else{
            let sortedArrRating=this.state.element.sort(function(a, b) {
                let textA = a.avgRating;
                let textB = b.avgRating;
                return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
            });
            this.setState(prevElement=>{
                element: [...prevElement.element, sortedArrRating]
              })


              this.updateItems(this.state.element)
        }







        break;
        case "Rating High To Low":
        if(this.state.ifForOther){
            this.updateItems(this.state.ifForOther.sort(function(a, b) {
                let textA = a.vote_average;
                let textB = b.vote_average;
                return (textA > textB) ? -1 : (textA < textB) ? 1 : 0;
            }));
        }
        else{
            let sortedArrRatingHigh=this.state.element.sort(function(a, b) {
                let textA = a.avgRating;
                let textB = b.avgRating;
                return (textA > textB) ? -1 : (textA < textB) ? 1 : 0;
            });
            this.setState(prevElement=>{
                element: [...prevElement.element, sortedArrRatingHigh]
              })

    this.updateItems(this.state.element)
        }

break;
        case "Alphabetical":
        if(this.state.ifForOther){
            this.updateItems(this.state.ifForOther.sort(function(a, b) {
                let textA = a.title.toUpperCase();
                let textB = b.title.toUpperCase();
                return (textA <textB) ? -1 : (textA>textB) ? 1 : 0;
            }));
        }
        else{
            let sortedArr=this.state.element.sort(function(a, b) {
                let textA = a.title.toUpperCase();
                let textB = b.title.toUpperCase();
                return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
            });



            this.setState(prevElement=>{
                element: [...prevElement.element, sortedArr]
              })

    this.updateItems(this.state.element)
        }



        break;
        case "Date":
        if(this.state.ifForOther){
            this.updateItems(this.state.ifForOther.sort(function(a, b) {
                let textA = a.release_date.toUpperCase();
                let textB = b.release_date.toUpperCase();
                return (textA <textB) ? -1 : (textA>textB) ? 1 : 0;
            }));
        }
        else{
            let sortedArrDate=this.state.element.sort(function(a, b) {
                let textA = a.date.toUpperCase();
                let textB = b.date.toUpperCase();
                return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
            });

            this.setState(prevElement=>{
                element: [...prevElement.element, sortedArrDate]
              })
           this.updateItems(this.state.element)
        }



        break;
    }
    }
      render(){



const options=["Rating Low To High","Rating High To Low","Alphabetical","Date"]

          return(
        <div key={1}>

<Dropdown options={options} onChange={this._onSelect} value={options[0]} placeholder="Select an option" />
{this.state.item}

        </div>
          )
      }
      clickFunction(){

      }
      componentDidMount(){

        this.fetchUpcoming();

      }
      componentWillUpdate(props,state){



      }


}
export default UpcomingMovies;