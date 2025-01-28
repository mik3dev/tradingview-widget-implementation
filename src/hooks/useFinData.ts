import { useSearchParams } from "react-router-dom";
import { Studies } from "react-ts-tradingview-widgets";
import { Intervals, validateInterval } from "../utils/intervals";
import { convertToStudies } from "../utils/convert-to-studies";

interface FinDataResult {
  symbol: string;
  interval: Intervals;
  intervals: Intervals[];
  studies: Studies[];
}

const DEFAULT_VALUES = {
  SYMBOL: 'BINANCE:BTCUSDT',
  INTERVAL: 'D' as Intervals,
  INTERVALS: ['D', '240', '60'] as Intervals[],
} as const;

const parseIntervals = (rawIntervals: string | null): Intervals[] => {
  if (!rawIntervals) return DEFAULT_VALUES.INTERVALS;
  return rawIntervals.split(',').map(interval => validateInterval(interval) ?? DEFAULT_VALUES.INTERVAL);
};

const parseStudies = (studiesParam: string | null): Studies[] => {
  if (!studiesParam) return [];
  return convertToStudies(studiesParam.split(','));
};

export default function useFinData(): FinDataResult {
  const [searchParams] = useSearchParams();

  const symbol = searchParams.get('symbol') ?? DEFAULT_VALUES.SYMBOL;
  const interval = validateInterval(searchParams.get('interval')) ?? DEFAULT_VALUES.INTERVAL;
  const intervals = parseIntervals(searchParams.get('intervals'));
  const studies = parseStudies(searchParams.get('studies'));

  return {
    symbol,
    interval,
    intervals,
    studies
  };
}