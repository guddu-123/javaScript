const select = document.getElementById("dropDown");
const dm = document.getElementById("hello")
select.addEventListener("change",()=>{
    if(select.value === "colour"){
        dm.style.color = "yellow" 
    }else if(select.value === "padding"){
        dm.style.padding = "30px"
    }else if(select.value === "font-size"){
        dm.style.fontSize = "20px"
    }else if(select.value === "font-weight"){
        dm.style.fontWeight = "bold"
    }else if(select.value === "background-color"){
        dm.style.backgroundColor = "green"
    }
})