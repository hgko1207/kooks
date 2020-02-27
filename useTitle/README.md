# @kooks/use-title

React Hook to update your document's title

# Installation

#### yarn

`yarn add @kooks/use-title`

#### npm

`npm i @kooks/use-title`

# Usage

```js
import React from "react";
import useTitle from "@kooks/use-title";

const App = () => {
  useTitle("Hello...");
  return (
    <div>
      <h1>Hi</h1>
    </div>
  );
};
```

### Arguments

| Argument | Type   | Description                                | Required |
| -------- | ------ | ------------------------------------------ | -------- |
| title    | string | The title you want to use on your document | yes      |
