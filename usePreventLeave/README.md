# Usage

```js
import usePreventLeave from "@kooks/use-preventLeave";

const App = () => {
  const { enablePrevent, disablePrevent } = usePreventLeave();
  return (
    <div className="App">
      <button onClick={enablePrevent}>Protect</button>
      <button onClick={disablePrevent}>UnProtect</button>
    </div>
  );
};
```
