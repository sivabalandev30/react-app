import React, { useEffect, useRef, useState } from "react";

function ArrayHook() {
  const [items, setItems] = useState([]);
  const inputRef = useRef(null);
  useEffect(() => {
    document.title = items.length;
    return () => {
      if (items.length === 4) {
        alert("enough I am cleaning up the list");
        setItems([]);
      }
    };
  }, [items.length]);

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  const addItem = () => {
    setItems([
      ...items,
      {
        id: items.length + 1,
        value: `Item ${items.length + 1}`,
      },
    ]);
  };
  return (
    <div>
      <button onClick={addItem}> Add</button>
      {items.map((data) => (
        <p key={data.id}>{data.value}</p>
      ))}

      <input ref={inputRef} placeholder="autofocus" />
    </div>
  );
}

export default ArrayHook;
