import Head from "next/head";
//Components
import Navbar from "@/components/navbar/navbar";
import Subtitle from "@/components/tipography/subtitle/subtitle";
import Container from "@/components/container/container";
import SaleCard from "@/components/cards/salecard/SaleCard";
import GameCard from "@/components/cards/gamecard/GameCard";
//CSS
import styles from "@/styles/index.module.css"

export default function Home() {
  return (
    <>
      <Head>
        <title>DevSteam: A sua loja online de games</title>
        <meta
          name="description"
          content="DevSteam: A sua loja online de games"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Navbar />
        <Container>
          <div className={styles.saleContainer}>
            <Subtitle>Promoções</Subtitle>
            <div className={styles.saleCardsContainer}>
              <SaleCard/>
              <SaleCard/>
              <SaleCard/>
            </div>
          </div>
          <div className={styles.otherGamesContainer}>
            <Subtitle>Outros Jogos</Subtitle>
            <div className={styles.otherGamesCardContainer}>
              <GameCard />
              <GameCard />
              <GameCard />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
