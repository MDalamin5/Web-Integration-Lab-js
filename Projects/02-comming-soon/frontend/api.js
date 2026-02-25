const API_URL = "http://127.0.0.1:8000/chat";

export async function sendToBackend(text){
    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({message: text}) //matches pydantic schemas 'messages'.
        });

        const data = await response.json()
        return data.reply

    } catch(error){
        return "Error in the connect to python..."
    }

}

export async function getAllUsers() {
    try {
        const response = await fetch("http://127.0.0.1:8000/users", {
            method: "GET",
            headers: {"Content-Type": "application/json"},
        })

        const data = await response.json()
        return data.users
    } catch (error) {
        return "Error in the content to python..."
    }
}