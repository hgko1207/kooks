# Usage

```js
import useTitle from "@kooks/use-title";

const App = () => {
  const titleUpdater = useTitle("Loading...");
  setTimeout(() => titleUpdater("Home"), 5000);
  return <div className="App" />;
};
```
