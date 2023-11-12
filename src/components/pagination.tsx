import { useNavigate } from 'react-router-dom';

type myProps = {
  page: number;
  totalPage: number;
};

function Pagination(p: myProps) {
  const navigate = useNavigate();
  const nextPage = function () {
    navigate('/search/' + (p.page + 1));
  };
  const prevPage = function () {
    navigate('/search/' + (p.page - 1));
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
    </div>
  );
}

export default Pagination;
