import { ApiService } from "./api.js";
import { UIManager } from "./ui.js";

// === 1. INITIAL LOAD ===
async function initApp() {
    try {
        UIManager.toggleLoading(true);
        const users = await ApiService.getAllUsers();
        // We only show top 5 for demo
        render(users.slice(0, 5));
    } catch (error) {
        alert("Error loading users: " + error.message);
    } finally {
        UIManager.toggleLoading(false);
    }
}

// Helper to re-render list with attached events
function render(users) {
    UIManager.renderList(users, handleEditClick, handleDeleteClick);
}

// === 2. EVENT HANDLERS ===

// Handle "Save" Button (Create or Update)
document.getElementById("save-btn").addEventListener("click", async () => {
    const formData = UIManager.getFormData();
    
    if (!formData.name || !formData.email) {
        alert("Please fill all fields");
        return;
    }

    try {
        UIManager.toggleLoading(true);

        if (formData.id) {
            // -- UPDATE MODE --
            await ApiService.updateUser(formData.id, formData);
            alert("User Updated Successfully!");
        } else {
            // -- CREATE MODE --
            await ApiService.createUser(formData);
            alert("User Created Successfully!");
        }
        
        UIManager.clearForm();
        // Reload list (in real app) - here we just re-fetch
        initApp();

    } catch (error) {
        console.error(error);
        alert("Operation Failed");
    } finally {
        UIManager.toggleLoading(false);
    }
});

// Handle "Edit" Button
function handleEditClick(user) {
    console.log("Edit clicked for:", user);
    UIManager.fillFormForEdit(user);
}

// Handle "Delete" Button
async function handleDeleteClick(id) {
    if (!confirm("Are you sure?")) return;

    try {
        UIManager.toggleLoading(true);
        await ApiService.deleteUser(id);
        alert("User Deleted!");
        initApp(); // Refresh list
    } catch (error) {
        alert("Delete failed");
    } finally {
        UIManager.toggleLoading(false);
    }
}

// Start the App
initApp();