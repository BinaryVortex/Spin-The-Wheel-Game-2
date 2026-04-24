# Spin The Wheel Game

A lightweight Spin-The-Wheel game built with plain HTML, CSS and JavaScript. Click the button to spin the wheel and win a prize — perfect as a mini-game, giveaway tool, or learning project.

---

## Screenshot

![Game Screenshot](./Screenshot%202024-09-14%20210310.png)

---

## Demo / Run locally

Option 1 — Open locally:
1. Download or clone the repository.
2. Open `index.html` in your web browser.

Option 2 — Serve with a simple local server (recommended for some browsers):

- Using Python 3:

  ```bash
  python -m http.server 8000
  # then open http://localhost:8000 in your browser
  ```

- Or using Node.js (http-server):

  ```bash
  npx http-server -c-1
  ```


## How to play

- Click the "Spin" button (or the wheel if enabled).
- The wheel will rotate and eventually stop on a prize segment.
- The chosen prize is shown when the wheel stops.


## Features

- Single-file, dependency-free frontend (HTML/CSS/JS).
- Simple spin animation with ease-out effect.
- Configurable prize segments and styles via `index.html`, `style.css`, and `script.js`.


## Files of interest

- `index.html` — main page and markup
- `style.css` — styles and layout
- `script.js` — spin logic and prize selection
- `Screenshot 2024-09-14 210310.png` — repository screenshot used in this README
- `spin.jpg` — alternate image asset


## Customize

- Change the look: edit `style.css` to update colors, fonts and layout.
- Change prizes: open `index.html`/`script.js` and modify the prize labels and their styles.
- Adjust spin behavior: edit the rotation logic and duration in `script.js`.


## Contributing

Contributions, suggestions and fixes are welcome.

- Open an issue to discuss major changes.
- Fork the repo, create a branch for your change, then open a PR.


## Notes

- This project currently does not include a license file. If you want to use or redistribute the project, consider adding an appropriate LICENSE (for example, MIT) or contact the repository owner.


## Author

BinaryVortex


----

Enjoy the game! If you'd like, I can also:
- Add a live GitHub Pages demo (and update README with the demo link)
- Add keyboard accessibility or mobile-specific tweaks
- Improve the visuals or make the wheel dynamic based on a JSON config

