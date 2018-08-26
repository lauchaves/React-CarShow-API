import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Navbar, FormGroup, FormControl, Glyphicon } from 'react-bootstrap';
import CarList from './car-list';
import { CarDetail } from './../components/car-detail';

class MainMenu extends Component {

  constructor(props) {
    super(props);
    this.state = { 
        searchCarTxt: '', 
        cars: this.props.cars 
    };
  }

  onInputChange = searchCarTxt => {
    this.setState({ searchCarTxt });
    this.carSearch(searchCarTxt);
  };

  carSearch = searchCarTxt => {
    const carList = this.props.cars.filter((car) => car.brand.toLowerCase().includes(searchCarTxt.toLowerCase()));
    this.setState({ cars: carList });
  };

  render() {
    return( 
    <div>
        <Navbar>
        <Navbar.Header>
            <Navbar.Brand>
            <a href="">Car Show</a>
            </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
        <Navbar.Form pullRight> 
            <FormGroup>
                <FormControl type="text" placeholder="Search" value={this.state.searchCarTxt} onChange = {event => this.onInputChange(event.target.value)} />
            </FormGroup>{' '}
            <FormGroup />
        </Navbar.Form>
        </Navbar.Collapse>
        </Navbar>
        <CarList cars={this.state.cars}/>
        <CarDetail car={this.props.car}/>
    </div>

    )
  }
}

 const mapStateToProps = state => {
  return {
    cars: state.cars.sort(((carA, carB) => carA.brand > carB.brand)),
    car: state.ActiveCar
  };
}

export default connect (mapStateToProps)(MainMenu);


