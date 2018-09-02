import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import Media from './Media';
import Cast from './Cast';
const customStyles = {
  content : {

    backgroundColor:"red"
  },

};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)


class ModalMovie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: this.props.open
    };

   // this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }



  afterOpenModal() {
    // references are now sync'd and can be accessed.
    console.log("Opened")
    //this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {

      let genre=this.props.data.genres.map(ele=>{
          return ele.name+" "
      }),genreId="";
      console.log(genre)

    return (
      <div className="text-dark">

        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}

          contentLabel="Example Modal"
        >

          <button className="btn btn-outline-light float-right" onClick={this.closeModal}><i className="far text-dark fa-window-close"></i></button>

          <Media  Poster={"http://image.tmdb.org/t/p/w342/"+this.props.data.
poster_path
}
col={true}
color={"#000"}
button={true}
      popularity={this.props.data.popularity}
      homepage={this.props.data.homepage}
      country={this.props.data.production_countries}
language={this.props.data.spoken_languages}
      title={this.props.data.title} tagline={this.props.data.tagline}
      avgRating={this.props.data.vote_average} date={this.props.data.release_date}
      runtime={this.props.data.runtime} budget={this.props.data.budget}
      revenue={this.props.data.revenue} Description={this.props.data.overview}
      genre={genre}  genreId={genreId} starColor={true} />
      <Cast textDark={true} showButton={true} data={this.props.data.credits}/>
        </Modal>
      </div>
    );
  }
  componentWillReceiveProps(props){
      console.log(props.data)
      this.setState({modalIsOpen:props.open})
  }
}
export default ModalMovie;

