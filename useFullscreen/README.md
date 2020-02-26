# Usage

```js
import useFullscreen from "@kooks/use-fullscreen";

const App = () => {
  const onFullScreen = isFull => {
    console.log(isFull ? "We are fulll" : "We are small");
  };
  const { element, triggerFull, exitFull } = useFullscreen(onFullScreen);
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <div ref={element}>
        <img
          src="https://www.un-rok.org/wp-content/uploads/2017/10/Medium_Seoul-e1513028406277.jpeg"
          alt="seoul"
        />
        <button onClick={exitFull}>Exit fullscreen</button>
      </div>
      <button onClick={triggerFull}>Make fullscreen</button>
    </div>
  );
};
```
