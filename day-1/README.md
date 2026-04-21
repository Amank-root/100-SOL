# 🚀 Day 1: Generate a Keypair & Get Devnet SOL

![Solana](https://img.shields.io/badge/Solana-Devnet-9945FF?style=for-the-badge\&logo=solana)
![Node](https://img.shields.io/badge/Node.js-18%2B-339933?style=for-the-badge\&logo=node.js)
![Status](https://img.shields.io/badge/Status-Completed-success?style=for-the-badge)

---

## 📌 Overview

This project demonstrates how to create a **Solana wallet (keypair)** from scratch and fund it with **Devnet SOL**.

On Solana, identity is cryptographic:

* 🔓 **Public Key** → your wallet address (shareable)
* 🔒 **Private Key** → your secret (must stay safe)

Think of it like SSH keys—no central server, just math.

---

## 🛠️ Tech Stack

* Node.js
* @solana/kit
* Solana Devnet

---

## 📂 Project Setup

### 1. Install dependencies

```bash
npm install @solana/kit
```

---

## 🔑 Step 1: Generate Wallet

Create a file:

```bash
create-wallet.mjs
```

### Code

```javascript
import { generateKeyPairSigner } from "@solana/kit";

const wallet = await generateKeyPairSigner();

console.log("Your new wallet address:", wallet.address);
console.log("\nPublic key (safe to share)");
console.log("Private key stays in memory (not saved)");
```

### Run

```bash
node create-wallet.mjs
```

---

## 💰 Step 2: Fund Wallet

1. Copy your wallet address
2. Visit → Solana Faucet
3. Select **Devnet**
4. Request an airdrop

---

## 🔍 Step 3: Check Balance

```javascript
import {
  generateKeyPairSigner,
  createSolanaRpc,
  devnet,
} from "@solana/kit";

const rpc = createSolanaRpc(devnet("https://api.devnet.solana.com"));
const wallet = await generateKeyPairSigner();

const { value: balance } = await rpc.getBalance(wallet.address).send();
const balanceInSol = Number(balance) / 1_000_000_000;

console.log("Wallet:", wallet.address);
console.log(`Balance: ${balanceInSol} SOL`);
```

---

### ⚠️ Important

Each run creates a **new wallet**.

To check your funded wallet:

```javascript
import { address } from "@solana/kit";

const { value: balance } = await rpc
  .getBalance(address("YOUR_FUNDED_ADDRESS"))
  .send();
```

---

## 🧠 Key Concepts

### 🔐 Keypair = Identity

* Generated locally
* No signup required
* Uses Ed25519

### 🌐 Devnet

* Free test network
* No real money
* Safe for experimentation

### 💡 Notes

* Private key is **not persisted**
* Real apps store keys securely
* Wallets like Phantom handle this

---

## 📸 Submission

### ✅ Screenshot Required

![Submission](https://i.ibb.co/nqDvF9PL/sol-day-1.png)

---

## 📁 Project Structure

```
.
├── create-wallet.mjs
├── package.json
├── pnpm-lock.yaml
└── README.md
```

---

## ✅ Outcome

* Generated a Solana keypair
* Funded wallet with Devnet SOL
* Queried on-chain balance
* Understood decentralized identity

---
