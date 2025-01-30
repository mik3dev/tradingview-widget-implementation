import { SymbolInfo } from "react-ts-tradingview-widgets"
import useFinData from "../hooks/useFinData";

export const SymbolData = () => {
  const { symbol } = useFinData();

  return (
    <div className="flex-1">
      <SymbolInfo colorTheme="dark" symbol={symbol} width="100%" />
    </div>
  )
}
