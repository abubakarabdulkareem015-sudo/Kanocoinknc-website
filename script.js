// Kano Coin (KNC) App

// Supabase Connection
const supabaseUrl = "YOUR_PROJECT_URL";
const supabaseKey = "YOUR_PUBLISHABLE_KEY";

let supabaseClient = null;

if (window.supabase) {
    supabaseClient = window.supabase.createClient(
        supabaseUrl,
        supabaseKey
    );
}


// Save Telegram User
async function saveTelegramUser() {

    if (!supabaseClient) return;

    if (window.Telegram && Telegram.WebApp) {

        const user = Telegram.WebApp.initDataUnsafe.user;

        if (user) {

            const { error } = await supabaseClient
                .from("users")
                .insert([
                    {
                        telegram_id: user.id,
                        username: user.username || "No username"
                    }
                ]);

            if (error) {
                console.log(error);
            } else {
                console.log("User saved");
            }
        }
    }
}

saveTelegramUser();


// Mining System

let balance = localStorage.getItem("kncBalance");

if (balance === null) {
    balance = 0;
} else {
    balance = Number(balance);
}


const balanceDisplay = document.getElementById("balance");
const mineBtn = document.getElementById("mineBtn");
const status = document.getElementById("status");


if (balanceDisplay) {
    balanceDisplay.innerHTML = balance + " KNC";
}


// Start Mining Button

if (mineBtn) {

    mineBtn.onclick = function () {

        let reward = Math.floor(Math.random() * 5) + 1;

        balance = balance + reward;

        balanceDisplay.innerHTML = balance + " KNC";

        status.innerHTML = "🎉 You mined " + reward + " KNC!";

        localStorage.setItem("kncBalance", balance);

    };

}


// Daily Reward

const dailyReward = document.getElementById("dailyReward");

if (dailyReward) {

    dailyReward.onclick = function () {

        balance = balance + 20;

        balanceDisplay.innerHTML = balance + " KNC";

        status.innerHTML = "🎁 Daily Reward Claimed! +20 KNC";

        localStorage.setItem("kncBalance", balance);

    };

}


// Referral Button

const referral = document.getElementById("referral");

if (referral) {

    referral.onclick = function () {
        alert("Referral system coming soon!");
    };

}


// Leaderboard Button

const leaderboard = document.getElementById("leaderboard");

if (leaderboard) {

    leaderboard.onclick = function () {
        alert("Leaderboard coming soon!");
    };

}


// Wallet Button

const wallet = document.getElementById("wallet");

if (wallet) {

    wallet.onclick = function () {
        alert("Wallet feature coming soon!");
    };

        }
