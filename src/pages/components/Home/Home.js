import React from 'react'
import PropTypes from 'prop-types'
import { Table, TableHead,TableBody, TableCell, TableRow} from '@mui/material'
import ShowButton from './ShowButton';
class Home extends React.Component {

  
  render() {
    return (
      <Table>
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Age</TableCell>
          <TableCell>Show</TableCell>
          <TableCell>Actions</TableCell>
        </TableRow>
     
      </TableHead>
      <TableBody>
        {this.props.items.map(item => (
          <TableRow key={item.id}>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.username}</TableCell>
            <TableCell>{item.email}</TableCell>
            <TableCell><ShowButton id={item.id} item={item} /></TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    );
  }
}

export default Home;

Home.propTypes={
    name: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired
}