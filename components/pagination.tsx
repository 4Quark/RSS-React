import { useAppDispatch, useAppSelector } from '../services/store/store';
import { pagesSlice } from '../services/store/paginationReducer';
import React from 'react';
import router, { useRouter } from 'next/router';

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
    const newPage = query.page ? (+query.page + 1).toString() : '1';
    router.push(newPage);
  };
  const prevPage = function () {
    const newPage = query.page ? (+query.page - 1).toString() : '1';
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
