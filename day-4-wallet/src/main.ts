import { createSolanaRpc, devnet, address } from "@solana/kit";
import { getWallets } from "@wallet-standard/app";
import type { Wallet, WalletAccount } from "@wallet-standard/base";

const rpc = createSolanaRpc(devnet("https://api.devnet.solana.com"));

const walletListDiv = document.getElementById("wallet-list") as HTMLDivElement | null;
const connectedDiv = document.getElementById("connected") as HTMLDivElement | null;
const statusDiv = document.getElementById("status") as HTMLDivElement | null;
const errorDiv = document.getElementById("error") as HTMLDivElement | null;

let connectedWallet: Wallet | null = null;

function isSolanaWallet(wallet: Wallet): boolean {
  return wallet.chains?.some((chain: string): boolean => chain.startsWith("solana:")) ?? false;
}

function renderWalletList(wallets: readonly Wallet[]): void {
  if (!walletListDiv || !statusDiv) return;

  const solanaWallets = wallets.filter(isSolanaWallet);

  if (solanaWallets.length === 0) {
    walletListDiv.innerHTML = `
      <div class="no-wallets">
        No Solana wallets found.<br>
        Install <a href="https://phantom.app" target="_blank">Phantom</a> or another Solana wallet to continue.
      </div>`;
    statusDiv.textContent = "";
    return;
  }

  statusDiv.textContent = `Found ${solanaWallets.length} wallet(s):`;
  walletListDiv.innerHTML = "";

  for (const wallet of solanaWallets) {
    const btn = document.createElement("button");
    btn.className = "wallet-btn";

    const icon = wallet.icon;
    btn.innerHTML = icon
      ? `<img src="${icon}" alt="" /> ${wallet.name}`
      : wallet.name;

    btn.addEventListener("click", () => connectWallet(wallet));
    walletListDiv.appendChild(btn);
  }
}

async function connectWallet(wallet: Wallet): Promise<void> {
  if (!statusDiv || !errorDiv || !walletListDiv || !connectedDiv) return;

  errorDiv.textContent = "";

  const connectFeature = wallet.features["standard:connect"];
  if (!connectFeature) {
    errorDiv.textContent = "This wallet doesn’t support connecting.";
    return;
  }

  try {
    statusDiv.textContent = "Requesting connection…";
    //@ts-ignore
    const { accounts } = await connectFeature.connect();

    if (!accounts || accounts.length === 0) {
      errorDiv.textContent = "No accounts returned. Did you reject the request?";
      statusDiv.textContent = "";
      return;
    }

    connectedWallet = wallet;

    const account: WalletAccount = accounts[0];
    const pubkey = address(account.address);

    const { value: balanceInLamports } = await rpc.getBalance(pubkey).send();
    const balanceInSol = (Number(balanceInLamports) / 1_000_000_000).toFixed(9);

    walletListDiv.style.display = "none";
    statusDiv.textContent = "";
    connectedDiv.style.display = "block";

    connectedDiv.innerHTML = `
      <h3>Connected to ${wallet.name}</h3>
      <div class="address">${address}</div>
      <div class="balance">${balanceInSol} SOL</div>
      <button class="disconnect-btn" id="disconnectBtn">Disconnect</button>
    `;

    document
      .getElementById("disconnectBtn")
      ?.addEventListener("click", () => disconnectWallet(wallet));

  } catch (err: unknown) {
    errorDiv.textContent =
      err instanceof Error
        ? `Connection failed: ${err.message}`
        : "Connection failed";
    statusDiv.textContent = "";
  }
}

async function disconnectWallet(wallet: Wallet): Promise<void> {
  if (!statusDiv || !walletListDiv || !connectedDiv) return;

  const disconnectFeature = wallet.features["standard:disconnect"];
  if (disconnectFeature) {
    //@ts-ignore
    await disconnectFeature.disconnect();
  }

  connectedWallet = null;
  connectedDiv.style.display = "none";
  walletListDiv.style.display = "block";
  statusDiv.textContent = "Disconnected. Choose a wallet to reconnect:";
}

const { get, on } = getWallets();

renderWalletList(get());

on("register", () => {
  if (!connectedWallet) {
    renderWalletList(get());
  }
});
