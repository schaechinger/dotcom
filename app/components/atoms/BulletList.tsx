import React from "react";

type Props = {
  bullets?: string[];
  children?: React.ReactNode[] | string[];
}

const BulletList = ({ bullets, children }: Props) => (
  <ul className="bullet-list">
    { (children || bullets)!.map((text, i) => (
      <li key={i}>{ text }</li>
    )) }
  </ul>
);

export default BulletList;
