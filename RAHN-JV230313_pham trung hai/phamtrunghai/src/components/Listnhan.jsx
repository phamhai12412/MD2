import React from "react";

import Phancommet from "./Phancommet";

function Listnhan({ list, taomoi, xoa }) {
  let text = "";

  const layinput = (e) => {
    text = e.target.value;
  };
  const taocomment = () => {
    taomoi({ id: Math.floor(Math.random()) * 100, noidung: text });
    text = "";
  };
  return (
    <div className="full">
      {/* <div className="comment">
        <input className="inputtext" placeholder="Type review here..."></input>
        <p className="gui">xoa</p>
      </div>
      <div className="comment">
        <input className="inputtext" placeholder="Type review here..."></input>
        <p className="gui">xoa</p>
      </div>{" "}
      <div className="comment">
        <input className="inputtext" placeholder="Type review here..."></input>
        <p className="gui">xoa</p>
      </div> */}
      {list.map((e, i) => (
        <Phancommet xoa={xoa} e={e} i={i} />
      ))}
      <div className="comment">
        <input
          defaultValue={text}
          onChange={layinput}
          className="inputtext"
          placeholder="Type review here..."
        ></input>
        <p onClick={taocomment} className="gui">
          Publish✔️
        </p>
      </div>
    </div>
  );
}

export default Listnhan;
