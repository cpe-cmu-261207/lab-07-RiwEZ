import { PixelPainterStore } from "../stores/PixelPainterStore"

type SelectColorButtonProps = {
  color: string;
}

const SelectColorButton = ({ color }: SelectColorButtonProps) => {
  const state = PixelPainterStore.useState();

  //modify this function to highlight correctly
  const computeRingSize = () => {
    if (color === state.selectedColor) {
      return "ring-8 ring-green-400"
    }
    return ""
  }

  return (
    <div className={`${computeRingSize()} rounded-md border-black border-2 w-12 h-12 cursor-pointer`}
      style={{ backgroundColor: color }}
      onClick={() => PixelPainterStore.update(state => {state.selectedColor = color})}
    >
    </div>
  )
}

export default SelectColorButton