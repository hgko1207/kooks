export const useClick = onClick => {
  if (typeof onClick !== "function") {
    return;
  }
  const element = useRef();
  useEffect(() => {
    // componentWillMount때 호출된다.
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
    // componentWillUnMount때 호출된다.
    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onClick);
      }
    };
  }, []);
  return element;
};
