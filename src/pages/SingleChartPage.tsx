import useFinData from "../hooks/useFinData";
import { ChartConfig, TradingChart } from "../components/TradingChart";
import { uuidv4 } from "../utils/generate-uuid";

export default function SingleChartPage() {
  const { symbol, interval, studies } = useFinData();

  const chartConfig: ChartConfig = {
    id: uuidv4(),
    symbol: symbol ?? "BINANCE:BTCUSDT",
    interval,
    studies
  };

  return (
    <div id="app" className="w-screen h-screen">
      <TradingChart config={chartConfig} />
    </div>
  );
}