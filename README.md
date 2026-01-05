# 🚀 Crypto Price Tracker (Next.js)

A simple **one-page Next.js application** that tracks live cryptocurrency prices using a **free public API**.

This project uses the **CoinGecko API**, which does **not require an API key**.

---

## ✨ Features

- 📈 Live cryptocurrency prices
- 💰 Displays Bitcoin, Ethereum, and Solana
- 📉 24-hour price change (green/red)
- ⚡ Fast client-side fetching
- 🆓 Free & public API (no auth required)
- 🧩 Built with Next.js App Router

---

## 🛠️ Tech Stack

- **Next.js 13+**
- **React Hooks**
- **CoinGecko API**
- **JavaScript**
- **Inline CSS**

---

## 📦 Installation

### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/crypto-tracker.git
cd crypto-tracker
````

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Run the development server

```bash
npm run dev
```

Open your browser and visit:

```
http://localhost:3000
```

---

## 📁 Project Structure

```
crypto-tracker/
├── app/
│   └── page.js        # Main one-page app
├── public/
├── package.json
├── README.md
```

---

## 🌐 Free API Used

**CoinGecko API**

* Website: [https://www.coingecko.com](https://www.coingecko.com)
* Docs: [https://www.coingecko.com/en/api](https://www.coingecko.com/en/api)
* No API key required
* Rate-limited but free for personal projects

### API Endpoint Used:

```
https://api.coingecko.com/api/v3/coins/markets
```

---

## 🧪 Example Data Displayed

* Coin Name
* Coin Logo
* Current Price (USD)
* 24h Price Change (%)

---

## 🔮 Possible Improvements

* 🔄 Auto-refresh prices every X seconds
* 🔍 Search for any cryptocurrency
* 📊 Price charts (Chart.js / Recharts)
* 🎨 Tailwind CSS or Material UI
* 🌙 Dark/Light mode
* 🌍 Multi-currency support

---

## ⚠️ Notes

* CoinGecko enforces rate limits — avoid excessive requests.
* This project is for **learning and demo purposes**.

---

## 📜 License

MIT License – free to use, modify, and distribute.

---

## 🙌 Acknowledgements

* CoinGecko for the free crypto API
* Next.js team for the framework

---

### ⭐ If you like this project, consider giving it a star!
