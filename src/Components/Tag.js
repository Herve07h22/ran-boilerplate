import React from "react";

const Tag = ({ texte }) => (
  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
    {texte}
  </span>
);

export default Tag;
