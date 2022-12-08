//a function that iterates through the server
const setUpEvents=()=>{
    const form = document.querySelector("#github-form")
    form.addEventListener("submit",function(e){
        e.preventDefault()
       const search = document.querySelector("#search").value
       const githubNames = search.split(" ").join("")
       fetch ("https://api.github.com/users/"+githubNames,{
        method: 'GET',
        headers: {
            'content-type':'application/json',
            Accept: 'application/vnd.github.v3+json'
        }
    
       })
       .then ((res)=>res.json())
       .then ((data)=>{
        
    
    //------grab elements using querySelector---
    let userList = document.querySelector("#user-list");
    let repoList= document.querySelector("#repos-list");   
       //----creating element to store data----
    let userName = document.createElement('div')
    let avatar = document.createElement('div')
    let link = document.createElement('div')
    let repos = document.createElement('div')
    
    
    
    //-----Appending lists in respective places----
    userList.appendChild(userName)
    userList.appendChild(avatar)
    userList.appendChild(link)
    repoList.appendChild(repos)
    
    
    
    //-----string interpolating values----
    userName.innerHTML=`<a href="https://www.github.com${githubNames}"></a>`
    avatar.innerHTML=`<img  src="${data.avatar_url}"/>`   
     link.innerHTML=`<p href="https://www.github.com/${data.url}" ></p>`
    repos.innerHTML=`<a href="https://www.github.com/${data.public_repos}" ></a>`
    console.log(data)
       
    })
       
    })}
    
    