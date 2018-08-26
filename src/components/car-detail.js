import React from 'react';
import { Image, Jumbotron, Table } from 'react-bootstrap';

export const CarDetail = ({ car }) => {
    if(!car) return <div><h4>Select a car to get started.</h4></div>
    const carImg = car.picture;
    return (
      <Jumbotron>
        <h3>Details for: {`${car.year} ${car.brand} ${car.model}` }</h3>
        
        <Table className="striped" responsive>
          <tbody>
            <tr>
              <td><Image src={`${carImg}`} rounded responsive/></td>
            </tr>
            <tr>
              <td>Brand:</td>
              <td>{car.brand}</td>
            </tr>
            <tr>
              <td>Engine:</td>
              <td>{car.engine}</td>
            </tr>
            <tr>
              <td>Exterior Color:</td>
              <td>{car.exteriorColor}</td>
            </tr>
            <tr>
              <td>Interior Color:</td>
              <td>{car.interiorColor}</td>
            </tr>
            <tr>
              <td>Transmission:</td>
              <td>{car.transmission}</td>
            </tr>
          </tbody>
        </Table>
      </Jumbotron>
    )
  }