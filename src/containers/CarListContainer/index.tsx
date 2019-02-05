import React from 'react';
import { connect } from 'react-redux';
import { getCarListAction, getStaticDataAction } from '../../actions/carListActions';
import { sortListData } from '../../constants/testMockConstants';
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
  const { data, staticData, error, loading, staticDataError, staticDataLoading } = state.carListReducer;
  return {
    cars: data ? data.cars : [],
    colors: staticData
      ? [
          {
            label: 'All car colors',
            value: '',
          },
          ...staticData.colors,
        ]
      : [],
    error,
    loading,
    manufacturers: staticData
      ? [
          {
            label: 'All manufacturers',
            value: '',
          },
          ...staticData.manufacturers,
        ]
      : [],
    sortList: sortListData,
    staticDataError,
    staticDataLoading,
    totalPageCount: data ? data.totalPageCount : 0,
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  getCarList: (color: string, manufacturer: string, page: number, sort: string) => {
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
