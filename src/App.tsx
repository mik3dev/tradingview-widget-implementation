import Tradingview from "./components/Tradingview";

function App() {
  const searchParams = new URLSearchParams(window.location.search);
  const symbol = searchParams.get('symbol') || 'BINANCE:BTCUSDT';
  const rawInterval = searchParams.get('interval') || 'D';
  const validIntervals = ['W', 'D', '240', '60', '30', '15', '5', '1'] as const;
  const interval = validIntervals.includes(rawInterval as (typeof validIntervals)[number]) ? rawInterval as (typeof validIntervals)[number] : 'D';
  const studiesParam = searchParams.get('studies');
  const studies = studiesParam ? studiesParam.split(',') : [];

  return (
    <div id="app" className="w-screen h-screen">
      <Tradingview symbol={symbol} interval={interval} studies={studies} />
    </div>
  )
}

export default App
