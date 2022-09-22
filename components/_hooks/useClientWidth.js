import * as React from "react"


const useClientWidth = () => {

  const [width, setWidth] = React.useState(0);

  React.useEffect(() => {
    window.addEventListener('resize',  () => setWidth(getWidth()))
    setWidth(getWidth())
  }, [])

  function getWidth() {
    let xWidth;
    if(window.screen != null) xWidth = window.screen.width;
    if(window.innerWidth != null) xWidth = window.innerWidth;
    if(document.body != null) xWidth = document.body.clientWidth;
    return xWidth;
  }

  return [width]
}


export default useClientWidth;
