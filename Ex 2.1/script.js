const form= document.createElement("input");
form.value = "after";
form.type = "submit";
form.id = "submit";
const formArea = document.getElementById('formId');
formArea.appendChild(form);
const submit = document.getElementById("submit");
submit.addEventListener('click', function(){
    submit.value == "after" ? submit.value = "before" : submit.value = "after"
})  