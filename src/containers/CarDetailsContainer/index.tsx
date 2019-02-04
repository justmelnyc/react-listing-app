import React from 'react';
import Button from '../../components/Button';
import { images } from '../../utils/imageImports';
import './CarDetails.scss';

class CarDetailsContainer extends React.Component {
  public render() {
    return (
      <div className="details-container">
        <div>
          <div className="image-container">
            <img src={images.logo} alt="pl" className="image-fullwidth" />
          </div>
          <div className="details-wrapper">
            <div className="details-wrapper-left">
              <div className="title">Mercedes-Benz Vito</div>
              <div className="specification">Stock # 10056 - 154430 km - Diesel - red</div>
              <div className="description">
                This car is currently available and can be delivered as soon as tomorrow morning. Please be aware that
                delivery times shown in this page are not definitive and may change due to bad weather conditions.
              </div>
            </div>
            <div className="details-wrapper-right">
              <div className="favourite-item">
                If you like this car, click the button and save it in your collection of favourite items.
              </div>
              <Button
                label={'Save'}
                isPressed={false}
                onClick={() => {
                  return;
                }}
              />
            </div>
          </div>
        </div>
        }
      </div>
    );
  }
}

export default CarDetailsContainer;
