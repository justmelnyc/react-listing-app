import React from 'react';
import Card from '../../../components/Card';
import LoaderCard from '../../../components/LoaderCard';
import Paginator from '../../../components/Paginator';
import { ICar } from '../../../types/cars';
import { IListProps } from './CarListSection';
import TopSection from './TopSection';
const CarListSection: React.FunctionComponent<IListProps> = (props: IListProps) => {
  const { loading, error, page, totalPageCount, sort, sortList, handleDropDownChange, cars, changePageNo } = props;
  return (
    <div className="list-container">
      {!loading && !error && (
        <TopSection
          page={page}
          totalPageCount={totalPageCount}
          sort={sort}
          sortList={sortList}
          handleDropDownChange={handleDropDownChange}
        />
      )}

      {error && <div className="heading2">{`Error - ${error} occured`}</div>}

      <div className="card-container">
        {cars &&
          cars.map((car: ICar, index: number) => {
            return <Card data={car} key={index} />;
          })}
        {loading && (
          <div data-testid="loader">
            <LoaderCard />
          </div>
        )}
      </div>

      {!loading && !error && <Paginator changePageNo={changePageNo} currentPage={page} totalPages={totalPageCount} />}
    </div>
  );
};

export default CarListSection;
