"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,tether,binancecoin,solana,ripple,usd-coin,cardano,dogecoin,polygon"
    )
      .then((res) => res.json())
      .then((data) => {
        setCoins(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <main style={styles.container}>
      <h1 style={styles.title}>🚀 Crypto Price Tracker</h1>

      {loading ? (
        <p>Loading prices...</p>
      ) : (
        <div style={styles.grid}>
          {coins.map((coin) => (
            <div key={coin.id} style={styles.card}>
              <img src={coin.image} alt={coin.name} width={40} />
              <h2>{coin.name}</h2>
              <p>💲 {coin.current_price}</p>
              <p
                style={{
                  color:
                    coin.price_change_percentage_24h >= 0 ? "green" : "red",
                }}
              >
                24h: {coin.price_change_percentage_24h.toFixed(2)}%
              </p>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    padding: "40px",
    background: "#0f172a",
    color: "#fff",
    textAlign: "center",
  },
  title: {
    marginBottom: "30px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: "20px",
  },
  card: {
    background: "#1e293b",
    padding: "20px",
    borderRadius: "12px",
  },
};
