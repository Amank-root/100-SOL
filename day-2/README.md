# 🚀 Persistent Solana Wallet (Day 2)

![Solana](https://img.shields.io/badge/Solana-Devnet-9945FF?style=for-the-badge\&logo=solana)
![Node.js](https://img.shields.io/badge/Node.js-18%2B-339933?style=for-the-badge\&logo=node.js)
![Status](https://img.shields.io/badge/Status-Completed-success?style=for-the-badge)

---

## 📌 Overview

This project demonstrates how to create a **persistent Solana wallet** using `@solana/kit`.

Instead of generating a new wallet every run, this script:

* Creates a wallet once
* Saves it locally (`wallet.json`)
* Reloads it on future runs
* Tracks balance on Solana Devnet

Think of it as building a **persistent user account system for Web3 wallets**.

---

## ⚙️ Features

* 🆕 Generate Solana keypair (Devnet)
* 💾 Persist wallet locally in JSON format
* 🔁 Reload same wallet across executions
* 💰 Fetch live balance from Solana RPC
* 🧪 Works safely on Devnet (test SOL only)

---

## 🧱 Tech Stack

* Node.js (ES Modules)
* @solana/kit
* Solana Devnet RPC
* Web Crypto API

---

## 📂 Project Structure

```bash
.
├── persistent-wallet.mjs   # Main script
├── wallet.json             # Auto-generated wallet storage
└── README.md
```

---

## 🚀 Installation

### 1. Clone repo

```bash
git clone https://github.com/Amank-root/100-SOL.git
cd day-2
```

### 2. Install dependencies

```bash
pnpm install
```

---

## ▶️ Usage

Run the script:

```bash
node persistent-wallet.mjs
```

---

## 🔁 How It Works

### 🆕 First Run

* Generates a new keypair
* Saves it into `wallet.json`
* Prints wallet address

### 🔄 Future Runs

* Loads wallet from file
* Reuses same address
* Displays updated balance

---

## 💰 Get Test SOL

If balance is `0 SOL`, fund your wallet here:

👉 [https://faucet.solana.com/](https://faucet.solana.com/)

Paste your wallet address from the console output.

---

## 📊 Example Output

### First Run

```bash
Created new wallet: 9xA1bC...
Saved to wallet.json

Address: 9xA1bC...
Balance: 0 SOL
```

### Second Run (after funding)

```bash
Loaded existing wallet: 9xA1bC...

Address: 9xA1bC...
Balance: 2.5 SOL
```

---

## 🔐 Security Warning

⚠️ This project stores private keys in plain JSON.

✔️ OK for:

* Devnet testing
* Learning purposes

❌ NOT OK for:

* Production apps
* Real funds

In production, use:

* Hardware wallets
* Encrypted keystores
* Secure vault systems

---

## 🧠 What You Learned

* Solana keypair generation
* Key serialization & reconstruction
* Persistent storage of wallet state
* RPC balance queries
* Devnet workflow

---

## 📸 Submission Checklist

* [x] Wallet address displayed
* [x] Same address across multiple runs
* [x] Balance updates after faucet funding

---

## 📚 Resources

* 🌐 Solana Faucet: [https://faucet.solana.com/](https://faucet.solana.com/)
* 📖 Solana Docs: [https://docs.solana.com/](https://docs.solana.com/)
* 🧰 @solana/kit docs

---

## 🏁 Status

🚀 **Challenge Completed**




