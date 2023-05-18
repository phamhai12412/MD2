import React from "react";

function Phancommet({ e, i, xoa }) {
  const xoaxoa = (i) => {
    xoa(i);
  };
  return (
    <div key={i} className="comment">
      <p className="noidungtext"> {e.noidung}</p>
      <p onClick={() => xoaxoa(i)} className="noidung">
        xoa
      </p>
    </div>
  );
}

export default Phancommet;
