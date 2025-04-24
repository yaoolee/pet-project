# Pokédex Companion

A lightweight, retro‐styled web app that lets you browse Pokémon, filter by type, search by name, and view detailed stat cards—all built with vanilla HTML, CSS, and JavaScript.

<img src="./images/screenshot-home.png" alt="Pokédex Companion Home Screen" width="600" />

---

## 🚀 Features

- **Start Screen**: Pixel‑style splash screen with a “Press Start” vibe.
- **Type Filters**: Quickly filter the list by Fire, Water, Grass, or Electric types.
- **Search**: Search for a Pokémon by name.
- **Detail View**: Click any Pokémon to see a full‑screen detail card showing height, weight, abilities, and weaknesses.
  

## 📁 Project Structure

```
pokedex-companion/
├── index.html           # Start screen
├── home.html            # Pokédex list & filters
├── detail.html          # Pokémon detail view template
├── styles/
│   ├── style.css        # Start‑screen styles
│   ├── home.css         # List & card grid styles
│   └── main.css         # Detail‑card styles
├── script/
│   ├── script.js          # Filtering & search logic
│   └── detail.js        # Detail‑page rendering logic
└── images/
    └── pokemon/         # Pokémon images
```

## 🛠️ Technologies

- **HTML5** for semantic structure
- **CSS3** with CSS variables for theme colors
- **JavaScript** (ES6) for interactivity
- **Google Fonts**: `Press Start 2P` & `Montserrat`

## 🎨 Design & Colors

| Element         | Color     |
| --------------- | --------- |
| Fire‑type bg    | `#FF8E76` |
| Water‑type bg   | `#B6DAFF` |
| Fire inner card | `#FF5733` |
| Water inner card| `#0073E6` |
| Grass badge     | `#4CAF50` |
| Electric badge  | `#FFCC00` |
| Start screen bg | `#FFCC00` |
| Start button    | `#E60012` |

## 📷 Image Credits

Pokémon sprite assets (used under educational fair‑use) were sourced via the freeCodeCamp tutorial:

> FreeCodeCamp. *Build a Pokédex using HTML, CSS, JS and an API.* Retrieved from https://www.freecodecamp.org/news/build-a-pokedex-using-html-css-js-and-an-api/  
> Pokémon images © Nintendo / Game Freak.

## 🔧 Installation & Usage

1. **Clone the repo**
   ```bash
   git clone https://github.com/yourusername/pokedex-companion.git
   cd pokedex-companion
   ```
2. **Open** `index.html` in your browser.
3. **Click** Start to enter the Pokédex.

## Future Features

1. Comparison between pokemon.
2. Add favorite/bookmark.
3. Implement Pokemon API.

## 🌟 License & Credit

This project is for educational purposes. Pokémon and related assets are trademarks of their respective owners.

---

Happy coding and catch ’em all! ✨

