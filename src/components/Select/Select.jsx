import React from "react";

import "./Select.scss";

export default function Select({name, options, getDifficulty}) {
  const optionItems = options.map((value, key) =>
  <option key={key} value={value}>{value}</option>);

  return(
    <div className="select">
      <select name="difficulty" id="difficulty-select" onChange={(e) => getDifficulty(e.target.value)}>
          <option value="">{name}</option>
          {optionItems}
      </select>
   </div>
  );
}