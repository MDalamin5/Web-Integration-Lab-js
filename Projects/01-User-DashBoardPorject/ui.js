// Select DOM Elements
const listElement = document.getElementById("user-list");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const idInput = document.getElementById("user-id");
const saveBtn = document.getElementById("save-btn");
const loadingMsg = document.getElementById("loading-msg");

export const UIManager = {
    // 1. Get data from inputs
    getFormData() {
        return {
            id: idInput.value,
            name: nameInput.value,
            email: emailInput.value
        };
    },

    // 2. Clear inputs
    clearForm() {
        idInput.value = "";
        nameInput.value = "";
        emailInput.value = "";
        saveBtn.innerText = "Add User";
        saveBtn.className = "btn-green";
    },

    // 3. Show Loading Spinner
    toggleLoading(show) {
        loadingMsg.style.display = show ? "inline" : "none";
    },

    // 4. Populate Form for Editing
    fillFormForEdit(user) {
        idInput.value = user.id;
        nameInput.value = user.name;
        emailInput.value = user.email;
        saveBtn.innerText = "Update User";
        saveBtn.className = "btn-yellow";
    },

    // 5. Render the List to HTML
    renderList(users, onEdit, onDelete) {
        listElement.innerHTML = ""; // Clear current list
        
        users.forEach(user => {
            const li = document.createElement("li");
            li.innerHTML = `
                <span>${user.name} (${user.email})</span>
                <div>
                    <button class="edit-btn btn-yellow">Edit</button>
                    <button class="del-btn btn-red">Delete</button>
                </div>
            `;

            // Attach Events Manually (Cleaner than onclick in HTML)
            const editBtn = li.querySelector(".edit-btn");
            editBtn.addEventListener("click", () => onEdit(user));

            const delBtn = li.querySelector(".del-btn");
            delBtn.addEventListener("click", () => onDelete(user.id));

            listElement.appendChild(li);
        });
    }
};