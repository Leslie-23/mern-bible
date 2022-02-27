import { useState } from "react";

export default function DropChevron({ open }) {
  return (
    <svg
      viewBox="0 0 6 4"
      fill="#00FFDA"
      height={20}
      className={`${open ? "" : "transform rotate-180"}`}
    >
      <path d="M 0 1 l 1 -1 2 2 2 -2 1 1 -3 3 z" />
    </svg>
  );
}
