const { program } = require("commander");

const contactsOperations = require("./contacts");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const contacts = await contactsOperations.listContacts();
      console.log(contacts);
      break;

    case "get":
      const contact = await contactsOperations.getContactById(id);
      console.log(contact);
      break;

    case "add":
      const newContact = await contactsOperations.addContact(
        name,
        email,
        phone
      );
      console.log(newContact);
      break;

    case "remove":
      const deleteContact = await contactsOperations.removeContact(id);
      console.log(deleteContact);
      break;

    case "update":
      const updateContact = await contactsOperations.updateContact(
        id,
        name,
        email,
        phone
      );
      console.log(updateContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);
const argv = program.opts();
invokeAction(argv);

//invokeAction({ action: "list" });
//invokeAction({action: "get", id: "3"});
//invokeAction({action: "add", name: "Olha", email: "olha.mail.com", phone: "098 76 377 86"});
//invokeAction({action: "remove", id: "4c627cb9-dfa8-4f6f-9ca7-02887c99f009"})
/* invokeAction({
  action: "update",
  id: "3ee4b79f-265d-4d31-9fbd-8af626408b60",
  name: "Olha Petra",
  email: "olha@mail.com",
  phone: "098 76 377 86",
}); */
