import style from './SubmitOrder.module.css';
import { useRef, useState } from 'react';

const isInputValid = (inputValue) => inputValue.trim() !== '';

const SubmitOreder = (props) => {
  const [formValidity, setFormValidity] = useState({
    name: true,
    city: true,
    address: true,
  });

  const nameInputRef = useRef();
  const cityInputRef = useRef();
  const addressInputRef = useRef();

  const confirmOrderHandler = (e) => {
    e.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredCite = cityInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;

    const isEnteredNameValid = isInputValid(enteredName);
    const isEnteredCityValid = isInputValid(enteredCite);
    const isEnteredAddressValid = isInputValid(enteredAddress);

    setFormValidity({
      name: isEnteredNameValid,
      city: isEnteredCityValid,
      address: isEnteredAddressValid,
    });

    const isFormValid =
      isEnteredNameValid && isEnteredCityValid && isEnteredAddressValid;

    if (!isFormValid) {
      return;
    }
  };

  const nameInputClasses = `${style.control} ${
    formValidity.name ? '' : style.invalid
  }`;
  const cityInputClasses = `${style.control} ${
    formValidity.city ? '' : style.invalid
  }`;
  const addressInputClasses = `${style.control} ${
    formValidity.address ? '' : style.invalid
  }`;

  return (
    <form className={style.form} onSubmit={confirmOrderHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Имя</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formValidity.name && <p>Введите имя</p>}
      </div>
      <div className={cityInputClasses}>
        <label htmlFor="city">Город</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!formValidity.city && <p>Введите название города</p>}
      </div>
      <div className={addressInputClasses}>
        <label htmlFor="address">Адрес</label>
        <input type="text" id="address" ref={addressInputRef} />
        {!formValidity.address && <p>Введите адрес</p>}
      </div>
      <div className={style.actions}>
        <button className={style.submit}>Подтвердите Заказ</button>
        <button type="button" onClick={props.onCancel}>
          Отмена
        </button>
      </div>
    </form>
  );
};

export default SubmitOreder;
