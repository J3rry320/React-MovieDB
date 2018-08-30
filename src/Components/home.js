import React,{Component} from 'react';
import Search from "./SearchBar";
import axios from 'axios';
import Card from './Desricptor';
let value=null
class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
          movie: [],
         data:[],
         hidden:false,
         value:null
        }
        this.Search = this.Search.bind(this);
        this.setValue=this.setValue.bind(this)
        this.fetchMovieID=this.fetchMovieID.bind(this);
        this.setInput=this.setInput.bind(this)
    }


    fetchMovieID(value,movieID){
       // console.log(value)
         this.setState({value:value})
        let url = `https://api.themoviedb.org/3/movie/${movieID}?&api_key=b1ceec131e81ece0cacf2f641d01910a&append_to_response=credits`


        this.setState({hidden:true})
        axios.get(url).then(result => {
    console.log(result.data)
          this.setState({data:[result.data]})

        }).catch(error => {
            console.log(error)
          }

        )
      }
      Search(movieName) {
//console.log(movieName)
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=b1ceec131e81ece0cacf2f641d01910a&query=${movieName}`).then(result => {

          this.setState({
            movie: []
          });


          result.data.results.forEach(element => {

            this.setState({
              movie: [...this.state.movie, {

                "title": element.title,
                "id": element.id
              }]
            })


          });



        }).catch(error => {
          console.log(error)
        })

      }
      setValue(val){
this.setState({hidden:val})

      }
      setInput(){
        this.setState({value:null})
      }
      render(){

          return(
              <div>
            <div className="container">
            <div className="row">

            <div className="col-sm-12">
            <Search value={this.state.value} onchange={this.setValue} callback = {
                    this.Search
                  }
                  item = {
                    this.state.movie
                  }
                  callbackForList = {
                    this.fetchMovieID
                  }
                  changeInput={this.setInput}
                  hide={this.state.hidden}
                  />

            </div>
            </div>



              </div>
              <Card data={this.state.data}/>
            </div>
          )
      }
      componentDidMount(){

      }
}
export default Home