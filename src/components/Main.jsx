import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { setCategoryId } from "../redux/slices/filterSlice";

import Banner from "./main/Banner";
import Menu from "./main/Menu";
import Snacks from "./main/Snacks";
import Contacts from "./main/Contacts";
import Description from "./main/Description";

export const SearchContext = React.createContext();

function Main() {
  const [count, setCount] = React.useState(0);
  const [item, setItems] = React.useState([]);
  const dispatch = useDispatch();

  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id));
  };

  React.useEffect(() => {
    fetch(
      `https://636a511eb10125b78fd775d2.mockapi.io/restoran?category=` + categoryId)
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setItems(arr);
      });
  }, [onChangeCategory]);

  const categoryId = useSelector((state) => state.filter.categoryId);

  return (
    <SearchContext.Provider value={{ count, setCount, item, setItems }}>
      <main>
        <Banner />
        <Menu value={categoryId} onChangeCategory={onChangeCategory} />
        <div className="block-products">
          <Snacks />
          <Description />
        </div>
        <Contacts />
      </main>
    </SearchContext.Provider>
  );
}

export default Main;
