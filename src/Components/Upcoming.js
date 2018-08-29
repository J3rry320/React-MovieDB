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
         item:[]
        }
        this._onSelect=this._onSelect.bind(this)
    }

    updateItems(array){


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
    fetchUpcoming(Date){
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
        case "Rating":
        let sortedArrRating=this.state.element.sort(function(a, b) {
            var textA = a.avgRating;
            var textB = b.avgRating;
            return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
        });



        this.setState(prevElement=>{
            element: [...prevElement.element, sortedArrRating]
          })

this.updateItems(this.state.element)

        break;
        case "Alphabetical":

       let sortedArr=this.state.element.sort(function(a, b) {
            var textA = a.title.toUpperCase();
            var textB = b.title.toUpperCase();
            return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
        });



        this.setState(prevElement=>{
            element: [...prevElement.element, sortedArr]
          })

this.updateItems(this.state.element)


        break;
        case "Date":
        let sortedArrDate=this.state.element.sort(function(a, b) {
            var textA = a.date.toUpperCase();
            var textB = b.date.toUpperCase();
            return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
        });

        this.setState(prevElement=>{
            element: [...prevElement.element, sortedArrDate]
          })
       this.updateItems(this.state.element)


        break;
    }
    }
      render(){



const options=["Rating","Alphabetical","Date"]

          return(
        <div>
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