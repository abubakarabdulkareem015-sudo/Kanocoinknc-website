const supabaseUrl = "YOUR_PROJECT_URL";
const supabaseKey = "YOUR_PUBLISHABLE_KEY";

const supabase = window.supabase.createClient(
  supabaseUrl,
  supabaseKey
);
// Kano Coin Mining App

let balance = localStorage.getItem("kncBalance");

if (balance === null) {
    balance = 0;
} else {
    balance = parseInt(balance);
}

const balanceDisplay = document.getElementById("balance");
const mineBtn = document.getElementById("mineBtn");
const status = document.getElementById("status");

balanceDisplay.innerHTML = balance + " KNC";

// Start Mining
mineBtn.addEventListener("click", function () {

    let reward = Math.floor(Math.random() * 5) + 1;

    balance += reward;

    balanceDisplay.innerHTML = balance + " KNC";

    status.innerHTML = "🎉 You mined " + reward + " KNC!";

    localStorage.setItem("kncBalance", balance);

});

// Daily Reward
document.getElementById("dailyReward").addEventListener("click", function () {

    balance += 20;

    balanceDisplay.innerHTML = balance + " KNC";

    status.innerHTML = "🎁 Daily Reward Claimed! +20 KNC";

    localStorage.setItem("kncBalance", balance);

});

// Invite Friends
document.getElementById("referral").addEventListener("click", function () {

    alert("Referral system coming soon!");

});

// Leaderboard
document.getElementById("leaderboard").addEventListener("click", function () {

    alert("Leaderboard coming soon!");

});

// Wallet
document.getElementById("wallet").addEventListener("click", function () {

    alert("Wallet feature coming soon!");

});