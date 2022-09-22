import * as React from "react"


const useResize = (size, initialState = false) => {

  const [state, setState] = React.useState(initialState);

  React.useEffect(() => {
    function handleResize() {
      const width = getWidth();
      setState(width < size)
    }

    window.addEventListener('resize',  handleResize)
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, [])

  function getWidth() {
    let xWidth;
    if(window.screen != null) xWidth = window.screen.width;
    if(window.innerWidth != null) xWidth = window.innerWidth;
    if(document.body != null) xWidth = document.body.clientWidth;
    return xWidth;
  }

  return [state]
}


export default useResize;
