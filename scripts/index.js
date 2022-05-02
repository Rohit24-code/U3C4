// Ude Import export (MANDATORY)
import{navbar} from '../components/navbar.js'
document.getElementById("navbar").innerHTML=navbar()
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page


// let sidebar = document.getElementById("sidebar").children
// console.log(sidebar)

document.getElementById("in").addEventListener("click",dataa)
document.getElementById("ch").addEventListener("click",dataa)
document.getElementById("us").addEventListener("click",dataa)
document.getElementById("uk").addEventListener("click",dataa)
document.getElementById("nz").addEventListener("click",dataa)

function dataa(){
getdata(this.id)
}

let getdata= async(sidebar)=>{
    try{
        let res = await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${sidebar}`)
        let data = await res.json()
        newaa(data.articles)
    }
    catch(err){
        console.log(err)
    }
}


let news=document.querySelector(".news")
getdata("in")
function newaa(data){
    news.innerHTML=""
    // let news = 
    // console.log(data)
    data.map(({urlToImage,title,content})=>{
        let div=document.createElement("div")
        div.addEventListener("click",function(){
            tostore({urlToImage,title,content})
        })
        let image=document.createElement("img")
        let h3=document.createElement("h3")
        let p=document.createElement("p")
        image.src=urlToImage
        h3.innerText=title
        p.innerText=content
        div.append(h3,image,p)
        news.append(div)
        
    })
}

function tostore(el){
    localStorage.setItem("news",JSON.stringify(el))
    window.location.href="./news.html"
}

// let search=document.getElementById("search_input")
// search.addEventListener(`keydown`,function(e){
//      if(e===13){
//         window.location.href="./search.html"
//      }
  
// })
