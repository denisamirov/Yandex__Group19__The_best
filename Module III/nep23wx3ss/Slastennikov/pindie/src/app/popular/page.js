
import { CardsList } from "../components/CardsList/CardsList";
import { getNormalizedGamesDataByCategory } from "../api/api-utils";
import { endpoints } from "../api/config";
export default async function NewPage() {
  const popularGames = await getNormalizedGamesDataByCategory(
    endpoints.games,
    "popular"
  );
  return (
    <main className="main-inner">
      <CardsList id="popular" title="Популярные" data={popularGames} />
    </main>
  );
}
