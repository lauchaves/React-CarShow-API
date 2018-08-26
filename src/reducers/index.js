import { combineReducers } from 'redux';
import CarsReducers from './reducer_cars';
import ActiveCar from './reducer_active_car';

const rootReducer = combineReducers({
    cars: CarsReducers,
    ActiveCar: ActiveCar
});

export default rootReducer;
