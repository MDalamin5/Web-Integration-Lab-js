// constants
const BASE_URL = "https://jsonplaceholder.typicode.com/users";

export const ApiService = {
    // GET
    async getAllUsers() {
        const response = await fetch(BASE_URL);
        if (!response.ok) throw new Error("Fetch Failed");
        return await response.json();
    },

    // POST
    async createUser(userData) {
        const response = await fetch(BASE_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userData)
        });
        if (!response.ok) throw new Error("Create Failed");
        return await response.json();
    },

    // PUT
    async updateUser(id, userData) {
        const response = await fetch(`${BASE_URL}/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userData)
        });
        if (!response.ok) throw new Error("Update Failed");
        return await response.json();
    },

    // DELETE
    async deleteUser(id) {
        const response = await fetch(`${BASE_URL}/${id}`, { method: "DELETE" });
        if (!response.ok) throw new Error("Delete Failed");
        return true;
    }
};