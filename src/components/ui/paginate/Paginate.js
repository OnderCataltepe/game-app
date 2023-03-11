import React from 'react';
import Pagination from 'rc-pagination';
import { Link } from 'react-router-dom';
import './paginate.scss';
const Paginate = ({ total, query }) => {
  const itemRender = (current, type, element) => {
    if (query && type === 'page') {
      return <Link to={`?q=${query}&page=${current}`}>{current}</Link>;
    }
    if (type === 'page') {
      return <Link to={`?page=${current}`}>{current}</Link>;
    }
    return element;
  };

  return (
    <Pagination
      locale={{
        page: 'page',
        prev_page: 'Prev Page',
        next_page: 'Next Page'
      }}
      pageSize={20}
      total={total}
      itemRender={itemRender}
    />
  );
};

export default Paginate;
