import React from 'react'
import PropTypes from 'prop-types'
import axios from 'axios';

class HomeShow extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            item: {}
        }
    }
   componentDidMount(){
       if(this.props.location.state !== undefined){
              this.setState({
                item: this.props.location.state.item
              })
       }else{
           
           axios.get(`https://jsonplaceholder.typicode.com/users/${this.props.match.params.id}`)
              .then(response =>{ this.setState({ item: response.data})})
       }
       
   }
render(){
    return(<>{this.state.item.name}  </>)
}

}

export default HomeShow
