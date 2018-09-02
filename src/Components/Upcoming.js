import React,{Component} from 'react';
import axios from 'axios';

import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import Stars from './starcounter'
import Modal from './Modal';

class UpcomingMovies extends Component{
    constructor(props){
        super(props);
        this.state={
         element:[],
         item:[],
         ifForOther:this.props.data,
         Modal:null,
         listElems:[]
        }
        this._onSelect=this._onSelect.bind(this)

    }

OpenModal(movie_id){
    axios.get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=b1ceec131e81ece0cacf2f641d01910a&language=en-US&append_to_response=credits`).then(res=>{

    this.setState({Modal:<Modal open={true} data={res.data}/>})
    }).catch(err=>{
        console.log(err)
    })
}

    updateItems(array){
        console.log(array)
        if(this.props.data){

            let items=array.map(items=>{
                let image=items.poster_path?"http://image.tmdb.org/t/p/w185_and_h278_bestv2//"+items.poster_path:"https://www.toadandco.com/c.1311986/sca-dev-elbrus/img/no_image_available.jpeg"
                return (  <li className="media mt-3 border-bottom" data-id={items.id} key={items.id}>
                <img className="mr-3" src={image} alt="Generic placeholder image"/>
                <div className="media-body">
                  <h5 className="mt-3 mb-1">{items.title}</h5>

                  <span className="left-span">

                  <Stars total={items.vote_average} /></span><br/><br/>
                  <span>{items.release_date}</span>

<br/>

                <button className="mt-1 mb-3 btn btn-info" data-id={items.id} onClick={e=>this.OpenModal(e.target.dataset.id)}>Learn More</button>
                </div>
              </li>)
            })

            this.setState({
                item: [ items]
              })
        }
else{
    let items=array.map(items=>{
        let image=items.Poster?items.Poster:"https://www.toadandco.com/c.1311986/sca-dev-elbrus/img/no_image_available.jpeg"
        return (  <li className="media mt-3 border-bottom" data-id={items.id} key={items.id}>
        <img className="mr-3" src={image} alt="Generic placeholder image"/>
        <div className="media-body">
          <h5 className="mt-3 mb-1">{items.title}</h5>
          <br/>
          <span className="left-span">

          <Stars total={items.avgRating} /></span><br/>
          <span>{items.date}</span>


<br/>

        <button className="mt-1 mb-3 btn btn-info" data-id={items.id} onClick={e=>this.OpenModal(e.target.dataset.id)}>Learn More</button>
        </div>
      </li>)
    })

    this.setState({
        item: [ items]
      })
}




    }

      _onSelect(value){

    switch(value.value){
        case "Rating Low To High":

        if(this.state.ifForOther){
            this.updateItems(this.props.data.sort(function(a, b) {
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
            this.updateItems(this.props.data.sort(function(a, b) {
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
            this.updateItems(this.props.data.sort(function(a, b) {
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
            this.updateItems(this.props.data.sort(function(a, b) {
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
<div className="mt-2 mb-2">
<Dropdown options={options}  onChange={this._onSelect} value={options[0]}  placeholder="Select an option" />
</div>

<div className="mt-4" key={1}>
{this.state.item}

{this.state.Modal}

<div className="col-12">
<nav aria-label="Page navigation example">
  <ul className="pagination">
    <li className="page-item disabled">
      <a class="page-link"  tabindex="-1">Previous</a>
    </li>

{this.state.listElems}
    <li className="page-item">
      <a className="page-link">Next</a>
    </li>
  </ul>
</nav>
</div>
</div>


        </div>
          )
      }
      fetchUpcoming(){
        if(!this.props.data){

            axios.get("https://api.themoviedb.org/3/movie/upcoming?api_key=b1ceec131e81ece0cacf2f641d01910a&language=en-US&page=1&append_to_response=credits").then(
                result=>{
                    console.log(result.data.total_pages)
for(let i=1;i<result.data.total_pages;i++){
    this.setState(prev=>({listElems:[...prev.listElems,<li className="page-item" key={i}><a class="page-link" href="#">{i}</a></li>]}
))
}

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
        else{
            this.updateItems(this.props.data)
        }

      }


      componentDidMount(){

        this.fetchUpcoming();




      }
      componentWillReceiveProps(props,state){
         // console.log(props.data)

this.updateItems(props.data)
      }




}
export default UpcomingMovies;