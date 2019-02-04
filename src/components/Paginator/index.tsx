import React from 'react';
import { IPaginatorProps } from './Paginator';
import './Paginator.scss';
const Paginator = (props: IPaginatorProps) => {
  const { currentPage, changePageNo, totalPages } = props;
  const calculatePage = (type: string) => {
    switch (type) {
      case 'first':
        changePageNo(1);
        return;
      case 'last':
        changePageNo(totalPages);
        return;
      case 'previous':
        changePageNo(currentPage - 1 > 1 ? currentPage - 1 : 1);
        return;
      case 'next':
        changePageNo(currentPage + 1 <= totalPages ? currentPage + 1 : totalPages);
        return;
      default:
        changePageNo(1);
        return;
    }
  };
  return (
    <div className="paginator-container">
      <span
        className="link"
        onClick={() => {
          calculatePage('first');
        }}
      >
        First
      </span>
      <span
        className="link"
        onClick={() => {
          calculatePage('previous');
        }}
      >
        Previous
      </span>
      <span className="page-no">
        Page {currentPage} of {totalPages}
      </span>
      <span
        className="link"
        onClick={() => {
          calculatePage('next');
        }}
      >
        Next
      </span>
      <span
        className="link"
        onClick={() => {
          calculatePage('last');
        }}
      >
        Last
      </span>
    </div>
  );
};

export default Paginator;
