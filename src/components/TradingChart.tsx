import { AdvancedRealTimeChart, Studies } from "react-ts-tradingview-widgets";
import { Intervals } from "../utils/intervals";

export interface ChartConfig {
  id: string;
  symbol: string;
  interval: Intervals;
  studies: Studies[];

}

export interface TradingChartProps {
  config: ChartConfig;
}

export const TradingChart = ({ config }: TradingChartProps) => (
  <div className="flex-1 h-full">
    <AdvancedRealTimeChart
      theme="dark"
      symbol={config.symbol}
      interval={config.interval}
      studies={config.studies}
      width="100%"
      height="100%"
      autosize
    />
  </div>
);