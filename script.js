const ekle=document.querySelector("#button-addon2")
const searchInput=document.querySelector("#headerInput")
const list=document.querySelector("#list")
const lis=document.querySelectorAll("ul")
const closeTag="X"


ekle.addEventListener("click",handleAdd)

function handleAdd() {
  
    const newLi=document.createElement("li")
    const closeButton=document.createElement("button")
    const classList=["bg-slate-300","break-words","flex","justify-between"]
   
    newLi.textContent=` ${searchInput.value}`
    closeButton.textContent=`${closeTag}`
    
  
    
   if(searchInput.value.trim() !== ""){
    newLi.appendChild(closeButton)
    list.appendChild(newLi) 
    
    newLi.classList.add(...classList)
   }else{
    alert("Boş To do Girilemez..! Lütfen Bir şeyler yazınız...")
   }

   

   closeButton.addEventListener("click",()=>{
    list.removeChild(newLi)
   })

   

}

lis.forEach(eleman=>{
    eleman.addEventListener("click",e=>{
      if(e.target.tagName=="LI") {
        e.target.classList.toggle("line-through")
        e.target.classList.toggle("bg-slate-700")
        e.target.classList.toggle("text-white")
            
      }
       
    })
    
})

