/**
 * This file is an example why we cannot index as a key
 * Don't repeat that, this is to illustrate dangers coming from it.
 * Instead, look into file "ListStableKeys.js"
 */

import React, { useState } from "react";

const initialListUnstable = ["Learn React", "Learn Redux", "Understand lists"];

export const ListNoKeys = () => {
  const [list, setList] = useState(initialListUnstable);

  const handleClick = () => {
    const reversedList = list.slice().reverse();
    setList(reversedList);
  };

  return (
    <section className="component">
      <h5>List with no keys. Don't do it like this.</h5>
      <p>
        Check first item, click the button "reverse list" and observe what
        happens in the UI
      </p>
      <ul>
        {list.map((item) => (
          <li>
            <label>
              <input type="checkbox" />
              {item}
            </label>
          </li>
        ))}
      </ul>

      <button type="button" onClick={handleClick}>
        Reverse List
      </button>
    </section>
  );
};
