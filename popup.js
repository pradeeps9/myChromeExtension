let url = "https://icanhazdadjoke.com/slack";

async function getJokes() {
  try {
    let res = await fetch(url);
    let data = await res.json();
    let joke = data.attachments[0].fallback;
    console.log(joke);

    let p = document.querySelector("p");
    p.innerText = joke;
  }

  catch(e) {
    console.log("ERROR :", e);
  }
  
}


let btn = document.querySelector("button");
btn.addEventListener("click", async() => {
  getJokes();
});
