let searchText = document.querySelector(".searchText");
let searchButton  = document.querySelector("button");
let displayItems = document.querySelector(".display");

searchButton.addEventListener('click', ()=>{

const url = 'https://trains.p.rapidapi.com/';

const options = {
  method: 'POST',
  headers: {
    'content-type': 'application/json',
    'X-RapidAPI-Key': '2d265ec2ccmsh6a979c17b8c9342p1b3962jsn60df4cc995d0',
    'X-RapidAPI-Host': 'trains.p.rapidapi.com'
  },
  body: '{"search":"'+searchText.value+'"}'
};

fetch(url, options)
	.then(res => res.json())
	.then(json => displayData(json))
	.catch(err => console.error('error:' + err));
});

function displayData(json){
    console.log(json)
    let html ='';
    json.forEach((element) => {
       html += `<div>Train-Number : ${element.train_num} 
       <div>Train-Name:${element.name}</div>
       <div>Originate : ${element.train_from}</div>
       <div>Terminate : ${element.train_to}<div>
       <div>---------------------</div>
       </div>` 
    });
    displayItems.innerHTML = html;
}
