import React from "react";

export const DeliveryInput = () => {
  return (
    <div className="address">
      <p>Адрес доставки</p>
      <div className="address-inpt">
        <input
          className="outside"
          type="text"
          placeholder="Укажите улицу*"
          required
        />
        <input type="text" placeholder="Номер дома*" required />
        <input
          className="flat"
          type="text"
          placeholder="№ квартиры/офиса"
          required
        />
        <input className="floor" type="text" placeholder="Подъезд" required />
        <input className="floor" type="text" placeholder="Этаж" required />
        <input className="comments" type="text" placeholder="Комментарий" />
      </div>
    </div>
  );
};

export default DeliveryInput;
