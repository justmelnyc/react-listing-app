import React from 'react';
import Button from '../../../components/Button';
import DropDown from '../../../components/DropDown';
import { IFilterProps } from './FilterSection';

const FilterSection: React.FunctionComponent<IFilterProps> = (props: IFilterProps) => {
  const {
    staticDataLoading,
    staticDataError,
    color,
    applyFilter,
    handleDropDownChange,
    colors,
    manufacturer,
    manufacturers,
  } = props;
  return (
    <div className="filter-container">
      {!staticDataLoading && !staticDataError && (
        <div>
          <DropDown
            label="Color"
            dropDownName="color"
            selectedValue={color}
            onChange={handleDropDownChange}
            list={colors}
          />
          <DropDown
            label="Manufacturer"
            dropDownName="manufacturer"
            selectedValue={manufacturer}
            onChange={handleDropDownChange}
            list={manufacturers}
          />
          <Button label="Filter" onClick={applyFilter} />
        </div>
      )}
      {staticDataLoading && <div className="loader" />}
      {staticDataError && <h4>{`Error - ${staticDataError} occured`}</h4>}
    </div>
  );
};

export default FilterSection;
