### React Hooks

- [x] useInput
- [x] useTabs
- [x] useTitle
- [x] useClick
- [x] useHover
- [x] useConfirm
- [x] usePreventLeave
- [x] useBeforeLeave
- [x] useFadeIn
- [x] useNetwork
- [x] useScroll
- [x] useFullscreen
- [x] useNotification
- [x] useAxios

#### Usage

- useState
- useEffect
- useRef

#### Publishing to NPM

```bash
> npm install
  1) package name: ex) @kooks/use-title
  2) description: ex) React Hook to update your document's title
  3) git repository: https://github.com/hgko1207/kooks.git
  4) keywords: react, hooks
  5) author: hgko
  6) license: MIT
```

```bash
> npm i react react-dom

package.json modify
- dependencies -> peerDependencies
```

```bash
> npm login
> npm publish --access public
```
