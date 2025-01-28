import Tradingview from "./Tradingview";

interface MultiChartProps {
  charts: Array<{
    symbol: string;
    interval: 'W' | 'D' | '240' | '60' | '30' | '15' | '5' | '1';
    studies: string[];
  }>;
}

function MultiChart({ charts }: MultiChartProps) {
  return (
    <div className="grid grid-cols-2 gap-4 w-full h-full p-4">
      {charts.map((chart, index) => (
        <div key={index} className="w-full h-[calc(50vh-2rem)]">
          <Tradingview
            symbol={chart.symbol}
            interval={chart.interval}
            studies={chart.studies}
          />
        </div>
      ))}
    </div>
  );
}

export default MultiChart;
