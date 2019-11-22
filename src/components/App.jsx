import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AllKegsEmployee from './employee/AllKegsEmployee';
import AllKegsPatron from './patron/AllKegsPatron';
import { NewKegControl } from './employee/NewKegControl';
import EditKegControl from './employee/EditKegControl';
import Header from './Header';
import splashPage from './SplashPage';
import EmployeeLogin from './employee/EmployeeLogin';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state={
      kegs: [
        {
          name: 'Peach Fuzzies',
          flavor: 'Fruit',
          price: 4.75,
          pintsLeft: 107,
          description: 'Imgine a lovely peach in the summertime. Jucy and supple, all bottled for your kombucha drinking pleasure.',
          img: '../img/peach.jpg'
        },
        {
          name: 'Blues Berry Blast',
          flavor: 'Fruit',
          price: 4.50,
          pintsLeft: 43,
          description: 'Only the bluest of blue bois goes in this one of a kind blue berry and cayenne pepper kombucha. A sweet lull before you\'re BLASTED off into upper stratasphere of taste.',
          img: 'blueberry.jpg'
        },
        {
          name: 'Belgian Delight',
          flavor: 'Chocolate',
          price: 6.00,
          pintsLeft: 65,
          description: 'We have partnered with the finest belgian chocoletiers to give you the decadant, roasted flavor of the Belgian Delight. The deep notes of the toasted cocoa and belgian chocolate nibs create a truely unique kombucha experience.',
          img: 'chocolate.jpg'
        },
        {
          name: 'The OG',
          flavor: 'Vegetable',
          price: 3.00,
          pintsLeft: 1,
          description: 'The one that started it all. As a play on words for the Japanese meaning of kombu meaning seaweed and cha meaning tea, we introduced the world to the luxury that is Pierre\'s Luxury Kombucha with a seaweed flavored kombucha. Wild konbu harvested off the shores of Japan roasted to perfection create this wondefully rich and complex kombucha.',
          img: 'konbu.jpg'
        },
        {
          name: 'Bagels Reimagined',
          flavor: 'Grain',
          price: 10.00,
          pintsLeft: 15,
          description: 'In partnership with Pierre\'s close friend Jaqueline of the world renowned pop up shop Bagels Reimagined, this kombucha drink is where have none have gone before. With dairy hints and a heavy grain base, this kombucha will leave your mouth tasting like essence of the reimagined butter bagel with whole fish.',
          img: 'bagel.jpg'
        }
      ],
      loginCredential:[
        {
          userName: 'johnny',
          password: 'eyeH8p13rr3'
        },
        {
          userName: 'pierre',
          password: 'admin'
        }
      ],
      loginState: false
    };
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleDecrementPint = this.handleDecrementPint.bind(this);
  }
  
  handleLoginClick(credentialObject) {
    let credentialList = this.state.loginCredential.slice();
    const userName = credentialObject.userName;
    const password = credentialObject.password;
    let that = this;
    credentialList.foreach((credential) =>{
      if (credential.userName === userName && credential.password === password) {
        let loggedIn = { loginState: true };
        that.setState(loggedIn);
      }
    });
  }

  handleDecrementPint(kegId){
    if(this.state.loginState)
    {
      const kegList = this.state.kegs.slice();

      let keg = kegList[kegId];
      keg.pintsLeft--;

      this.setState({kegsList: kegList});
    }
  }


  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={splashPage} />
          <Route exact path='/menu' component={AllKegsPatron} />
          <Route exact path='/employee' component={AllKegsEmployee} />
          <Route exact path='/employee/login' component={EmployeeLogin} />
          <Route path='/keg/new' component={NewKegControl} />
          <Route path='/keg/edit/' component={EditKegControl} />
        </Switch>
      </div>
    );
  }
}

export default App;