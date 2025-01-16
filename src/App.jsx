import { useState, useEffect } from "react";
import "./App.css";

function App() {
  // const images = [
  //   "https://media2.giphy.com/v1.Y2lkPTc5MGI3NjExeXo4OW1tMjhwNXYwdnFoYzFuM2c4d3d1eHlwd28waTdvMWVhb3h1eiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/SggILpMXO7Xt6/giphy.gif",
  //   "https://media2.giphy.com/v1.Y2lkPTc5MGI3NjExZnV2dDhqNmJpZ25hZTVwZDNoYjUybXFydzZ4YmY4cHdtc2YyMmVzaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/wW95fEq09hOI8/giphy.gif",
  //   "https://media2.giphy.com/v1.Y2lkPTc5MGI3NjExNTYwNDl6ZWZ1M241bXNpbjA0MWQyZ24xaDAxYzJhd2RxYmR2bWo3eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/cYZkY9HeKgofpQnOUl/giphy.gif",
  //   "https://media1.giphy.com/v1.Y2lkPTc5MGI3NjExcjNtdDZ2YnR5ZHNhanJlemM4aWNreGlwN3A2ZjkxZW5yMjExOWp6dCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/oDLDbBgf0dkis/giphy.gif",
  //   "https://media3.giphy.com/v1.Y2lkPTc5MGI3NjExOW5hampqemlzcng1aGx4NW9qajdtZmNuYWpzcmYwc3ExaHpkeTYwciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8lgqAbycBjosxjfi9k/giphy.gif",
  //   "https://media2.giphy.com/v1.Y2lkPTc5MGI3NjExbTRhcmd2MmR2d3Vnemlvc29jMW13YnU5YXphc3R4eTU0OXBtYzFlcyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/mGBuUHekyiw5kfm0wR/giphy.gif",
  //   "https://media3.giphy.com/v1.Y2lkPTc5MGI3NjExenJwbmx4NDN2NDVpYnkzbGhpb2JxZ2VqNTY5N2I2bmNjZGx4aDNiOCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/mFdJjYKpSII6JLeiDz/giphy.gif",
  //   "https://media0.giphy.com/v1.Y2lkPTc5MGI3NjExMmNqc21iN21zZW1wNWFqY3d2bmo0NjBjeDk5cWZ4YzI4emtidmw5dCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xT9IgMnGMy3ma0EB3O/giphy.gif",
  //   "https://media4.giphy.com/v1.Y2lkPTc5MGI3NjExeXA5cjNtb3l4cDBoN3N1ZDVlazM1dnUwNGFldTlsYWZheXo2d2Q1ZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/SwCuRzaVTkxvTpEDzO/giphy.gif",
  //   "https://media2.giphy.com/v1.Y2lkPTc5MGI3NjExdWxycGY1OWNrNGdlMTgxbjJzeTBxZG9ycnBqbmo3MHE5MnNjYXg4cyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1d7F9xyq6j7C1ojbC5/giphy.gif",
  // ];

  const [cards, setCards] = useState([]);
  const [clicked, setClicked] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  useEffect(() => {
    const fetchCards = async () => {
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=PSpKb1ra7XpeN39rVWAH0pL6vqFKKRqV&q=dogs&limit=12`
      );
      const data = await response.json();
      const images = await data.data.map((obj) => [
        obj.id,
        obj.images.original_still.url,
      ]);
      setCards(images);
    };

    fetchCards();
  }, []);

  function handleClick(image) {
    if (clicked.includes(image[0])) {
      setScore(0);
    } else {
      const newClicked = [...clicked, image[0]];
      setClicked(newClicked);
      setScore(score + 1);
      setHighScore(highScore > score ? highScore : score + 1);
    }
  }

  cards.sort(() => Math.random() - 0.5);

  return (
    <>
      <div className="header">
        <h1>Score: {score}</h1>
        <h1>High Score: {highScore}</h1>
      </div>
      <div className="image-grid">
        {cards.map((image, index) => (
          <div
            onClick={() => handleClick(image)}
            key={index}
            style={{ backgroundImage: `url(${image[1]})` }}
          >
            {" "}
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
