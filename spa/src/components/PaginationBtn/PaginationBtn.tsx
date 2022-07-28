import React from "react";
import "./paginationbtn.scss";

interface PaginationBtnProps {
  name: string;
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

function PaginationBtn(props: PaginationBtnProps) {
  return (
    <button type="button" className="pagination btn" onClick={props.onClick}>
      {props.name}
    </button>
  );
}

export default PaginationBtn;
