import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
const APIKey="AIzaSyASsTAnJAqiFiRTdC-TxjWQu6sjG0dwcZw";
class YoutubePlayer extends React.Component{
    constructor(props){
        super(props);
        this.state={
            videoId:""
        }
    }
   search(term){
    YTSearch({key:APIKey,term:term+"trailer"},(videos)=>{
        let videoId=videos[0].id.videoId;
    this.setState({videoId:`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`})



        })
   }
    render(){
        return(
            <div   className=" embed-responsive embed-responsive-16by9">
         <iframe  src={this.state.videoId} className=" embed-responsive-item" allowFullScreen frameBorder={0}>
        </iframe>
            </div>

        )
    }
    componentDidMount(){
        this.search(this.props.term);

    }
    componentWillReceiveProps(props){
        this.search(props.term)
    }
}
export default YoutubePlayer;


