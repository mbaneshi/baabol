import classes from "./App.module.css";

function App() {
  return (
    <div className={classes.mostOutherDiv}>

    <h1>
    Hello World
    </h1>
      <h1 className={classes.header}>Hello World</h1>
      <h3 className={classes.subtitle}> This is subtitle</h3>
    </div>
  );
}

export default App;
