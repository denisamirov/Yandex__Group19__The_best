"use client";

import Styles from "./Game.module.css";
import { GameNotFound } from "@/app/components/GameNotFound/GameNotFound";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { endpoints } from "@/app/api/config";
import { getNormalizedGameDataById, isResponseOk } from "@/app/api/api-utils";
import { Preloader } from "@/app/components/Preloader/Preloader";
import { getJWT, getMe, removeJWT } from "@/app/api/api-utils";
import { vote } from "@/app/api/api-utils";
import { checkIfUserVoted } from "@/app/api/api-utils";

export default function GamePage(props) {
  const router = useRouter();
  const [preloaderVisible, setPreloaderVisible] = useState(true);
  const [isAuthorized, setIsAuthorized] = useState(false);  //Забыл назначить состояние
  const [currentUser, setCurrentUser] = useState(null);     //Забыл назначить состояние
  const [game, setGame] = useState(null);
  const [isVoted, setIsVoted] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const game = await getNormalizedGameDataById(
        endpoints.games,
        props.params.id
      );
      isResponseOk(game) ? setGame(game) : setGame(null);
      setPreloaderVisible(false);
    }
    fetchData();
  }, []);

  useEffect(() => {
    const jwt = getJWT();
    if (jwt) {
      getMe(endpoints.me, jwt).then((userData) => {
        if (isResponseOk(userData)) {
          setIsAuthorized(true);
          setCurrentUser(userData);
        } else {
          setIsAuthorized(false);
          removeJWT();  //Неправильно написан метод для удаления JWT
        }
      });
    }
  }, []);

  useEffect(() => {
    if (currentUser && game) {
      setIsVoted(checkIfUserVoted(game, currentUser.id));
    }
  }, [currentUser]);  //Делаем проверку проголосовал ли пользователь

  const handleVote = async () => {
    const jwt = getJWT();
    let usersIdArray = game.users.length
      ? game.users.map((user) => user.id)
      : [];
    usersIdArray.push(currentUser.id);

    const response = await vote(
      `${endpoints.games}/${game.id}`,
      jwt,
      usersIdArray
    )

    if (isResponseOk(response)) {
      setIsVoted(true)  //Уставляем состояние голоса
      setGame({
        ...game,
        users: isVoted ?
          game.users.filter((user) => {
            return user.id !== currentUser.id
          }) : [...game.users, currentUser]
      })
    }
  }


  return (
    <main className="main">
      {game ? (
        <>
          <section className={Styles["game"]}>
            <iframe className={Styles["game__iframe"]} src={game.link}></iframe>
          </section>
          <section className={Styles["about"]}>
            <h2 className={Styles["about__title"]}>{game.title}</h2>
            <div className={Styles["about__content"]}>
              <p className={Styles["about__description"]}>{game.description}</p>
              <div className={Styles["about__author"]}>
                <p>
                  Автор:
                  <span className={Styles["about__accent"]}>
                    {game.developer}
                  </span>
                </p>
              </div>
            </div>
            <div className={Styles["about__vote"]}>
              <p className={Styles["about__vote-amount"]}>
                За игру уже проголосовали:
                <span className={Styles["about__accent"]}>
                  {game.users.length}
                </span>
              </p>
              <button
                disabled={!isAuthorized || isVoted}
                className={`button ${Styles["about__vote-button"]}`}
                onClick={handleVote}
              >
                {isVoted ? "Голос учтён" : "Голосовать"}
              </button>
            </div>
          </section>
        </>
      ) : preloaderVisible ? (
        <Preloader />
      ) : (
        <GameNotFound />
      )}
    </main>
  );
}
