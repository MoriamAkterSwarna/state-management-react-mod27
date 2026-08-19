import "./App.css";
import Counter from "./Counter";
import LikeButton from "./LikeButton";

function App() {
  const handleClick2 = () => {
    console.log("Clicked! 2");
  };
  function handleClick3() {
    console.log("Clicked! 3 ");
  }

  const handleDelete = (id: number) => {
    console.log(`Delete item ${id}`);
  };

  return (
    <>

      <LikeButton />
      <Counter />

      {/* Way 1 */}
      <button onClick={() => console.log("Clicked! 1")}>Click me1</button>

      {/* Way 2  with arrow function */}
      <button onClick={handleClick2}>Click me 2</button>

      {/* way 2 with normal function */}
      <button onClick={handleClick3}>Click me 3</button>

      {/* Way 3 with parameter */}
      <button onClick={() => handleDelete(123)}>Delete</button>
    </>
  );
}

export default App;
