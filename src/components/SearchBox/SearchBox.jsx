import { useDispatch, useSelector } from "react-redux";

import css from "./SearchBox.module.css";
import { selectNameFilter } from "../redux/filters/selectors.js";
import { setNameFilter } from "../redux/filters/slice.js";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter); // Отримання значення фільтра з Redux store

  const onChangeFilter = (event) => {
    const value = event.target.value;
    dispatch(setNameFilter(value)); // Відправка зміни фільтра в Redux store
  };

  return (
    <input
      className={css.searchBoxInput}
      type="text"
      value={filter}
      onChange={onChangeFilter}
      placeholder="Find product"
    />
  );
};

export default SearchBox;
