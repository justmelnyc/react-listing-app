import React from 'react';
import { connect } from 'react-redux';
import { getCarListAction, getStaticDataAction } from '../../actions/carListActions';
import Button from '../../components/Button';
import Card from '../../components/Card';
import DropDown from '../../components/DropDown';
import LoaderCard from '../../components/LoaderCard';
import Paginator from '../../components/Paginator';
import { ICarListProps, ICarListState } from './CarList';
import './CarList.scss';
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
        <div className="filter-container">
          {!staticDataLoading && !staticDataError && (
            <div>
              <DropDown
                label="Color"
                dropDownName="color"
                selectedValue={color}
                onChange={this.handleDropDownChange}
                list={colors}
              />
              <DropDown
                label="Manufacturer"
                dropDownName="manufacturer"
                selectedValue={manufacturer}
                onChange={this.handleDropDownChange}
                list={manufacturers}
              />
              <Button label="Filter" onClick={this.applyFilter} />
            </div>
          )}
          {staticDataLoading && <div className="loader" />}
          {staticDataError && <h4>Error - {staticDataError} occured</h4>}
        </div>
        <div className="list-container">
          {!loading && !error && (
            <div className="top-section">
              <div className="top-section-left">
                <div className="heading2">Available cars</div>
                <div className="regular1">
                  Showing {page * 10} of {totalPageCount * 10} cars
                </div>
              </div>
              <div className="top-section-right">
                <DropDown
                  label="Sort by"
                  dropDownName="sort"
                  selectedValue={sort}
                  onChange={this.handleDropDownChange}
                  list={sortList}
                />
              </div>
            </div>
          )}
          {error && <div className="heading2">Error - {error} occured</div>}
          <div className="card-container">
            {cars &&
              cars.map((car: any, index: number) => {
                return <Card data={car} key={index} />;
              })}
            {loading && <LoaderCard />}
          </div>
          {!loading && !error && (
            <Paginator changePageNo={this.changePageNo} currentPage={page} totalPages={totalPageCount} />
          )}
        </div>
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
