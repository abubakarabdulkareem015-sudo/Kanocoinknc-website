// Supabase Connection
const supabaseUrl = "YOUR_PROJECT_URL";
const supabaseKey = "YOUR_PUBLISHABLE_KEY";

const supabase = window.supabase.createClient(
    supabaseUrl,
    supabaseKey
);


// Save Telegram User (only when opened inside Telegram)
async function saveTelegramUser() {

    if (window.Telegram && Telegram.WebApp) {

        const user = Telegram.WebApp.initDataUnsafe.user;

        if (user) {

            const { error } = await supabase
                .from("users")
                .insert([
                    {
                        telegram_id: user.id,
                        username: user.username
                    }
                ]);

            if (error) {
                console.log(error);
            } else {
                console.log("User saved successfully");
            }
        }
    }
}

saveTelegramUser();


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


// Show balance
if (balanceDisplay) {
    balanceDisplay.innerHTML = balance + " KNC";
}


// Start Mining
if (mineBtn) {

    mineBtn.addEventListener("click", function () {

        let reward = Math.floor(Math.random() * 5) + 1;

        balance += reward;

        balanceDisplay.innerHTML = balance + " KNC";

        status.innerHTML = "🎉 You mined " + reward + " KNC!";

        localStorage.setItem("kncBalance", balance);

    });

}


// Daily Reward
const dailyReward = document.getElementById("dailyReward");

if (dailyReward) {

    dailyReward.addEventListener("click", function () {

        balance += 20;

        balanceDisplay.innerHTML = balance + " KNC";

        status.innerHTML = "🎁 Daily Reward Claimed! +20 KNC";

        localStorage.setItem("kncBalance", balance);

    });

}


// Invite Friends
const referral = document.getElementById("referral");

if (referral) {

    referral.addEventListener("click", function () {

        alert("Referral system coming soon!");

    });

}


// Leaderboard
const leaderboard = document.getElementById("leaderboard");

if (leaderboard) {

    leaderboard.addEventListener("click", function () {

        alert("Leaderboard coming soon!");

    });

}


// Wallet
const wallet = document.getElementById("wallet");

if (wallet) {

    wallet.addEventListener("click", function () {

        alert("Wallet feature coming soon!");

    });

}