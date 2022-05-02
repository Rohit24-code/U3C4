// Ude Import export (MANDATORY)
import{navbar} from '../components/navbar.js'
document.getElementById("navbar").innerHTML=navbar()
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
let search=document.getElementById("search_input")
search.addEventListener("onkeydown",function(){
    console.log("inside")

})



