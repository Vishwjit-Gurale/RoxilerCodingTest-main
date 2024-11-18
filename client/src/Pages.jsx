import React from "react";

const Pages = ({ selectedPages, onChange }) => {
  const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 15, 20, 25, 30];
  console.log(selectedPages);

  return (
    <div>
      Per Page:
      <select value={selectedPages} onChange={onChange}>
        {pages.map((page, index) => (
          <option key={index} value={page}>
            {page}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Pages;
