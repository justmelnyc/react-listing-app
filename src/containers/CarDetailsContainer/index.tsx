import React from 'react';
import { connect } from 'react-redux';
import { getCarDetailsAction } from '../../actions/carDetailsActions';
import Button from '../../components/Button';
import { ICarDetailsProps, ICarDetailsState } from './CarDetails';
import './CarDetails.scss';

class CarDetailsContainer extends React.Component<ICarDetailsProps, ICarDetailsState> {
  constructor(props: ICarDetailsProps) {
    super(props);
    this.state = {
      favourite: false,
    };
  }
  public componentDidMount() {
    const { stockNumber } = this.props.match.params;
    const { getCarDetails } = this.props;
    getCarDetails(stockNumber);
    let favArray: string[] = [];
    if (localStorage.getItem('auto1_favourite_cars')) {
      const favCars = localStorage.getItem('auto1_favourite_cars') || '';
      favArray = JSON.parse(favCars);
    }
    if (favArray.indexOf(stockNumber) > -1) {
      this.setState({
        favourite: true,
      });
    }
  }
  public saveFavourite = () => {
    const { stockNumber } = this.props.match.params;
    let favArray: any = [];
    if (localStorage.getItem('auto1_favourite_cars')) {
      const favCars = localStorage.getItem('auto1_favourite_cars') || '';
      favArray = JSON.parse(favCars);
    }
    if (favArray.indexOf(stockNumber) > -1) {
      favArray.splice(favArray.indexOf(stockNumber), 1);
      localStorage.setItem('auto1_favourite_cars', JSON.stringify(favArray));
      this.setState({
        favourite: false,
      });
    } else {
      favArray.push(stockNumber);
      localStorage.setItem('auto1_favourite_cars', JSON.stringify(favArray));
      this.setState({
        favourite: true,
      });
    }
  };

  public render() {
    const { carDetails, loading, error } = this.props;
    const { favourite } = this.state;
    return (
      <div className="details-container">
        {carDetails && (
          <div>
            <div className="image-container">
              <img src={carDetails.pictureUrl} alt="pl" className="image-fullwidth" />
            </div>
            <div className="details-wrapper">
              <div className="details-wrapper-left">
                <div className="title">{carDetails.manufacturerName + ' ' + carDetails.modelName}</div>
                <div className="specification">{`Stock # ${carDetails.stockNumber} - ${carDetails.mileage.number} ${
                  carDetails.mileage.unit
                } - ${carDetails.fuelType} - ${carDetails.color}`}</div>
                <div className="description">
                  This car is currently available and can be delivered as soon as tomorrow morning. Please be aware that
                  delivery times shown in this page are not definitive and may change due to bad weather conditions.
                </div>
              </div>
              <div className="details-wrapper-right">
                <div className="favourite-item">
                  If you like this car, click the button and save it in your collection of favourite items.
                </div>
                <Button label={favourite ? 'Saved' : 'Save'} isPressed={favourite} onClick={this.saveFavourite} />
              </div>
            </div>
          </div>
        )}
        {loading && (
          <div className="loader-container">
            <div className="loader" />
          </div>
        )}
        {error && <div>Error - {error} occured</div>}
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    carDetails: state.carDetailsReducer.data ? state.carDetailsReducer.data.car : null,
    error: state.carDetailsReducer.error,
    loading: state.carDetailsReducer.loading,
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  getCarDetails: (stockNumber: number) => {
    dispatch(getCarDetailsAction(stockNumber));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CarDetailsContainer);
