import { TechnicalAnalysis } from 'react-ts-tradingview-widgets'
import { Intervals } from '../utils/intervals'

export interface SentimentProps {
  symbol: string
  interval: Intervals
}

const convertInterval = (interval: Intervals): "1W" | "1D" | "4h" | "2h" | "1h" | "30m" | "15m" | "5m" | "1m" => {
  switch (interval) {
    case 'W':
      return '1W'
    case 'D':
      return '1D'
    case '240':
      return '4h'
    case '120':
      return '2h'
    case '60':
      return '1h'
    case '30':
      return '30m'
    case '15':
      return '15m'
    case '5':
      return '5m'
    case '1':
      return '1m'
    default:
      return '1D'
  }
}

export const Sentiment = ({ symbol, interval }: Readonly<SentimentProps>) => {

  return (
    <div className='w-full h-full'>
      <TechnicalAnalysis symbol={symbol} interval={convertInterval(interval)} colorTheme="dark" width="100%" height="100%" />
    </div>
  )
}
