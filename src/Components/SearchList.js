import React from 'react';
import ListItem from "./ListItemInSearch"
const VideoList=(props)=>{
    if(props.item.length==0){
        return <ListItem name="Loading"/>
    }
    else if(props.item.length!==0){
    const VideoItems=props.item.map((video)=>{

        return <ListItem name={video.title} id={video.id} key={video.id}/>
    })
    console.log(props)
    return(
        <ul className="col-md-6 col-sm-12 list-group">
    {VideoItems}
        </ul>
    )

}

}
export default VideoList;