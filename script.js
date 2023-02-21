

// api key
// let api_key = "c4bca40ec29442de9343b825cd2b1fcd";

let api_key = "pub_1734942a25a8e1d83dec89702b1759a943d93"

// getting navbar links id

const entertainmentId = document.getElementById("entertainment")
const indiaId = document.getElementById("india")
const businessId = document.getElementById("business")
const technologyId = document.getElementById("technology")
const sportsId = document.getElementById("sports")
const scienceId = document.getElementById("science")
const healthId = document.getElementById("health")
const worldId = document.getElementById("world")
const topId = document.getElementById("top")
const environmentId = document.getElementById("environment")
const foodId = document.getElementById("food")
const politicsId = document.getElementById("politics")



// getting body news section
const newstypeId = document.getElementById("newsType1");
const newsdetailsId = document.getElementById("newsdetails1");


// getting search query and search button
const searchId = document.getElementById("searchBtn")
const newsqueryId = document.getElementById("newsQuery")



// creating global array to store news data

let newsArr = []

// creating apis for navbar links

const india_news =  `https://newsdata.io/api/1/news?&apikey=pub_1734942a25a8e1d83dec89702b1759a943d93&country=in`

const entertainment_news = `https://newsdata.io/api/1/news?apikey=pub_1734942a25a8e1d83dec89702b1759a943d93&country=in&category=entertainment`
const business_news =   `https://newsdata.io/api/1/news?apikey=pub_1734942a25a8e1d83dec89702b1759a943d93&country=in&category=business`
const technology_news =  `https://newsdata.io/api/1/news?apikey=pub_1734942a25a8e1d83dec89702b1759a943d93&country=in&category=technology`
const sports_news =  `https://newsdata.io/api/1/news?apikey=pub_1734942a25a8e1d83dec89702b1759a943d93&country=in&category=sports`
const science_news =  `https://newsdata.io/api/1/news?apikey=pub_1734942a25a8e1d83dec89702b1759a943d93&country=in&category=science`
const health_news =  `https://newsdata.io/api/1/news?apikey=pub_1734942a25a8e1d83dec89702b1759a943d93&country=in&category=health`
const politics_news =  `https://newsdata.io/api/1/news?apikey=pub_1734942a25a8e1d83dec89702b1759a943d93&country=in&category=politics`
const food_news =  `https://newsdata.io/api/1/news?apikey=pub_1734942a25a8e1d83dec89702b1759a943d93&country=in&category=food`
const world_news =  `https://newsdata.io/api/1/news?apikey=pub_1734942a25a8e1d83dec89702b1759a943d93&country=in&category=world`
const environment_news =  `https://newsdata.io/api/1/news?apikey=pub_1734942a25a8e1d83dec89702b1759a943d93&country=in&category=environment`
const top_news =  `https://newsdata.io/api/1/news?apikey=pub_1734942a25a8e1d83dec89702b1759a943d93&country=in&category=top`




const search_news = `https://newsdata.io/api/1/news?apikey=${api_key}&q=${encodeURIComponent(newsqueryId.value)}&language=en`;



// on window load function calling

window.onload = function() {
  newstypeId.innerHTML="<h4>Recently Updated</h4>";
  fetchindia();
};



//  add event listner to get clink event on nav link

environmentId.addEventListener("click",function(){
  newstypeId.innerHTML="<h4>Environment news</h4>";
  fetchenvinoment();
});

topId.addEventListener("click",function(){
  newstypeId.innerHTML="<h4>Top news</h4>";
  fetchtop();
});

worldId.addEventListener("click",function(){
  newstypeId.innerHTML="<h4>World news</h4>";
  fetchworld();
});

foodId.addEventListener("click",function(){
  newstypeId.innerHTML="<h4>Food news</h4>";
  fetchfood();
});


politicsId.addEventListener("click",function(){
  newstypeId.innerHTML="<h4>Politics news</h4>";
  fetchpolitics();
});



entertainmentId.addEventListener("click",function(){
  newstypeId.innerHTML="<h4>Bollywood news</h4>";
  fetchentertainment();
});


indiaId.addEventListener("click",function(){
  newstypeId.innerHTML="<h4>India news</h4>";
  fetchindia();
});

businessId.addEventListener("click",function(){
  newstypeId.innerHTML="<h4>Business news</h4>";
  fetchbusiness();
});

technologyId.addEventListener("click",function(){
  newstypeId.innerHTML="<h4>Technology news</h4>";
  fetchtechnology();
});





sportsId.addEventListener("click",function(){
  newstypeId.innerHTML="<h4>Sports news</h4>";
  fetchsport();
});


scienceId.addEventListener("click",function(){
  newstypeId.innerHTML="<h4>Science news</h4>";
  fetchscience();
});

healthId.addEventListener("click",function(){
  newstypeId.innerHTML="<h4>health news</h4>";
  fetchhealth();
});

searchId.addEventListener("click" , function(){
  newstypeId.innerHTML="<h4>Search news : " +newsqueryId.value+"</h4>";
  fetchsearch();
})






//  functions for fetching data

const fetchbusiness = async () => {
  const response = await fetch(business_news);
  newsArr = [];
  if(response.status >=200 && response.status < 300) {
      const myJson = await response.json();
      newsArr = myJson.results;
  } else {
      // handle errors
      console.log(response.status, response.statusText);
      newsdetailsId.innerHTML = "<h5>No data found.</h5>"
      return;
  }

  displayNews();
}


const fetchworld = async () => {
  const response = await fetch(world_news);
  newsArr = [];
  if(response.status >=200 && response.status < 300) {
      const myJson = await response.json();
      newsArr = myJson.results;
  } else {
      // handle errors
      console.log(response.status, response.statusText);
      newsdetailsId.innerHTML = "<h5>No data found.</h5>"
      return;
  }

  displayNews();
}

const fetchtop = async () => {
  const response = await fetch(top_news);
  newsArr = [];
  if(response.status >=200 && response.status < 300) {
      const myJson = await response.json();
      newsArr = myJson.results;
  } else {
      // handle errors
      console.log(response.status, response.statusText);
      newsdetailsId.innerHTML = "<h5>No data found.</h5>"
      return;
  }

  displayNews();
}


const fetchfood = async () => {
  const response = await fetch(food_news);
  newsArr = [];
  if(response.status >=200 && response.status < 300) {
      const myJson = await response.json();
      newsArr = myJson.results;
  } else {
      // handle errors
      console.log(response.status, response.statusText);
      newsdetailsId.innerHTML = "<h5>No data found.</h5>"
      return;
  }

  displayNews();

const fetchpolitics = async () => {
    const response = await fetch(politics_news);
    newsArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        newsArr = myJson.results;
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        newsdetailsId.innerHTML = "<h5>No data found.</h5>"
        return;
    }
  
    displayNews();
  }
}


const fetchenvinoment = async () => {
  const response = await fetch(environment_news);
  newsArr = [];
  if(response.status >=200 && response.status < 300) {
      const myJson = await response.json();
      newsArr = myJson.results;
  } else {
      // handle errors
      console.log(response.status, response.statusText);
      newsdetailsId.innerHTML = "<h5>No data found.</h5>"
      return;
  }

  displayNews();
}


const fetchentertainment = async () => {
  const response = await fetch(entertainment_news);
  newsArr = [];
  if(response.status >=200 && response.status < 300) {
      const myJson = await response.json();
      newsArr = myJson.results;
  } else {
      // handle errors
      console.log(response.status, response.statusText);
      newsdetailsId.innerHTML = "<h5>No data found.</h5>"
      return;
  }

  displayNews();
}


const fetchindia = async () => {
  const response = await fetch(india_news);
  newsArr = [];
      const myJson = await response.json();
      newsArr = myJson.results;
      console.log(myJson)
 
      // handle errors
      console.log(response.status, response.statusText);
      newsdetailsId.innerHTML = "<h5>No data found.</h5>"
     
 

  displayNews();
}

const fetchtechnology = async () => {
  const response = await fetch(technology_news);
  newsArr = [];
  if(response.status >=200 && response.status < 300) {
      const myJson = await response.json();
      newsArr = myJson.results;
  } else {
      // handle errors
      console.log(response.status, response.statusText);
      newsdetailsId.innerHTML = "<h5>No data found.</h5>"
      return;
  }

  displayNews();
}

const fetchsport = async () => {
  const response = await fetch(sports_news);
  newsArr = [];
  if(response.status >=200 && response.status < 300) {
      const myJson = await response.json();
      newsArr = myJson.results;
  } else {
      // handle errors
      console.log(response.status, response.statusText);
      newsdetailsId.innerHTML = "<h5>No data found.</h5>"
      return;
  }

  displayNews();
}


const fetchscience = async () => {
  const response = await fetch(science_news);
  newsArr = [];
  if(response.status >=200 && response.status < 300) {
      const myJson = await response.json();
      newsArr = myJson.results;
  } else {
      // handle errors
      console.log(response.status, response.statusText);
      newsdetailsId.innerHTML = "<h5>No data found.</h5>"
      return;
  }

  displayNews();
}

const fetchhealth = async () => {
  const response = await fetch(health_news);
  newsArr = [];
  if(response.status >=200 && response.status < 300) {
      const myJson = await response.json();
      newsArr = myJson.results;
  } else {
      // handle errors
      console.log(response.status, response.statusText);
      newsdetailsId.innerHTML = "<h5>No data found.</h5>"
      return;
  }

  displayNews();
}




const fetchsearch = async () => {
  const response = await fetch(search_news);
  newsArr = [];
  if(response.status >=200 && response.status < 300) {
      const myJson = await response.json();
      newsArr = myJson.results;
  } else {
      // handle errors
      console.log(response.status, response.statusText);
      newsdetailsId.innerHTML = "<h5>No data found.</h5>"
      return;
  }

  displayNews();
}



// display function for diplay the news 

function displayNews() {

  console.log(newsArr)
  newsdetailsId.innerHTML = "";
  newsArr.forEach((news) => {
    let date_time = news.pubDate.split(" ");
    let date = date_time[0];
    let time = date_time[1];

            
    var col = document.createElement('div');
    col.className="col-sm-12 col-md-4 col-lg-3 p-2 grid gap-3";

    var card = document.createElement('div');
    card.className = " shadow m-2 p-3 inc-card ";

    var image = document.createElement('img');
    image.setAttribute("height","matchparent");
    image.setAttribute("width","100%");
    image.src=news.image_url;

    var cardBody = document.createElement('div');
    
    var newsHeading = document.createElement('h5');
    newsHeading.className = "card-title ";
    newsHeading.innerHTML = news.title;

    var dateHeading = document.createElement('h6');
    dateHeading.className = "text-primary d-inline ";
    dateHeading.innerHTML = date;

    var timeHeading = document.createElement('h6');
    timeHeading.className = "text-primary d-inline float-end ";
  
    timeHeading.innerHTML = time;

    var discription = document.createElement('p');
    discription.className="text-muted";
    discription.innerHTML = news.description;

    var link = document.createElement('a');
    link.className="btn btn-primary";
    link.setAttribute("target", "_blank");
    link.href = news.link;
    link.innerHTML="Read more";

    cardBody.appendChild(newsHeading);
    cardBody.appendChild(dateHeading);
    cardBody.appendChild(timeHeading);

    cardBody.appendChild(discription);
    cardBody.appendChild(link);

    card.appendChild(image);
    card.appendChild(cardBody);

    col.appendChild(card);
    

  
  

  newsdetailsId.appendChild(col)



  });
}

