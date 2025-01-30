import { AdvancedRealTimeChart, Studies } from "react-ts-tradingview-widgets";
import { Intervals } from "../utils/intervals";
import { useEffect, useState } from "react";

export interface ChartConfig {
  id: string;
  symbol: string;
  interval: Intervals;
  studies: Studies[];
}

export interface TradingChartProps {
  config: ChartConfig;
}

export const TradingChart = ({ config }: TradingChartProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  if (!isMounted) {
    return <div className="flex-1 h-full bg-gray-800" />;
  }

  return (
    <div className="flex-1 h-full">
      <AdvancedRealTimeChart
        theme="dark"
        symbol={config.symbol}
        interval={config.interval}
        studies={config.studies}
        width="100%"
        height="100%"
        autosize
        key={config.id} // Add key to force new instance on config changes
      />
    </div>
  );
};