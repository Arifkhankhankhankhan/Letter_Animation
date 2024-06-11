
import './App.css';

function App() {
  const handleClick = (event) => {
    event.target.classList.toggle ("active");
};

return (
    <div className="container">
        <span onClick={handleClick}>P</span>
        <span onClick={handleClick}>R</span>
        <span onClick={handleClick}>O</span>
        <span onClick={handleClick}>C</span>
        <span onClick={handleClick}>O</span>
        <span onClick={handleClick}>D</span>
        <span onClick={handleClick}>E</span>
    </div>
  );
}

export default App;
