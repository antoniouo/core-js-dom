let fish = document.querySelectorAll('.fish-list-card');
fish.id = 'allcards' 

for (let i = 0; i < fish.length; i++) {
    
    let btn = document.createElement("button");
    btn.innerText = "Купить";
    btn.style.color = "white";
    btn.style.marginBottom = '20px';
    btn.style.width = '100px'; 
    btn.style.height = '50px';    
    btn.style.backgroundColor = 'rgb(' + 33 + ',' + 105 + ',' + 143 + ')';

    let name = document.getElementsByClassName('fish-list-card-name')[i];

    function alertMsg() { alert(`${name.innerText}`); }
    btn.addEventListener("click", alertMsg);

    fish[i].appendChild(btn);    
}



