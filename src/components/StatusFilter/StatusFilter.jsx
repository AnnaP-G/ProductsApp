import { useDispatch, useSelector } from "react-redux";
import css from "./StatusFilter.module.css";
import { setStatusFilter } from "../redux/filters/slice.js";
import { statusFilters } from "../redux/filters/constants.js";
import { useEffect } from "react";

export const StatusFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filters.status);

  useEffect(() => {
    const savedFilter = localStorage.getItem("statusFilter");
    if (savedFilter) {
      dispatch(setStatusFilter(savedFilter));
    }
  }, [dispatch]);

  const handleFilterChange = (status) => {
    dispatch(setStatusFilter(status));
    localStorage.setItem("statusFilter", status);
  };

  return (
    <div className={css.filterContainer}>
      <label className={css.filterLabel}>
        <input
          type="checkbox"
          checked={filter === statusFilters.all}
          onChange={() => handleFilterChange(statusFilters.all)}
          className={css.filterCheckbox}
        />
        All
      </label>

      <label className={css.filterLabel}>
        <input
          type="checkbox"
          checked={filter === statusFilters.published}
          onChange={() => handleFilterChange(statusFilters.published)}
          className={css.filterCheckbox}
        />
        Published
      </label>

      <label className={css.filterLabel}>
        <input
          type="checkbox"
          checked={filter === statusFilters.unpublished}
          onChange={() => handleFilterChange(statusFilters.unpublished)}
          className={css.filterCheckbox}
        />
        Unpublished
      </label>
    </div>
  );
};
