const buttonvalue=document.getElementById("button")

const deleteiconvalue=document.getElementById("deleteicon")
const modaloverlayvalue=document.getElementById("modaloverlay")
const closeiconvalue=document.getElementById("closeicon")

const formvalue=document.getElementById("form")
const nameofitemvalue=document.getElementById("name-of-item")
const linktoitemvalue=document.getElementById("link-to-item")
const descriptionofitemvalue=document.getElementById("description-of-item")
const titleofresearch=document.getElementById("title")
const descriptionofresearch=document. getElementById("researchdescription")
const researchcontainer=document.getElementById("research-item")
const itemssectionhere=document.getElementById("itemsection")

let userarray=[]

buttonvalue.addEventListener("click",function(){
    modaloverlayvalue.style.display="flex" 
})
closeiconvalue.addEventListener("click",function(){
     modaloverlayvalue.style.display="none"
})


formvalue.addEventListener("submit",function(event){
    event.preventDefault()
    let nameofwebsite=nameofitemvalue.value
    let linktowebsite=linktoitemvalue.value
    let descriptionofwebsite=descriptionofitemvalue.value

    const userinformation={
        usernameofwebiste:nameofwebsite,
        userlinktowebsite:linktowebsite,
        userdescriptionofwebsite:descriptionofwebsite
    }
    userarray.push(userinformation)
    localStorage.setItem("itemsOfResearch", JSON.stringify(userarray))
    displaytext()
    fetchItems()

    formvalue.reset()
    


})
function fetchItems(){
    if(localStorage.getItem("itemsOfResearch")){
        userarray = JSON.parse(localStorage.getItem("itemsOfResearch"))
    }
    displaytext()
}
fetchItems()

function displaytext(){
    itemssectionhere.innerHTML=``
    userarray.forEach(function(item){
        let itemusernameofwebsite=item.usernameofwebiste
        let itemuserlink=item.userlinktowebsite
        let itemuserdescription=item.userdescriptionofwebsite
        

        let researchitemDiv=document.createElement("div")
        researchitemDiv.classList.add("research-item")
        

        let titleanddeletecontainerdiv=document.createElement("div")
        titleanddeletecontainerdiv.classList.add("title-and-delete-container")

        let itemtitle=document.createElement("a")
        itemtitle.setAttribute=("href",`${itemuserlink}`)
        itemtitle.setAttribute=("target","_blank")
        itemtitle.textContent=itemusernameofwebsite
        

        let deleteicondiv=document.createElement("i")
        deleteicondiv.classList.add("fa-solid","fa-trash")
        deleteicondiv.setAttribute(`onclick`,`deleteitem('${itemuserlink}')`)
        

        let descriptionofitemdiv=document.createElement("div")
        descriptionofitemdiv.classList.add("description-of-item")
        let itemdescriptionparagraph=document.createElement("p")
        itemdescriptionparagraph.textContent=itemuserdescription


        descriptionofitemdiv.append(itemdescriptionparagraph)
        titleanddeletecontainerdiv.append(itemtitle,deleteicondiv)
        researchitemDiv.append(titleanddeletecontainerdiv,descriptionofitemdiv)
        itemssectionhere.append(researchitemDiv)
        console.log(itemssectionhere)
    })
}
function deleteitem(researchlink){
    userarray.forEach(function(item,index){
        if(item.userlinktowebsite===researchlink){
            userarray.splice(index,1)
            
        }
    })
        
    localStorage.setItem("itemsOfResearch", JSON.stringify(userarray))
    fetchItems()


    }

