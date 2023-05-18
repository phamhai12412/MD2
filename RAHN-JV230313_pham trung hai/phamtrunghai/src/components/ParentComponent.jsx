import React, { useState } from "react";
import PhanHeader from "./PhanHeader";
import PhanSeach from "./PhanSeach";
import Listnhan from "./Listnhan";

function ParentComponent() {
  const [list, setlistnhanxet] = useState([{ id: 1, noidung: "sbdgjsad" }]);
  const taomoi = (tao) => {
    setlistnhanxet([...list, tao]);
  };
  const xoa = (i) => {
    const xoalist = [...list];
    xoalist.splice(i, 1);
    setlistnhanxet(xoalist);
  };
  return (
    <div className="container">
      <PhanHeader />
      <PhanSeach />
      <Listnhan list={list} taomoi={taomoi} xoa={xoa} />
    </div>
  );
}

export default ParentComponent;
