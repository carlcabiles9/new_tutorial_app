import React from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'
class ShowButton extends React.Component {

render(){
    return(<Link to={{ pathname: `/items/${this.props.id}`,state: {item: this.props.item}}} color="primary" size="small"><VisibilityIcon /></Link>)
}
}
export default ShowButton

ShowButton.propTypes={
    id: PropTypes.number.isRequired,
    item: PropTypes.object
}