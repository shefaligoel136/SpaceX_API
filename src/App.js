import React, { Fragment } from 'react';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import Noty from 'noty';  
import "../node_modules/noty/lib/noty.css";  
import "../node_modules/noty/lib/themes/mint.css";  
import { Card } from './components/Card'
import { Modal } from './components/Modal';
import { Filter } from './components/Filter';
import { NavBar } from './components/NavBar';
import { Carousel } from './components/Carousel';
import { Footer } from './components/Footer';

class App extends React.Component{

  constructor(){
    super();
    this.state = {
      loading : true,
      info : [],
      url : " "
    }
  }

  componentDidMount(){ 
    fetch("https://api.spacexdata.com/v3/launches?limit=100")
    .then((response) => response.json())
    .then(info => this.setState({
    info: info,
    loading: false
  }))
    // this.getURL();
  }

  handleChange = (e) => {
    this.setState({
      url: e.target.value
    },()=>{
    this.getURL();
    });
  }

  showNoty = () =>{
    new Noty({
      type: "alert",
      text: "Your data has been updated",
      timeout: 3000
    }).show();
  }

   getURL = () =>{
    this.showNoty();
    // window.history.pushState({},"","http://localhost:3000/"+this.state.url.slice(8));
    fetch(this.state.url)
      .then((response) => response.json())
      .then(info => this.setState({
      info: info,
      loading: false
    }))
    console.log("shown")
  }

  render(){
    if(this.state.loading){
      return <div className="spin-load">
            <i className='fa fa-spinner fa-spin'> </i> 
             LOADING
        </div>
    }

    if(!this.state.info.length){
      return <div>
          No info about spaceX available
      </div>
    }


    return (
      <div className="App row" style={{left:"10%"}}>
            
        
      <span>
        <NavBar/>
        <Filter onChange = {this.handleChange} />
      </span>
        
        <div>
          < Carousel/>
        </div>
        <h3 style={{margin:"2%"}}>CURIOSITY IS THE ESSENCE OF OUR EXISTANCE</h3>
        {this.state.info.map((info) => (
          <Fragment key={info.flight_number}>
                <Card info = {info} />
                <Modal info = {info}/>
          </Fragment>
           
        ))}

        <Footer/>

      </div>
    );
  }
  
}

export default App;
