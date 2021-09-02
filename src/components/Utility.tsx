import { createCanvas, PixelPainterStore } from "../stores/PixelPainterStore"


const Utility = () => {
  const state = PixelPainterStore.useState();


  const clear = () => {
    PixelPainterStore.update(state => {state.canvas = createCanvas("#FFFFFF", false)})
  }

  const random = () => {
    PixelPainterStore.update(state => {state.canvas = createCanvas("#FFFFFF", true)})
  }

  return (
    <div className="flex justify-center space-x-3">
      <button className="w-36" onClick={clear}>Clear</button>
      <button className="w-36" onClick={random}>Random color</button>
    </div>
  )
}

export default Utility