import { FundamentalData } from "react-ts-tradingview-widgets";
import useFinData from "../hooks/useFinData";

export const Fundamentals = () => {
  const { symbol } = useFinData();

  return (
    <div className="w-full h-[95%]">
      <FundamentalData colorTheme="dark" symbol={symbol} width="100%" height="100%" />
    </div>
  )
}
