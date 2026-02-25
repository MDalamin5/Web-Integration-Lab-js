import { sendToBackend, getAllUsers } from "./api.js";
import { getUserText, displayResult } from "./ui.js";

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const btn = document.getElementById("send-btn")

btn.addEventListener("click", async () => {
    const text = getUserText();
    if(!text){
        alert("Please type somethings...");
        return;
    }
    displayResult("Thinking...")
    await delay(1000);
    const aiReply = await sendToBackend(text);
    displayResult(aiReply)
});


// clint click on the get users button

const btnGetUsers = document.getElementById("get-users")

btnGetUsers.addEventListener("click", async () => {
    const usersData = await getAllUsers();
    displayResult(JSON.stringify(usersData, null, 2))
})
