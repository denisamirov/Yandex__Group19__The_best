"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Styles from "./Header.module.css";
import { Overlay } from "../Overlay/Overlay";
import { Popup } from "../Popup/Popup";
import { AuthForm } from "../AuthForm/AuthForm";
import { usePathname } from "next/navigation";
import { endpoints } from "../../api/config";
import { getMe, removeJWT, getJWT, isResponseOk } from "../../api/api-utils";
export const Header = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [isPopUpOpened, setIsPopUpOpened] = useState(false);

  const openPopup = () => {
    setIsPopUpOpened(true);
  };
  const closePopup = () => {
    setIsPopUpOpened(false);
  };

  const pathname = usePathname();

  const handleLogout = () => {
    setIsAuthorized(false);
  };

  useEffect(() => {
    const handleAuthorized = async (jwt) => {
      const userData = await getMe(endpoints.me, jwt);

      if (isResponseOk(userData)) {
        setIsAuthorized(true);
      } else {
        setIsAuthorized(false);
        removeJWT();
      }
    };


    const jwt = getJWT();
    if (jwt) {
      handleAuthorized(jwt);
    }
  }, []);
  return (
    <header className={Styles["header"]}>
      <Link href="/" className={Styles["logo"]}>
        <img
          className={Styles["logo__image"]}
          src="/images/logo.svg"
          alt="Логотип Pindie"
        />
      </Link>
      <nav className={Styles["menu"]}>
        <ul className={Styles["menu__list"]}>
          <li className={Styles["menu__item"]}>
            <Link
              href="/new"
              className={`${Styles["menu__link"]} ${
                pathname === "/new" ? Styles["menu__link_active"] : ""
              }`}
            >
              Новинки
            </Link>
          </li>
          <li className={Styles["menu__item"]}>
            <Link
              href="/popular"
              className={`${Styles["menu__link"]} ${
                pathname === "/popular" ? Styles["menu__link_active"] : ""
              }`}
            >
              Популярные
            </Link>
          </li>
          <li className={Styles["menu__item"]}>
            <Link
              href="/shooter"
              className={`${Styles["menu__link"]} ${
                pathname === "/shooter" ? Styles["menu__link_active"] : ""
              }`}
            >
              Шутеры
            </Link>
          </li>
          <li className={Styles["menu__item"]}>
            <Link
              href="/runner"
              className={`${Styles["menu__link"]} ${
                pathname === "/runner" ? Styles["menu__link_active"] : ""
              }`}
            >
              Ранеры
            </Link>
          </li>
          <li className={Styles["menu__item"]}>
            <Link
              href="/pixel-games"
              className={`${Styles["menu__link"]} ${
                pathname === "/pixel-games" ? Styles["menu__link_active"] : ""
              }`}
            >
              Пиксельные
            </Link>
          </li>
          <li className={Styles["menu__item"]}>
            <Link
              href="/tds"
              className={`${Styles["menu__link"]} ${
                pathname === "/tds" ? Styles["menu__link_active"] : ""
              }`}
            >
              TDS
            </Link>
          </li>
        </ul>
        <div className={Styles["auth"]}>
          {isAuthorized ? (
            <button className={Styles["auth__button"]} onClick={handleLogout}>
              Выйти
            </button>
          ) : (
            <button className={Styles["auth__button"]} onClick={openPopup}>
              Войти
            </button>
          )}
        </div>
      </nav>
      <Overlay isOpened={isPopUpOpened} close={closePopup} />
      <Popup isOpened={isPopUpOpened} close={closePopup}>
        <AuthForm close={closePopup} setAuth={setIsAuthorized} />
      </Popup>
    </header>
  );
};
