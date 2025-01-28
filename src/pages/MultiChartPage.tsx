import { useSearchParams } from "react-router-dom";
import Tradingview from "../components/Tradingview";

export default function MultiChartPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const validIntervals = ['W', 'D', '240', '60', '30', '15', '5', '1'] as const;

  const getChartConfig = (index: number) => ({
    symbol: searchParams.get(`symbol${index}`) || `BINANCE:BTCUSDT`,
    interval: (searchParams.get(`interval${index}`) || 'D') as (typeof validIntervals)[number],
    studies: searchParams.get(`studies${index}`)?.split(',') || []
  });

  const charts = [1, 2, 3, 4].map(index => getChartConfig(index));

  return (
    <div className="flex flex-col w-screen h-screen">
      <div className="grid grid-cols-2 gap-4 p-4">
        {charts.map((chart, index) => (
          <div key={index} className="flex flex-col h-[calc(50vh-2rem)]">
            <div className="flex-1">
              <Tradingview
                symbol={chart.symbol}
                interval={chart.interval}
                studies={chart.studies}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}