import './App.css';

function App() {
  const url = "https://api.themoviedb.org/3/movie/76341?api_key=73bb2c441012fc5a8247a1d5cb33d69a"

fetch(url)
.then(res => res.json())
.then(data => {
  console.log(data.id)
  console.log(data.adult)
})
.catch(err => {
  console.log(err.message)
})
  return (
    <div>
   
    </div>
  );
}

export default App;
