import React from 'react';
import ListItem from "./ListItemInSearch"
const VideoList=(props)=>{


const Hide=props.hide?"d-none":"d-block"

    const VideoItems=props.item.slice(0,5).map((video)=>{

        return <ListItem change={props.onchange} hide={props.hide} callback={props.callback} name={video.title} id={video.id} key={video.id}/>
    })

    return(
        <ul className={` col-md-12 ${Hide} col-sm-12 list-group`}>
    {VideoItems}
        </ul>
    )




}
export default VideoList;