const baseUrl = "https://api.thecatapi.com/v1/images/search";

const getCats = async () => {
  try {
    const response = await fetch(baseUrl);
    const json = await response.json();
    return json[0].url;
  } catch (e) {
    console.log(e.message);
  }
};

const loadImage = async () => {
  const img = document.querySelector("img");
  img.src = await getCats();
};

loadImage();

const button = document.querySelector("button");
button.addEventListener("click", loadImage);
