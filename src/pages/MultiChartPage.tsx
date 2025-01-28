import useFinData from "../hooks/useFinData";
import { Intervals } from "../utils/intervals";
import { uuidv4 } from "../utils/generate-uuid";
import { ChartConfig, TradingChart } from "../components/TradingChart";


export default function MultiChartPage() {
  const { symbol, intervals, studies } = useFinData();

  const createChartConfig = (interval: Intervals): ChartConfig => ({
    id: uuidv4(),
    symbol: symbol ?? "BINANCE:BTCUSDT",
    interval,
    studies
  });

  const charts = intervals.map(createChartConfig);

  return (
    <main className="w-full h-screen bg-gray-900 p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
        {charts.map((chartConfig) => (
          <div key={chartConfig.id} className="flex flex-col h-[calc(50vh-1rem)] rounded-lg overflow-hidden border border-gray-700">
            <TradingChart config={chartConfig} />
          </div>
        ))}
      </div>
    </main>
  );
}