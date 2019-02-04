import React from 'react';
import { connect } from 'react-redux';
import { getCarListAction, getStaticDataAction } from '../../actions/carListActions';
import { ICarListProps, ICarListState } from './CarList';
import './CarList.scss';
import CarListSection from './CarListSection';
import FilterSection from './FilterSection';
class CarListContainer extends React.Component<ICarListProps, ICarListState> {
  constructor(props: ICarListProps) {
    super(props);
    this.state = {
      color: '',
      manufacturer: '',
      page: 1,
      sort: '',
    };
  }

  public componentDidMount() {
    const { getStaticData } = this.props;
    getStaticData();
    this.fetchCarList();
  }

  public fetchCarList = () => {
    const { manufacturer, color, page, sort } = this.state;
    const { getCarList } = this.props;
    getCarList(color, manufacturer, page, sort);
  };

  public applyFilter = () => {
    const state = this.state;
    this.setState(
      {
        ...state,
        page: 1,
      },
      () => {
        this.fetchCarList();
      },
    );
  };
  public changePageNo = (nextPageNo: number) => {
    const state = this.state;
    this.setState(
      {
        ...state,
        page: nextPageNo,
      },
      () => {
        this.fetchCarList();
      },
    );
  };

  public handleDropDownChange = (dropDownName: string, value: string) => {
    const state = this.state;
    this.setState(
      {
        ...state,
        [dropDownName]: value,
      },
      () => {
        if (dropDownName === 'sort') {
          this.fetchCarList();
        }
      },
    );
  };

  public render() {
    const {
      cars,
      colors,
      error,
      loading,
      manufacturers,
      sortList,
      staticDataLoading,
      staticDataError,
      totalPageCount,
    } = this.props;
    const { color, manufacturer, page, sort } = this.state;
    return (
      <div className="container">
        <FilterSection
          staticDataLoading={staticDataLoading}
          staticDataError={staticDataError}
          color={color}
          applyFilter={this.applyFilter}
          handleDropDownChange={this.handleDropDownChange}
          colors={colors}
          manufacturer={manufacturer}
          manufacturers={manufacturers}
        />
        <CarListSection
          loading={loading}
          error={error}
          page={page}
          totalPageCount={totalPageCount}
          sort={sort}
          sortList={sortList}
          handleDropDownChange={this.handleDropDownChange}
          cars={cars}
          changePageNo={this.changePageNo}
        />
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    cars: state.carListReducer.data ? state.carListReducer.data.cars : [],
    colors: state.carListReducer.staticData
      ? [
          {
            label: 'All car colors',
            value: '',
          },
          ...state.carListReducer.staticData.colors,
        ]
      : [],
    error: state.carListReducer.error,
    loading: state.carListReducer.loading,
    manufacturers: state.carListReducer.staticData
      ? [
          {
            label: 'All manufacturers',
            value: '',
          },
          ...state.carListReducer.staticData.manufacturers,
        ]
      : [],
    sortList: [
      {
        label: 'None',
        value: '',
      },
      {
        label: 'Mileage Ascending',
        value: 'asc',
      },
      {
        label: 'Mileage Descending',
        value: 'des',
      },
    ],
    staticDataError: state.carListReducer.staticDataError,
    staticDataLoading: state.carListReducer.staticDataLoading,
    totalPageCount: state.carListReducer.data ? state.carListReducer.data.totalPageCount : 0,
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  getCarList: (color: any, manufacturer: any, page: any, sort: any) => {
    dispatch(getCarListAction(color, manufacturer, page, sort));
  },
  getStaticData: () => {
    dispatch(getStaticDataAction());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CarListContainer);
