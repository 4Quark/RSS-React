import router, { useRouter } from 'next/router';
import { useAppDispatch, useAppSelector } from '../services/store/store';
import { pagesSlice } from '../services/store/paginationReducer';
import React from 'react';

type myProps = {
  page: number;
  totalPage: number;
};

function Pagination(p: myProps) {
  const dispatch = useAppDispatch();
  const itemsPerPage = useAppSelector((state) => state.pages.itemsPerPage);
  const { updateItemsPerPage } = pagesSlice.actions;
  const { query } = useRouter();

  const nextPage = function () {
    let newPage = query.page ? (+query.page + 1).toString() : '1';
    if (query.query) {
      const newQuery = '?query=' + query.query.toString().trim();
      newPage = newPage + newQuery;
    }
    router.push(newPage);
  };
  const prevPage = function () {
    let newPage = query.page ? (+query.page - 1).toString() : '1';
    if (query.query) {
      const newQuery = '?query=' + query.query.toString().trim();
      newPage = newPage + newQuery;
    }
    router.push(newPage);
  };

  return (
    <div className="pagination">
      <button disabled={p.page === 1} onClick={prevPage}>
        ←
      </button>
      <span>
        Page {p.page} from {p.totalPage}
      </span>
      <button disabled={p.page === p.totalPage} onClick={nextPage}>
        →
      </button>
      <div className="items_select">
        <label>
          Items per page:
          <select
            name="selectItemPP"
            value={itemsPerPage}
            onChange={(e) => dispatch(updateItemsPerPage(+e.target.value))}
          >
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
        </label>
      </div>
    </div>
  );
}

export default Pagination;
