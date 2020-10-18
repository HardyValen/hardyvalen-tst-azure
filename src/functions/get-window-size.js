const GetWindowSize = (setWidth, setHeight) => {
  window.addEventListener("resize", () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  })
}

export default GetWindowSize;