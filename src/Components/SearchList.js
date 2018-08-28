import React from 'react';
import ListItem from "./ListItemInSearch"
const VideoList=(props)=>{

    if(props.item.length===0){
        return <ListItem name="Loading"/>
    }
    else if(props.item.length!==0){
    const VideoItems=props.item.slice(0,5).map((video)=>{

        return <ListItem callback={props.callback} name={video.title} id={video.id} key={video.id}/>
    })
   const hide=props.hide?"d-none":"d-block"
    return(
        <ul className={`col-md-6 ${hide} col-sm-12 list-group`}>
    {VideoItems}
        </ul>
    )

}

}
export default VideoList;