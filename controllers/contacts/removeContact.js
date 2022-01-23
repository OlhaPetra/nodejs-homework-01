const listContacts = require("./listContacts");
const fs = require("fs/promises");

const path = require('path');
const contactsPath = path.join(__dirname, "../../db/contacts.json");

const removeContact = async(id)=> {
    const contacts = await listContacts();
    const index = contacts.findIndex(item => item.id === id);
    if(index === -1){
        return null;
    }
    const deleteContact = contacts[index]; 
    contacts.splice(index, 1);
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
    return deleteContact;
}

module.exports = removeContact;