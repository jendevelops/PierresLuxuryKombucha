import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AllKegsEmployee from './employee/AllKegsEmployee';
import AllKegsPatron from './patron/AllKegsPatron';
import { NewKegControl } from './employee/NewKegControl';
import EditKegControl from './employee/EditKegControl';
import Header from './Header';
import splashPage from './SplashPage';
import EmployeeLoginControl from './employee/EmployeeLoginControl';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
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
      loginCredential: [
        {
          userName: 'johnny',
          password: 'eyeH8p13rr3'
        },
        {
          userName: 'pierre',
          password: 'admin'
        }
      ],
      loginState: false,
      currentUser: ''
    };
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleDecrementPint = this.handleDecrementPint.bind(this);
    this.handleEditKeg = this.handleLoginClick.bind(this);
    this.handleAddNewKeg = this.handleAddNewKeg.bind(this);
    this.handleLogOutClick = this.handleLogOutClick.bind(this);
  }

  handleLoginClick(credentialObject) {
    let credentialList = this.state.loginCredential.slice();
    const userName = credentialObject.userName;
    const password = credentialObject.password;
    let that = this;
    credentialList.foreach((credential) => {
      if (credential.userName === userName && credential.password === password) {
        let loggedIn = { loginState: true, currentUser: '' };
        loggedIn['currentUser'] = userName;
        that.setState(loggedIn);
      }
    });
  }

  handleLogOutClick(){
    this.setState({loginState:false, currentUser:''});
  }

  handleDecrementPint(kegId) {
    if (this.state.loginState) {
      const kegList = this.state.kegs.slice();

      let keg = kegList[kegId];
      keg.pintsLeft--;

      this.setState({ kegs: kegList });
    }
  }

  handleEditKeg(kegId, kegObject) {
    if (this.state.loginState) {
      const kegList = this.state.kegs.slice();
      kegList[kegId] = kegObject;
      this.setState({ kegs: kegList });
    }
  }

  handleAddNewKeg(kegObject) {
    if (this.state.loginState) {
      const kegList = this.state.kegs.slice();
      kegList.push(kegObject);
      this.setState({ kegs: kegList });
    }
  }

  render() {
    return (
      <div>
        <Header loginState={this.state.loginState} onLogoutclick={this.handleLogOutClick}/>
        <Switch>
          <Route exact path='/'
            component={splashPage} />

          <Route exact path='/menu'
            render={() =>
              <AllKegsPatron
                kegs={this.state.kegs}
                onDecrementPint={this.handleDecrementPint} />} />

          <Route exact path='/kegs'
            render={() => {
              <AllKegsEmployee
                kegs={this.state.kegs}
                loginState={this.state.loginState}/>;
            }} />

          <Route exact path='/employee/login'
            render={() => {
              <EmployeeLoginControl
                loginState={this.state.loginState}
                currentUser={this.state.currentUser}
                onLoginClick={this.handleLoginClick} />;
            }} />

          <Route path='/keg/new'
            render={() => {
              <NewKegControl
                kegs={this.state.kegs}
                loginState={this.state.loginState}
                onAddNewKeg={this.handleAddNewKeg} />;
            }} />

          <Route path='/keg/edit/'
            render={() => {
              <EditKegControl
                kegs={this.state.kegs}
                loginState={this.state.loginState}
                onEditKeg={this.handleEditKeg} />;
            }} />
        </Switch>
      </div>
    );
  }
}

export default App;