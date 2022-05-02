// Ude Import export (MANDATORY)
import{navbar} from '../components/navbar.js'
document.getElementById("navbar").innerHTML=navbar()

let gotdata = JSON.parse(localStorage.getItem("news"))


let details = document.getElementById("detailed_news")
console.log(gotdata)
// function gotta(gotdata){
    // gotdata.map((el)=>{
    //     console.log(el.details)
    // })

    // for(let key in gotdata){
    //     let image=document.createElement("img")
    //     let h3=document.createElement("h3")
    //     let p=document.createElement("p")
    //     image.src=urlToImage
    //     h3.innerText=title
    //     p.innerText=content
    //     details.append(h3,image,p)
    // }
    
    
// }
// gotta(gotdata)