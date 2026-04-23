
# Day 4 — Connect a Browser Wallet (Solana)

![Vite](https://img.shields.io/badge/Vite-vanilla%20ts-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Solana](https://img.shields.io/badge/Solana-Devnet-14F195?style=for-the-badge&logo=solana&logoColor=black)
![Wallet Standard](https://img.shields.io/badge/Wallet%20Standard-Enabled-blue?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Completed-success?style=for-the-badge)

---

## Overview

This project demonstrates how to connect a browser-based Solana wallet (like Phantom, Solflare, or Backpack) to a web application using the Wallet Standard.

Instead of manually handling private keys (like in earlier exercises), this app securely delegates signing and authentication to a wallet extension. The app only interacts with public data such as the wallet address and balance.

---

## What This App Does

- Detects installed Solana wallet extensions in the browser
- Displays available wallets to the user
- Connects to a selected wallet via user approval
- Retrieves the connected wallet’s public address
- Fetches and displays the wallet’s **Devnet SOL balance**
- Supports disconnecting from the wallet
- Automatically updates when new wallets are installed

---

## Tech Stack

- Vite (Vanilla TS)
- @solana/kit
- @wallet-standard/app
- Solana Devnet RPC

---

## Setup Instructions

### 1. Create the project

```bash
pnpm create vite@latest day-4-wallet -- --template vanilla-ts
cd day-4-wallet
pnpm install
````

### 2. Install dependencies

```bash
pnpm install @solana/kit @wallet-standard/app
```

---

### 3. Install a browser wallet

Install one of:

* Phantom → [https://phantom.app](https://phantom.app)
* Solflare → [https://solflare.com](https://solflare.com)
* Backpack → [https://backpack.app](https://backpack.app)

Then:

* Switch network to **Devnet**
* Fund wallet via [https://faucet.solana.com](https://faucet.solana.com)

---

### 4. Run the project

```bash
pnpm run dev
```

Open:

```
http://localhost:5173
```

---

## How It Works

### Wallet Discovery

```js
import { getWallets } from "@wallet-standard/app";
```

Automatically detects installed wallets that support the Wallet Standard.

---

### Connecting

```js
wallet.features["standard:connect"].connect()
```

* Prompts user approval
* Returns public account(s)
* Never exposes private keys

---

### Fetching Balance

```js
rpc.getBalance(address).send();
```

Converts lamports → SOL and displays balance.

---

### Disconnecting

```js
wallet.features["standard:disconnect"].disconnect();
```

---

## Key Concepts

* Browser wallet integration
* Wallet Standard protocol
* Permission-based authentication
* Solana RPC balance queries
* Secure key management via extensions

---

## Security Model

* ❌ No private keys accessed
* ❌ No seed phrases requested
* ✅ All signing handled by wallet extension
* ✅ User fully controls approvals

---

## Result

The app displays:

* Wallet name
* Public address
* Devnet balance

---

## Screenshot Submission

Include:

* Connected wallet view
* Address + balance

Bonus:

* Multiple wallets detected screen
![](https://i.ibb.co/Hpr6KRrw/day-4-sol.png)
