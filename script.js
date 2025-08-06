const data = {
  happy: {
    music: ["Mella Mellaga","Ammayi","Oh My Friend","Zingaat","Badri Ki Dulhania","Udi Dil Befikre"],
    movies: ["Bommarillu","Hi Nanna","Queen","Jaane Tu Ya Jaane Na"]
  },
  sad: {
    music: ["Pranam","Em Sandeham Ledu","Priyathama Priyathama","Tujhe Bhula Diya","Channa Mereya","Agar Tum Saath Ho"],
    movies: ["Ninu Kori", "Kal Ho Naa Ho", "Majili"]
  },
  excited: {
    music: ["Thunder - Imagine Dragons", "Don't Start Now - Dua Lipa", "Believer - Imagine Dragons"],
    movies: ["Avengers: Endgame", "Mad Max: Fury Road", "Baby Driver"]
  },
  relaxed: {
    music: ["Weightless - Marconi Union", "Ocean Eyes - Billie Eilish", "Sunflower - Post Malone"],
    movies: ["Chef", "The Secret Life of Walter Mitty", "A Man Called Otto"]
  }
};

function showRecommendations(mood) {
  const recDiv = document.getElementById('recommendations');
  recDiv.innerHTML = `<h2>🎵 Music for ${mood}</h2>`;
  
  data[mood].music.forEach(item => {
    recDiv.innerHTML += `
      <div class="recommendation-item">
        ${item}
        <br><button onclick="addToFavorites('${item}')">❤️ Save</button>
      </div>`;
  });

  recDiv.innerHTML += `<h2>🎬 Movies for ${mood}</h2>`;
  
  data[mood].movies.forEach(item => {
    recDiv.innerHTML += `
      <div class="recommendation-item">
        ${item}
        <br><button onclick="addToFavorites('${item}')">❤️ Save</button>
      </div>`;
  });
}

function addToFavorites(item) {
  let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  if (!favorites.includes(item)) {
    favorites.push(item);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    renderFavorites();
  }
}

function renderFavorites() {
  const favoritesList = document.getElementById('favoritesList');
  let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  favoritesList.innerHTML = '';
  favorites.forEach(item => {
    favoritesList.innerHTML += `<li>${item}</li>`;
  });
}

// Load favorites on page load
renderFavorites();
