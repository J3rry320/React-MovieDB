import React from 'react';
import Dropdown from 'react-dropdown';
import Lang from './language.json';
import {invert} from 'lodash';
import axios from 'axios';
import UpdateItems from './Upcoming';
let year=[];
let genreName=[];
let language=[];
let AllGenre=[];
let years,genre,languages,langToSearch,actor,genreId,itemToShow;




class DropDown extends React.Component{
    constructor(props){
        super(props);
        this.state={
items:null
        }
    }
    _onSelect(val){

        if(typeof val.value==="number"){
        years=val.value

        }
        else{

          genreName.map(ele=>{
            if(val.value===ele){
        genre=val.value

            }


          })
        language.map(ele=>{
          if(val.value===ele){
            languages=val.value
          }

        })

        }
        AllGenre.forEach((ele,ind)=>{
            if(genre===ele.name){
              genreId= AllGenre[ind].id
            }
        })
        for(let i in Lang){


            if(Lang[i].nativeName===languages){
         langToSearch=i
            }

        }



            }
            searchActor(term){

            }
            req(years,genre,langToSearch){
                let url=''
if(years!=undefined&&genre!=undefined&&langToSearch!=undefined){
    console.log("BOom")
url=`https://api.themoviedb.org/3/discover/movie?api_key=b1ceec131e81ece0cacf2f641d01910a&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genre}&primary_release_year=${years}&with_original_language=${langToSearch}`
}
else if(years===undefined&&genre===undefined&&langToSearch===undefined){

    alert("Ba Ba Boom Provide Arguments");
}
else {
    for(let i=0;i<arguments.length;i++){
        if(arguments[i]===undefined){
            switch(i){
                case 0:
                url=`https://api.themoviedb.org/3/discover/movie?api_key=b1ceec131e81ece0cacf2f641d01910a&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genre||""}&with_original_language=${langToSearch||""}`
                break;
                case 1:
                url=`https://api.themoviedb.org/3/discover/movie?api_key=b1ceec131e81ece0cacf2f641d01910a&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=${years||""}&with_original_language=${langToSearch||""}`
                break;
                case 2:
                url=`https://api.themoviedb.org/3/discover/movie?api_key=b1ceec131e81ece0cacf2f641d01910a&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genre||""}&primary_release_year=${years||""}`
                break;

                default:
                alert("GIve Some Arguments Bitch")

            }

        }

    }
            }

                axios.get(url).then(res=>{
                this.setState({items: <UpdateItems data={res.data.results} checkForButton={true}/>})
                console.log(this.state.items)
                }).catch(err=>{
                    console.log(err)
                })

                //Actor Search

            }
            fetchGenreName(){
              for(let i in Lang){
                language.push(Lang[i].nativeName)
              }
              for (let i=1970;i<=2018;i++){
                year.push(i)
              }
              axios.get("https://api.themoviedb.org/3/genre/movie/list?api_key=b1ceec131e81ece0cacf2f641d01910a&language=en").then(result=>{

                result.data.genres.forEach(ele=>{

                  genreName.push(ele.name)
                  AllGenre.push({name:ele.name,id:ele.id})
                })

                }).catch(error=>{

                })
            }
    render(){
        return(
            <div className="container">


            <div className="row">
      <div className="col-md-4 col-sm-6">

<Dropdown options={year} onChange={this._onSelect} data-id="year" value={year[0]}  placeholder="Year" /></div>
<div className="col-md-4 col-sm-6">
<Dropdown options={genreName} onChange={this._onSelect} value={genreName[0]}  placeholder=" Genre" /></div>
<div className="col-md-4 col-sm-6">
<Dropdown options={language} onChange={this._onSelect} value={language[0]}  placeholder=" Language" /></div>

            <div className="col-sm-12">
<button onClick={e=>this.req(years,genreId,langToSearch)}>Search</button>
            </div>
{this.state.items}
            </div>
            </div>
        )
    }
    componentWillUpdate(){

    }
    componentDidMount(){
        this.fetchGenreName()
     }
}
export default DropDown;
