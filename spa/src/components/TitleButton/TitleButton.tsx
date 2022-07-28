import React from "react";
import "./titlebutton.scss";

interface TitleProps {
  name: string;
  onClick: () => void;
}

function TitleButton(props: TitleProps) {
  return (
    <div className="title__container" onClick={props.onClick}>
      <strong className="title__text">{props.name}</strong>
    </div>
  );
}

export default TitleButton;
