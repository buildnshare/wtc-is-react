
let memes = [];

if (localStorage.getItem('memes')) memes = JSON.parse(localStorage.getItem('memes'));
localStorage.setItem("memes", JSON.stringify(memes));

const wrapElement = document.querySelector('#wrap')

let items = JSON.parse(localStorage.getItem('memes'))
console.log(items);
items.forEach(item => {
    const cardHtml = `<div class="card">
                <div class="cover">
                    <img src=${item.src} alt="meme">
                </div>
                <p>created at: ${item.createdAt}</p>
                <button>
                    <img src="./assets/heart-svgrepo-com.svg" alt="">
                </button>
            </div>`

        wrapElement.innerHTML += cardHtml;
})