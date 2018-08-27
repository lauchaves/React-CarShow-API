import React, {Component} from 'react'
import { connect } from 'react-redux'
import {selectCar} from '../actions';
import {bindActionCreators} from 'redux';
import { ListGroup, ListGroupItem, Image } from 'react-bootstrap';

class CarList extends Component {
  renderList(){
    
    return this.props.cars.map((car) => {

      return (
        <ListGroupItem 
          key={car.brand} 
          onClick={() => this.props.selectCar(car)}
          header= {`${car.year} ${car.brand} ${car.model}` } >
          Price: ${car.price}
          <Image src={`${car.picture}`} width="200" height="200" thumbnail/>
        </ListGroupItem>
      );
    });
  }

  render() {
    return(
      <ListGroup className="list-group col-sm-4">
        {this.renderList()}
      </ListGroup>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators ({ selectCar: selectCar }, dispatch);
}

export default connect (null, mapDispatchToProps)(CarList);
