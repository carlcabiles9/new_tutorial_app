import logo from './logo.svg';
import './App.css';
import React from 'react'
import Home from './../src/pages/components/Home/Home'
import { Button, Table, TableCell, TableRow, TableBody, AppBar } from '@mui/material';
import styles from './App.module.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import HomeShow from './pages/components/Home/HomeShow';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 'Initial data...',
      count: 1,
      name: '',
      age: 0,
      is_true: false,
      items: []

    }
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          items: result
        });
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )

  }
  handleClick(){
    this.setState({ is_true: !this.state.is_true})
  }


  render() {
    return (
      <>
      <hr />
      Sidenav
      <Router>
        <Switch>
          <Route exact path="/items" >
            <Home items={this.state.items} />
          </Route>
          <Route path="/items/:id" component={HomeShow} />
           

        </Switch>
      </Router></>
    );
  }
}

export default App;
