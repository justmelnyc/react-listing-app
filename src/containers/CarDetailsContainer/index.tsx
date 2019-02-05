import React from 'react';
import { connect } from 'react-redux';
import { getCarDetailsAction } from '../../actions/carDetailsActions';
import { readFavCar, saveFavCar } from '../../utils/saveToLocalStorage';
import { ICarDetailsProps, ICarDetailsState } from './CarDetails';
import './CarDetails.scss';
import CarSpecifications from './CarSpecifications';
import SaveFavourite from './SaveFavourite';
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
    const favourite = readFavCar(stockNumber);
    this.setState({
      favourite,
    });
  }

  public saveFavourite = () => {
    const { stockNumber } = this.props.match.params;
    const favourite = saveFavCar(stockNumber);
    this.setState({
      favourite,
    });
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
              <CarSpecifications carDetails={carDetails} />
              <SaveFavourite favourite={favourite} saveFavourite={this.saveFavourite} />
            </div>
          </div>
        )}
        {loading && (
          <div className="loader-container">
            <div className="loader" />
          </div>
        )}
        {error && <div>{`Error - ${error} occured`}</div>}
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  const { data, error, loading } = state.carDetailsReducer;
  return {
    carDetails: data ? data.car : null,
    error,
    loading,
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
