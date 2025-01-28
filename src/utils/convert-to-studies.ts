import { Studies } from "react-ts-tradingview-widgets";
import { STUDIES } from "./study-list";

export const studyArr = [
  "ACCD@tv-basicstudies",
  "studyADR@tv-basicstudies",
  "AROON@tv-basicstudies",
  "ATR@tv-basicstudies",
  "AwesomeOscillator@tv-basicstudies",
  "BB@tv-basicstudies",
  "BollingerBandsR@tv-basicstudies",
  "BollingerBandsWidth@tv-basicstudies",
  "CMF@tv-basicstudies",
  "ChaikinOscillator@tv-basicstudies",
  "chandeMO@tv-basicstudies",
  "ChoppinessIndex@tv-basicstudies",
  "CCI@tv-basicstudies",
  "CRSI@tv-basicstudies",
  "CorrelationCoefficient@tv-basicstudies",
  "DetrendedPriceOscillator@tv-basicstudies",
  "DM@tv-basicstudies",
  "DONCH@tv-basicstudies",
  "DoubleEMA@tv-basicstudies",
  "EaseOfMovement@tv-basicstudies",
  "EFI@tv-basicstudies",
  "ENV@tv-basicstudies",
  "FisherTransform@tv-basicstudies",
  "HV@tv-basicstudies",
  "hullMA@tv-basicstudies",
  "IchimokuCloud@tv-basicstudies",
  "KLTNR@tv-basicstudies",
  "KST@tv-basicstudies",
  "LinearRegression@tv-basicstudies",
  "MACD@tv-basicstudies",
  "MOM@tv-basicstudies",
  "MF@tv-basicstudies",
  "MoonPhases@tv-basicstudies",
  "MASimple@tv-basicstudies",
  "MAExp@tv-basicstudies",
  "MAWeighted@tv-basicstudies",
  "OBV@tv-basicstudies",
  "PSAR@tv-basicstudies",
  "PivotPointsHighLow@tv-basicstudies",
  "PivotPointsStandard@tv-basicstudies",
  "PriceOsc@tv-basicstudies",
  "PriceVolumeTrend@tv-basicstudies",
  "ROC@tv-basicstudies",
  "RSI@tv-basicstudies",
  "VigorIndex@tv-basicstudies",
  "VolatilityIndex@tv-basicstudies",
  "SMIErgodicIndicator@tv-basicstudies",
  "SMIErgodicOscillator@tv-basicstudies",
  "Stochastic@tv-basicstudies",
  "StochasticRSI@tv-basicstudies",
  "TripleEMA@tv-basicstudies",
  "Trix@tv-basicstudies",
  "UltimateOsc@tv-basicstudies",
  "VSTOP@tv-basicstudies",
  "Volume@tv-basicstudies",
  "VWAP@tv-basicstudies",
  "MAVolumeWeighted@tv-basicstudies",
  "WilliamR@tv-basicstudies",
  "WilliamsAlligator@tv-basicstudies",
  "WilliamsFractal@tv-basicstudies",
  "ZigZag@tv-basicstudies"
]


export const convertToStudy = (study: string): Studies | undefined => {
  if (study === '') return undefined;
  const s = STUDIES[study.toLowerCase() as keyof typeof STUDIES];
  return studyArr.includes(s) ? s as Studies : undefined;

}

export const convertToStudies = (studies: string[]): Studies[] => {
  return studies.map(convertToStudy).filter((study): study is Studies => study !== undefined);
}