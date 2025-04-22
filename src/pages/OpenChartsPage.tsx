import { ChartConfig, TradingChart } from "../components/TradingChart";
import useFinData from "../hooks/useFinData";
import { uuidv4 } from "../utils/generate-uuid";
import { Intervals } from "../utils/intervals";


export const OpenChartsPage = () => {
  const { symbol, intervals, studies } = useFinData();

  const createChartConfig = (interval: Intervals): ChartConfig => ({
    id: uuidv4(),
    symbol: symbol ?? "BINANCE:BTCUSDT",
    interval,
    studies
  });

  // Create chart configs for each timeframe
  // Assuming intervals are ordered from largest to smallest timeframe
  const shortTimeframe = createChartConfig(intervals[0] || '60');
  const middleTimeframe = createChartConfig(intervals[1] || '240');
  const largeTimeframe = createChartConfig(intervals[2] || 'D');

  return (
    <main className="w-100 h-[96vh] p-2">
      <div className="grid grid-cols-2 gap-2 h-full">
        {/* Short timeframe chart - second row, first column */}
        <div className="flex flex-col rounded-lg overflow-hidden border border-gray-700">
          <TradingChart config={shortTimeframe} />
        </div>

        {/* Middle timeframe chart - second row, second column */}
        <div className="row-span-2 flex flex-col rounded-lg overflow-hidden border border-gray-700">
          <TradingChart config={middleTimeframe} />
        </div>

        {/* Large timeframe chart - first row, spans both columns */}
        <div className="flex flex-col rounded-lg overflow-hidden border border-gray-700">
          <TradingChart config={largeTimeframe} />
        </div>
      </div>
    </main>
  )
}
