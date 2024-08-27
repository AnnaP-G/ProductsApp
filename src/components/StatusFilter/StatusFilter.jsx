import { useDispatch, useSelector } from "react-redux";

import css from "./StatusFilter.module.css";
import { setStatusFilter } from "../redux/filters/slice.js";
import { statusFilters } from "../redux/filters/constants.js";

export const StatusFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filters.status);

  const handleFilterChange = (status) => {
    dispatch(setStatusFilter(status));
  };

  return (
    <div className={css.filterContainer}>
      <button
        type="button"
        className={`${css.filterButton} ${
          filter === statusFilters.all ? css.active : ""
        }`}
        onClick={() => handleFilterChange(statusFilters.all)}
      >
        All
      </button>
      <button
        type="button"
        className={`${css.filterButton} ${
          filter === statusFilters.published ? css.active : ""
        }`}
        onClick={() => handleFilterChange(statusFilters.published)}
      >
        Published
      </button>
      <button
        type="button"
        className={`${css.filterButton} ${
          filter === statusFilters.unpublished ? css.active : ""
        }`}
        onClick={() => handleFilterChange(statusFilters.unpublished)}
      >
        Unpublished
      </button>
    </div>
  );
};
