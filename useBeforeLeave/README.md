# Usage

- 화면을 벗어났을 때 사용

```js
import useBeforeLeave from "@kooks/use-beforeLeave";

const App = () => {
  const begForLife = () => console.log("Pls dont leave");
  useBeforeLeave(begForLife);
  return <div className="App" />;
};
```
