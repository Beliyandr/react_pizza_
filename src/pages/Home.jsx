import React from "react";

import { Categories } from "../components/Categories/Categories";
import { Sort } from "../components/Sort/Sort";
import { PizzaBlock } from "../components/PizzaBlock/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";

export const Home = () => {
  const url = "https://62a1a4c7cc8c0118ef5074aa.mockapi.io/items";

  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
      </div>
    </>
  );
};
