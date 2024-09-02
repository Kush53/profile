
// Sample contact data (replace with actual data fetching or local storage)
let contacts = [
    { name: "abcd", phone: "123456789", email: "abc@example.com" },
    // ... more contacts
];

const contactsList = document.getElementById('contacts-list');
const contactDetails = document.getElementById('contact-details');
const searchInput = document.getElementById('search-input');
const addContactButton = document.getElementById('add-contact-button');

// Function to display contacts
function displayContacts(contactsToDisplay) {
    contactsList.innerHTML = ''; 

    contactsToDisplay.forEach(contact => {
        const contactItem = document.createElement('div');
        contactItem.classList.add('contact-item');
        contactItem.innerHTML = `
            <h3>${contact.name}</h3>
            <p>${contact.phone}</p>
            <p>${contact.email}</p>
        `;
        contactItem.addEventListener('click', () => showContactDetails(contact));
        contactsList.appendChild(contactItem);
    });
}

// Function to show contact details
function showContactDetails(contact) {
    contactDetails.innerHTML = `
        <h2>${contact.name}</h2>
        <p>Phone: ${contact.phone}</p>
        <p>Email: ${contact.email}</p>
        <button class="edit-button">Edit</button> 
        <button class="delete-button">Delete</button> 
    `;

    const editButton = document.querySelector('.edit-button');
    editButton.addEventListener('click', () => {
        showEditForm(contact)
    });

    const deleteButton = document.querySelector('.delete-button');
    deleteButton.addEventListener('click', () => {
        deleteContact(contact);
    });
}

// Function to show the edit form
function showEditForm(contact){
    contactDetails.innerHTML = `
        <h2>Edit Contact</h2>
        <input type="text" id="edit-name" value="${contact.name}" placeholder="Name">
        <input type="text" id="edit-phone" value="${contact.phone}" placeholder="Phone">
        <input type="text" id="edit-email" value="${contact.email}" placeholder="Email">
        <button class="save-button">Save</button>
        <button class="cancel-button">Cancel</button>
    `;

    const saveButton = document.querySelector('.save-button');
    saveButton.addEventListener('click', () => {
        saveEdit(contact);
    });

    const cancelButton = document.querySelector('.cancel-button');
    cancelButton.addEventListener('click', () => {
        showContactDetails(contact);
    });
}

// Function to save the edited contact
function saveEdit(contact){
    const newName = document.getElementById('edit-name').value;
    const newPhone = document.getElementById('edit-phone').value;
    const newEmail = document.getElementById('edit-email').value;

    contact.name = newName;
    contact.phone = newPhone;
    contact.email = newEmail;

    displayContacts(contacts);
    showContactDetails(contact);
}

// Function to delete a contact
function deleteContact(contact){
    const index = contacts.indexOf(contact);
    if(index > -1){
        contacts.splice(index, 1);
    }

    displayContacts(contacts);
    contactDetails.innerHTML = '';
}

// Initial display of contacts
displayContacts(contacts);

// Search functionality
searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredContacts = contacts.filter(contact => 
        contact.name.toLowerCase().includes(searchTerm) ||
        contact.phone.includes(searchTerm) ||
        contact.email.toLowerCase().includes(searchTerm)
    );
    displayContacts(filteredContacts);
});

// Add Contact button functionality
addContactButton.addEventListener('click', () => {
    showAddForm();
});

// Function to show the add form
function showAddForm(){
    contactDetails.innerHTML = `
        <h2>Add Contact</h2>
        <input type="text" id="new-name" placeholder="Name">
        <input type="text" id="new-phone" placeholder="Phone">
        <input type="text" id="new-email" placeholder="Email">
        <button class="add-button">Add</button>
        <button class="cancel-button">Cancel</button>
    `;

    const addButton = document.querySelector('.add-button');
    addButton.addEventListener('click', () => {
        addNewContact();
    });

    const cancelButton = document.querySelector('.cancel-button');
    cancelButton.addEventListener('click', () => {
        contactDetails.innerHTML = '';
    });
}

// Function to add a new contact
function addNewContact(){
    const newName = document.getElementById('new-name').value;
    const newPhone = document.getElementById('new-phone').value;
    const newEmail = document.getElementById('new-email').value;

    const newContact = {
        name: newName,
        phone: newPhone,
        email: newEmail
    }

    contacts.push(newContact);

    displayContacts(contacts);
    showContactDetails(newContact);
}
