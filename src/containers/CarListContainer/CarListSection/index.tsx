import React from 'react';
import Card from '../../../components/Card';
import DropDown from '../../../components/DropDown';
import LoaderCard from '../../../components/LoaderCard';
import Paginator from '../../../components/Paginator';
import { IListProps } from './CarListSection';

const CarListSection: React.FunctionComponent<IListProps> = (props: IListProps) => {
  const { loading, error, page, totalPageCount, sort, sortList, handleDropDownChange, cars, changePageNo } = props;
  return (
    <div className="list-container">
      {!loading && !error && (
        <div className="top-section">
          <div className="top-section-left">
            <div className="heading2">Available cars</div>
            <div className="regular1">{`Showing ${page * 10} of ${totalPageCount * 10} cars`}</div>
          </div>
          <div className="top-section-right">
            <DropDown
              label="Sort by"
              dropDownName="sort"
              selectedValue={sort}
              onChange={handleDropDownChange}
              list={sortList}
            />
          </div>
        </div>
      )}

      {error && <div className="heading2">{`Error - ${error} occured`}</div>}

      <div className="card-container">
        {cars &&
          cars.map((car: any, index: number) => {
            return <Card data={car} key={index} />;
          })}
        {loading && <LoaderCard />}
      </div>

      {!loading && !error && <Paginator changePageNo={changePageNo} currentPage={page} totalPages={totalPageCount} />}
    </div>
  );
};

export default CarListSection;
