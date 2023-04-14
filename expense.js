let array = JSON.parse(localStorage.getItem("details")) || []

let body = document.getElementById("body");
let examount = document.getElementById("item1");
let description = document.getElementById("item2");
let category = document.getElementById("item3");
//  AppendData(array);

let btn = document.getElementById("btn").addEventListener("click", (event) => {
  let obj = {}
  obj.examount = examount.value
  obj.description = description.value
  obj.category = category.value
  console.log("obj", obj);
  console.log(array);
  array.push(obj)
  localStorage.setItem("details",JSON.stringify(array));
  examount.value = "";
  description.value = "";
  category.value = "";
  AppendData(array);

})

function AppendData(array){
  console.log("array",array);

  body.innerHTML=""
 for(let i = 0; i < array.length; i++){
  
    let div = document.createElement("div")

    let sr = document.createElement("p");
    sr.innerText = i + 1;
    let expense = document.createElement("p");
    expense.innerText = array[i].examount
    let descriptn = document.createElement("p");
    descriptn.innerText = array[i].description
    let categry = document.createElement("p");
    categry.innerText = array[i].category

    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete Expense";

    delBtn.addEventListener("click", () =>{
   
      myDelete(i, array);

    })

  let editBtn = document.createElement("button");
  editBtn.innerText = "Edit Expense";

  editBtn.addEventListener("click", () =>{
   
    myEdit(i, array[i], array)

  })
   
  div.append(sr, expense, descriptn, categry, delBtn, editBtn);
  body.append(div);
}
}

function myDelete(i, array){
  console.log("delete",i,array);
  array.splice(i,1);

  localStorage.setItem("details", JSON.stringify(array))
  AppendData(array);

}


function myEdit(i, element,array){

  console.log("delete",i,array);
  examount.value = "";
  description.value = "";
  category.value = "";
  examount.value = element.examount
  description.value = element.description
  category.value = element.category


  console.log("delete",i,array);
  array.splice(i,1);

  localStorage.setItem("details", JSON.stringify(array))
  AppendData(array);

}

