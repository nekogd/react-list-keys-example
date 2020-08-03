import React, { useState } from "react";

const initialList = [
  { id: "react", name: "Learn React" },
  { id: "redux", name: "Learn Redux" },
  { id: "lists", name: "Understand Lists" },
];

export const ListStableKeys = () => {
  const [list, setList] = useState(initialList);

  const handleClick = () => {
    const reversedList = list.slice().reverse();
    setList(reversedList);
  };

  return (
    <section className="component">
      <h5>Stable list example</h5>
      <p>The list has unique, stable id and React knows how to work with it.</p>
      <ul>
        {list.map((item) => (
          <li key={item.id}>
            <label>
              <input type="checkbox" />
              {item.name}
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
