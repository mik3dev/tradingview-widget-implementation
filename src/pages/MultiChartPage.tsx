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
    <main className="w-100 h-[96vh] p-2">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 h-full">
        {charts.map((chartConfig) => (
          <div key={chartConfig.id} className="flex flex-col rounded-lg overflow-hidden border border-gray-700">
            <TradingChart config={chartConfig} />
          </div>
        ))}
      </div>
    </main>
  );
}