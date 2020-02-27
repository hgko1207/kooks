# Usage

```js
import useNotification from "@kooks/use-notification";

const App = () => {
  const triggerNotify = useNotification("Title", { body: "test" });
  return (
    <div className="App">
      <button onClick={triggerNotify}>Hello</button>
    </div>
  );
};
```
