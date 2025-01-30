import useFinData from "../hooks/useFinData"
import { Sentiment } from "./Sentiment"

export const Sentiments = () => {
  const { symbol, intervals } = useFinData()

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 h-[95%]">
      {intervals.map((interval) => (
        <Sentiment key={interval} symbol={symbol} interval={interval} />
      ))}
    </div>
  )
}
