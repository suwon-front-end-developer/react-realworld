import React from 'react';

function Pagination() {
  return (
    <nav>
      <ul className="pagination">
        <li className="page-item active">
          <a className="page-link">{1}</a>
        </li>

        {[0, 1, 2, 3, 4, 5, 6].map((el, i) => (
          <li className="page-item" key={i}>
            <a className="page-link">{el + 2}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Pagination;
