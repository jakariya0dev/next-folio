"use client";

import { useState } from "react";

export default function PhotoSizeSelector({ src }) {
  const [selected, setSelected] = useState(src.large);

  function handleDownload() {
    window.open(selected, "_blank");
  }
  

  return (
    <div className="mt-10">
      <select
        className="select select-bordered w-full"
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
      >
        <option value={src.small}>Small</option>
        <option value={src.medium}>Medium</option>
        <option value={src.large}>Large</option>
        <option value={src.original}>Original</option>
      </select>

      <button
        onClick={handleDownload}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary mt-4"
      >
        Download
      </button>
    </div>
  );
}
