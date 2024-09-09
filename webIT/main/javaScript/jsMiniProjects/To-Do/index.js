const items_Container = document.getElementById("item");
const items_Template = document.getElementById("itemtemplate");
const add_Button = document.getElementById("add");
function getItems() {
    const value = localStorage.getItem("todo") || "[]";
    console.log(value);
    return JSON.parse(value);
};
let items = getItems();
function setItems(items) {
    const itemsJson = JSON.stringify(items);
    localStorage.setItem("todo", itemsJson);
};
function addItem() {
    items.push({
        description: "",
        completed: false
    });
    setItems(items);
    refreshList();
};
function updateItem(item, key, value){
    item[key] = value;
    setItems(items);
    refreshList();
}
function refreshList() {
    items_Container.innerHTML = "";
    for (const item of items) {
        items.sort((a,b) => {
            if(a.completed){
                return 1;
            }
            if(b.completed){
                return -1;
            }
            return a.description < b.description ? -1 : 1;
        })
        const itemElement = items_Template.content.cloneNode(true);
        let descriptionInput = itemElement.querySelector(".item-description");
        let completedInput = itemElement.querySelector(".item-completed");

        descriptionInput.value = item.description;
        completedInput.checked = item.completed;

        descriptionInput.addEventListener("change", () =>{
            updateItem(item, "description", descriptionInput.value);
        })

        completedInput.addEventListener("change", () => {
            updateItem(item, "completed", completedInput.checked);

        })

        items_Container.append(itemElement);
    }
}
add_Button.addEventListener("click", () => {
    addItem()
})
refreshList();