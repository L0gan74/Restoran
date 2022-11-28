import React from "react";

const list = [
  { name: "Все" },
  { name: "Холодные закуски" },
  { name: "Горячик закуски" },
  { name: "Мясные блюда" },
  { name: "Супы" },
  { name: "Рыбные блюда" },
  { name: "Гриль меню" },
  { name: "Фирменные блюда" },
];

function Menu({ value, onChangeCategory }) {
  console.log(value);

  return (
    <section className="menu">
      <div className="container">
        <ul className="menu-choice">
          {list.map((categoryName, i) => (
            <li
              key={i}
              onClick={() => onChangeCategory(i)}
              className={value === i ? "active" : ""}
            >
              {categoryName.name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Menu;
