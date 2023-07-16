import Head from "next/head";
//Components
import Navbar from "@/components/navbar/navbar";
import Subtitle from "@/components/tipography/subtitle/subtitle";
import Container from "@/components/container/container";
import SaleCard from "@/components/cards/salecard/SaleCard";
import GameCard from "@/components/cards/gamecard/GameCard";
//CSS
import styles from "@/styles/index.module.css"

import { useState } from "react";

export default function Home() {
  const [cart, setCart] = useState([])

  const handleAddProduct = (product) => {
    setCart([...cart, product])
  }

  const handleRemoveProduct = (pos) => {
    setCart(cart.filter((obj, posObj) => posObj !== pos))
  }

  return (
    <>
      <Head>
        <title>DevSteam: A sua loja online de games</title>
        <meta name="description" content="DevSteam: A sua loja online de games"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Navbar cart={cart} onRemove={handleRemoveProduct} />
        <Container>
          <div className={styles.saleContainer}>
            <Subtitle>Promoções</Subtitle>
            <div className={styles.saleCardsContainer}>
              <SaleCard 
                image={"dayz.jpg"}
                onAdd={() => 
                  handleAddProduct({image: "dayz.jpg", name: "Day Z", price: 49.90,})
                }
              />
              <SaleCard
                image={"red-dead-redemption.jpg"}
                onAdd={() => 
                  handleAddProduct({image: "red-dead-redemption.jpg", name: "Red Dead Redemption 2", price: 49.90,})
                }
              />
              <SaleCard
                image={"gta-v.jpg"}
                onAdd={() => 
                  handleAddProduct({image: "gta-v.jpg", name: "GTA V", price: 49.90,})
                }
              />
            </div>
          </div>

          <div className={styles.otherGamesContainer}>
            <Subtitle>Outros Jogos</Subtitle>
            <div className={styles.otherGamesCardContainer}>
              <GameCard 
                image={"counter-strike.jpg"}
                title={"Counter Strike: Global Offensive"}
                onAdd={() => 
                  handleAddProduct({image: "counter-strike.jpg", name: "Counter Strike: Global Offensive", price: 99.90,})
                }
              />
              <GameCard 
                image={"terraria.jpg"}
                title={"Terraria"}
                onAdd={() => 
                  handleAddProduct({image: "terraria.jpg", name: "Terraria", price: 99.90,})
                }
              />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
