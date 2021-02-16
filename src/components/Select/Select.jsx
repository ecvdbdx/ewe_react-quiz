import React from "react";

import "./Select.scss";

export default function Select({name, options}) {
  const optionItems = options.map((value, key) =>
  <option key={key} value={key}>{value}</option>);

  return(
    <div className="select">
      <select name="difficulty" id="difficulty-select">
          <option value="">{name}</option>
          {optionItems}
      </select>
   </div>
  );
}