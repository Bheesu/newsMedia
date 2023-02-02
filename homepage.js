const APIKEY = "6d04415a33a242008bf2661f5a7ac275";
let nm_menu = document.querySelector(".nm_menu_bar");
let nm_menu_btn = document.querySelector("#nm_menu_1");
let nm_item = document.querySelectorAll(".nm_item");

nm_item.forEach((element) => {
  window.addEventListener("load", function () {
    let nm_html = "";
    let endpoint = "";
    endpoint = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${APIKEY}`;
    fetch(endpoint)
      .then((response) => response.json())
      .then((data) => {
        let news_section = document.querySelector("#news");
        data.articles.forEach((element) => {
          if(element.urlToImage == null){
            element.urlToImage = '/newsMedia/images/subsitute_img.png';
          }
          if(element.content == null){
            element.content = "";
          }
          nm_html += `<div class="nm_page_container">
      <div class="nm_news">
        <div class="nm_news_content">
          <div class="nm_news_image">
            <img src="${element.urlToImage}" />
          </div>

          <div class="nm_news_element">
            <div class="nm_news_title">
              <a target="_blank" href ="${element.url}"><h2 class="nm_title">${element.title}</h2></a>
            </div>
            <div class="nm_news_detail">
              <p class="nm_detail">${element.content}</p>
            </div>
          </div>
        </div>
      </div>
    </div>`;
        });
        news_section.innerHTML = nm_html;
      })
      .catch((error) => console.log(error));
  });
  // click event
  element.addEventListener("click", function (e) {
    window.scroll(0,0);
    let nm_html = "";
    let endpoint = "";
    let value = e.target.dataset.category;
    if (value == "India") {
      endpoint = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${APIKEY}`;
    } else if (value == "Entertainment") {
      endpoint = `https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=${APIKEY}`;
    } else if (value == "Sports") {
      endpoint = `https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=${APIKEY}`;
    } else if (value == "Education") {
      endpoint = `https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=${APIKEY}`;
    } else if (value == "World") {
      endpoint = `https://newsapi.org/v2/everything?q=tesla&from=2022-12-31&sortBy=publishedAt&apiKey=${APIKEY}`;
    } else if (value == "technology") {
      endpoint = `https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=${APIKEY}`;
    } else {
      endpoint = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${APIKEY}`;
    }
    fetch(endpoint)
      .then((response) => response.json())
      .then((data) => {
      
        let news_section = document.querySelector("#news");
        data.articles.forEach((element) => {
          if(element.urlToImage == null){
            element.urlToImage = '/newsMedia/images/subsitute_img.png';
          }
          if(element.content == null){
            element.content = "";
          }
          nm_html += `<div class="nm_page_container">
        <div class="nm_news">
          <div class="nm_news_content">
            <div class="nm_news_image">
             <img src="${element.urlToImage}"/>
            </div>

            <div class="nm_news_element">
              <div class="nm_news_title">
                <a target="_blank" href ="${element.url}"><h2 class="nm_title">${element.title}</h2></a>
              </div>
              <div class="nm_news_detail">
                <p class="nm_detail">${element.content}</p>
              </div>
            </div>
          </div>
        </div>
      </div>`;
        });
        news_section.innerHTML = nm_html;
      })
      .catch((error) => console.log(error));
  });
});

if (window.screen.width < 600) {
  nm_menu_btn.style.display = "block";
  nm_menu.style.display = "none";
}
nm_menu_btn.addEventListener("click", function () {
  nm_menu.style.display = "block";
});
if (window.screen.width < 600) {
  for (let i = 0; i <= nm_item.length; i++) {
    nm_item[i].addEventListener("click", function () {
      nm_menu.style.display = "none";
    });
  }
}
let nm_top=document.querySelector("#nm_top");
nm_top.addEventListener("click", function ()
{
  window.scroll(0,0);
})
// fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${APIKEY}`)
//   .then((response) => response.json())
//   .then((data) => )
//   .catch((error) => console.log(error));

// fetch(
//   `https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=${APIKEY}`
// )
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

// fetch(`https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=${APIKEY}`)
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

// fetch(
//   `https://newsapi.org/v2/everything?q=tesla&from=2022-12-31&sortBy=publishedAt&apiKey=${APIKEY}`
// )
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

// fetch(
//   `https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=${APIKEY}`
// )
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

// fetch(`https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=${APIKEY}`)
// .then((response) => response.json())
// .then((data) => for(let item; item <= data.length; item++)
// {
//     nm_image.innerHTML=`<img src=${data}>`
// }
// )
// .catch((error) => console.log(error))

// function newsdata() {

//     fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${APIKEY}`)
//     .then((response) => response.json())
//     .then((data) => {

//         let y=data.articles;
//         console.log(y)

//         for(let i=0; i<=data.articles.length;i++)
//         {
//             console.log(data.articles.title)
//             newscontainer.innerHTML +=`<div class="nm_news">
//             <div class="nm_news_content">
//               <div class="nm_news_image">
//                 <img src="${data.articles.urlToImage}" />

//               </div>

//               <div class="nm_news_element">
//                 <div class="nm_news_title">
//                   <h2 class="nm_title">${data.title}</h2>
//                 </div>
//                 <div class="nm_news_detail">
//                   <p class="nm_detail">
//                   ${data.articles.content}
//                   </p>
//                 </div>
//               </div>
//             </div>
//             </div>`;
//         }

//  })
//     .catch((error) => console.log(error));
// }  newsdata()

// function entertainment() {

//     fetch( `https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=${APIKEY}`)
//     .then((response) => response.json())
//     .then((data) => {

//         let y=data.articles.title;
//         console.log(y)
//         for(let i=0; i<=data.articles.length;i++)
//         {
//             console.log(data.articles.title)
//             newscontainer.innerHTML +=`<div class="nm_news">
//             <div class="nm_news_content">
//               <div class="nm_news_image">
//                 <img src="${data.articles.urlToImage}" />

//               </div>

//               <div class="nm_news_element">
//                 <div class="nm_news_title">
//                   <h2 class="nm_title">${data.articles.title}</h2>
//                 </div>
//                 <div class="nm_news_detail">
//                   <p class="nm_detail">
//                   ${data.articles.content}
//                   </p>
//                 </div>
//               </div>
//             </div>
//             </div>`;
//         }

//  })
//     .catch((error) => console.log(error));
// }

// function sport() {

//     fetch(`https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=${APIKEY}`)
//     .then((response) => response.json())
//     .then((data) => {

//         let y=data.articles.title;
//         console.log(y)
//         for(let i=0; i<=data.articles.length;i++)
//         {
//             console.log(data.articles.title)
//             newscontainer.innerHTML +=`<div class="nm_news">
//             <div class="nm_news_content">
//               <div class="nm_news_image">
//                 <img src="${data.articles.urlToImage}" />

//               </div>

//               <div class="nm_news_element">
//                 <div class="nm_news_title">
//                   <h2 class="nm_title">${data.articles.title}</h2>
//                 </div>
//                 <div class="nm_news_detail">
//                   <p class="nm_detail">
//                   ${data.articles.content}
//                   </p>
//                 </div>
//               </div>
//             </div>
//             </div>`;
//         }

//  })
//     .catch((error) => console.log(error));
// }

