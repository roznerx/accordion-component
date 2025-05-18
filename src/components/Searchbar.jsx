import MagnifierIcon from "../utils/MagnifierIcon";
import "./Searchbar.css";

export default function Searchbar() {
  return (
    <div className="searchbar-wrapper">
      <div className="searchbar-icon">
        <MagnifierIcon />
      </div>
      <input 
        className="searchbar" 
        type="text" 
        placeholder="Search or jump too..."
      />
      <div className="searchbar-btn">/</div>
    </div>
  );
};
