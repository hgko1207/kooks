# Usage

```js
import useInput from "@nooks/use-input";

const App = () => {
  const at = value => !value.includes("@");
  const name = useInput("Mr. ", at);
  return (
    <div className="App">
      <h1>Hello</h1>
      <input placeholder="Name" {...name} />
    </div>
  );
};
```
