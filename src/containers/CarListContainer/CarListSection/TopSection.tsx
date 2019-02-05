import React from 'react';
import DropDown from '../../../components/DropDown';
import { TextConstants } from '../../../constants/textConstants';
import { ITopSectionProps } from './CarListSection';

const TopSection: React.FunctionComponent<ITopSectionProps> = React.memo((props: ITopSectionProps) => {
  const { page, totalPageCount, sort, sortList, handleDropDownChange } = props;
  return (
    <div className="top-section">
      <div className="top-section-left">
        <div className="heading2">{TextConstants.listHeading}</div>
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
  );
});

export default TopSection;
