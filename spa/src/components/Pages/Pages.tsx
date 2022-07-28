import React, { useContext } from "react";
import "./pages.scss";
import { Pagination } from "react-bootstrap";
import PageContext from "../../context/pageContext";

function Pages(props: {
  totalPosts: number;
  postPerPage: number;
  active: number;
}) {
  const pageNumbers = [];
  const { pages } = useContext(PageContext);
  const paginate = (pageNumber: number) => {
    pages.setPage(pageNumber);
  };
  for (let i = 1; i <= Math.ceil(props.totalPosts / props.postPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Pagination className="pages__container" style={{ height: "30px" }}>
      {pageNumbers.map((number: number) => {
        return (
          <Pagination.Item
            className="pages__item"
            key={number}
            active={props.active === number}
            onClick={() => {
              paginate(number);
            }}
          >
            {number}
          </Pagination.Item>
        );
      })}
    </Pagination>
  );
}

export default Pages;
