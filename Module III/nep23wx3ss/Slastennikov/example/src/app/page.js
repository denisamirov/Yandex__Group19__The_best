import { getNormalizedGamesDataByCategory } from "./api/api-utils";
import { endpoints } from "./api/config";
import { Banner } from "./components/Banner/Banner";
import { CardsList } from "./components/CardsList/CardsList";
import { Promo } from "./components/Promo/Promo";

export default async function Home() {
  const newGames = await getNormalizedGamesDataByCategory(endpoints.games,"new");
  const popularGames = await getNormalizedGamesDataByCategory(endpoints.games,"popular");
  return (
    <main className="main">
      <Banner />
      <CardsList id="popular" title="Популярные" data ={popularGames}/>
      <CardsList id="new" title="Новые" data ={newGames}/>
      <Promo />
    </main>
  );
}
