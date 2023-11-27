import logo from './logo.svg';
import './App.css';
import Data from "./bookstore.books.json";

function App() {
  return (
    <div className="App">
    <div className="books">
      {Data.map(books =>{
        return(
          <div key={books.id} className="card">
            
            <h4>{books.title}</h4>
            <p>{books.author}</p>
            <p>{books.genre}</p>
            <p>{books.price}</p>
          </div>

        )
      })}

    </div>
    </div>
  );
}

export default App;
