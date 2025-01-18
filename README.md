# FinChart - TradingView Widget Implementation

A React application that implements the TradingView Advanced Real-Time Chart Widget. This project provides a flexible and customizable way to display financial charts for various trading pairs and timeframes.

## Features

- Real-time financial charts powered by TradingView
- Customizable trading pairs (default: BINANCE:BTCUSDT)
- Multiple timeframe options (1m, 5m, 15m, 30m, 1h, 4h, 1D, 1W)
- Support for custom technical analysis studies
- URL parameter customization for easy chart sharing

## Quick Start

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

## URL Parameters

The chart can be customized using the following URL parameters:

- `symbol`: Trading pair (e.g., `BINANCE:BTCUSDT`, `BINANCE:ETHUSDT`)
- `interval`: Timeframe (`1`, `5`, `15`, `30`, `60`, `240`, `D`, `W`)
- `studies`: Comma-separated list of technical indicators

Example URL:

```
http://localhost:5173/?symbol=BINANCE:ETHUSDT&interval=15&studies=RSI,MACD
```

#### List of studies

- "24h_Volume",
- "Accumulation_Distribution",
- "Advance_Decline_Line",
- "Advance_Decline_Ratio",
- "Advance_Decline_Ratio_Bars",
- "Arnaud_Legoux_Moving_Average",
- "Aroon",
- "Average_Day_Range",
- "Average_Directional_Index",
- "Average_True_Range",
- "Awesome_Oscillator",
- "Balance_of_Power",
- "BBTrend",
- "Bollinger_Bands",
- "Bollinger_Bands_B",
- "Bollinger_Bands_Width",
- "Bollinger_Bars",
- "Bull_Bear_Power",
- "Chaikin_Money_Flow",
- "Chaikin_Oscillator",
- "Chande_Kroll_Stop",
- "Chande_Momentum_Oscillator",
- "Chop_Zone",
- "Choppiness_Index",
- "CCI",
- "Connors_RSI",
- "Coppock_Curve",
- "CorrelationCoefficient@tv-basicstudies",
- "Correlation_Coeff",
- "Cumulative_Volume_Delta",
- "Cumulative_Volume_Index",
- "DPO",
- "DMI",
- "Donchian_Channels",
- "DEMA",
- "EOM",
- "EFI",
- "ENV",
- "Fisher_Transform",
- "Gaps",
- "Historical_Volatility",
- "Hull_MA",
- "Ichimoku_Cloud",
- "Keltner_Channels",
- "Klinger_Oscillator",
- "Know_Sure_Thing",
- "Least_Squares_Moving_Average",
- "Linear_Regression",
- "MA_Cross",
- "Mass_Index",
- "McGinley_Dynamic",
- "Median",
- "Momentum",
- "Money_Flow",
- "MoonPhases@tv-basicstudies",
- "Moon_Phases",
- "MACD",
- "EMA",
- "MA_Ribbon",
- "SMA",
- "WMA",
- "Multi-Time_Period_Charts",
- "Net_Volume",
- "On_Balance_Volume",
- "Open_Interest",
- "PSAR",
- "Performance",
- "Pivot_Points_High_Low",
- "Pivot_Points_Standard",
- "Price_Oscillator",
- "Price_Target",
- "PriceVolumeTrend@tv-basicstudies",
- "Price_Volume_Trend",
- "Rank_Correlation_Index",
- "ROC",
- "RCI_Ribbon",
- "RSI",
- "Relative_Vigor_Index",
- "Relative_Volatility_Index",
- "Relative_Volume_at_Time",
- "BookerIntradayPivots@tv-basicstudies",
- "BookerKnoxvilleDivergence@tv-basicstudies",
- "BookerMissedPivots@tv-basicstudies",
- "BookerReversal@tv-basicstudies",
- "Rob_Booker_Ghost_Pivots_v2",
- "Divergence_Indicator",
- "Seasonality",
- "SMI_Ergodic_Indicator_Oscillator",
- "SMI_Ergodic_Oscillator",
- "Smoothed_Moving_Average",
- "Stochastic",
- "SMI",
- "Stochastic_RSI",
- "Supertrend",
- "Technical_Ratings",
- "Time_Weighted_Average_Price",
- "Trading_Sessions",
- "Trend_Strength_Index",
- "TEMA",
- "TRIX",
- "True_Strength_Indicator",
- "Ultimate_Oscillator",
- "UP_DOWN_Volume",
- "Visible_Average_Price",
- "Volatility_Stop",
- "Volume@tv-basicstudies",
- "Volume_Delta",
- "Volume_Oscillator",
- "VWAP",
- "VWMA",
- "Vortex_Indicator",
- "Williams_Alligator",
- "Whilliams_Fractals",
- "Willams_R",
- "Woodies_CCI",
- "Zig_Zag"

## Tech Stack

- React + TypeScript
- Vite
- TailwindCSS
- TradingView Charting Library

## Development

This project uses Vite as the build tool and development server. The configuration includes:

- TypeScript support
- ESLint for code quality
- TailwindCSS for styling
- Hot Module Replacement (HMR)

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
  // Set the react version
  settings: { react: { version: "18.3" } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules,
  },
});
```
