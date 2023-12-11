import { useNavigate } from 'react-router-dom';

type PaginationProps = {
  page: number;
  totalPage: number;
};

export function Pagination(p: PaginationProps) {
  const navigate = useNavigate();
  const nextPage = () => navigate(`/search/${p.page + 1}`);
  const prevPage = () => navigate(`/search/${p.page - 1}`);

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
    </div>
  );
}
