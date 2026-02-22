const listItem = document.getElementsByClassName("list-item")
console.log(listItem)

// convert htmlcollection to array
const data = Array.from(listItem)

console.log(data)

data.forEach(function(li){
    li.style.color = "orange"
})