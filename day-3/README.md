# Understanding SOL and Lamports (Solana Devnet)

## Overview

In Solana, all balances and on-chain value are ultimately represented in **lamports**, not SOL.
SOL is what users see in wallets, while lamports are what the Solana runtime actually uses.

This project demonstrates how to:

* Query wallet balances using the Solana CLI
* Understand the relationship between SOL and lamports
* Convert between SOL and lamports manually and programmatically
* Inspect transaction fees in lamports

---

## Key Concept

### SOL vs Lamports

* **1 SOL = 1,000,000,000 lamports (10⁹ lamports)**
* SOL is a human-readable unit
* Lamports are the smallest indivisible unit used by the blockchain

This design ensures:

* No floating-point precision errors
* Deterministic calculations across all validators
* Safe and consistent financial computation

---

## Why Lamports Matter

Solana uses **integer arithmetic only** for all financial operations.

Example issue with floats:

```js
0.1 + 0.2 = 0.30000000000000004
```

On a blockchain, even tiny inconsistencies would break consensus.
That’s why Solana uses lamports (integers) instead of SOL (decimals).

---

## Setup Instructions

### 1. Install Solana CLI

```sh
sh -c "$(curl -sSfL https://release.anza.xyz/stable/install)"
```

Verify installation:

```sh
solana --version
```

If needed:

```sh
export PATH="$HOME/.local/share/solana/install/active_release/bin:$PATH"
```

---

### 2. Create Wallet

```sh
solana-keygen new
```

Check address:

```sh
solana address
```

---

### 3. Configure Devnet

```sh
solana config set --url devnet
```

---

### 4. Request Airdrop (if needed)

```sh
solana airdrop 2 --url devnet
```

If rate limited:

```sh
solana airdrop 1 --url devnet
```

---

## Core Commands

### Check balance in SOL

```sh
solana balance --url devnet
```

### Check balance in lamports

```sh
solana balance --url devnet --lamports
```

---

## Manual Verification

To verify correctness:

```text
SOL balance × 1,000,000,000 = Lamports balance
```

Example:

```text
2 SOL × 1,000,000,000 = 2,000,000,000 lamports
```

---

## Transaction Inspection

### View recent transactions

```sh
solana transaction-history $(solana address) --url devnet --limit 1
```

### Confirm transaction details

```sh
solana confirm <SIGNATURE> -v --url devnet
```

---

## Understanding Fees

Transaction fees are also in lamports:

* Typical fee: `5000 lamports`
* Equivalent to: `0.000005 SOL`

Conversion:

```text
5000 / 1,000,000,000 = 0.000005 SOL
```

---

## Common Lamport Values

| Lamports      | SOL Equivalent | Meaning                 |
| ------------- | -------------- | ----------------------- |
| 5,000         | 0.000005 SOL   | Typical transaction fee |
| 890,880       | 0.00089088 SOL | Token account rent      |
| 1,000,000,000 | 1 SOL          | Standard unit           |
| 2,000,000,000 | 2 SOL          | Common devnet airdrop   |

---

## What This Demonstrates

* Solana uses **lamports as the base unit of value**
* All RPC responses return lamports
* Wallet UIs only convert lamports → SOL for display
* Developers must always handle lamports directly in code

---

## Submission Requirement

Include:

* Screenshot of `solana balance`
* Screenshot of `solana balance --lamports`
* Manual math showing:

```text
SOL × 1e9 = lamports
lamports ÷ 1e9 = SOL
```

---

## Summary

* SOL = user-friendly display unit
* Lamports = system-level accounting unit
* Everything on-chain is computed in lamports
* Precision and determinism are guaranteed via integer math


