# Usage

```js
import useBeforeLeave from "@kooks/use-beforeLeave";

const App = () => {
  const begForLife = () => console.log("Pls dont leave");
  useBeforeLeave(begForLife);
  return <div className="App" />;
};
```
