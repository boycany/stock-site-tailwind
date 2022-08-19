import "./index.css";

new TradingView.MediumWidget({
    symbols: [
      ["Apple", "AAPL|1D"],
      ["Google", "GOOGL|1D"],
      ["Microsoft", "MSFT|1D"],
    ],
    chartOnly: false,
    width: "100%",
    height: "100%",
    locale: "zh_TW",
    colorTheme: "dark",
    autosize: true,
    showVolume: false,
    hideDateRanges: false,
    scalePosition: "no",
    scaleMode: "Normal",
    fontFamily:
      "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
    noTimeScale: false,
    valuesTracking: "0",
    chartType: "area",
    fontColor: "rgba(0, 0, 0, 1)",
    gridLineColor: "rgba(0, 0, 0, 0.18)",
    backgroundColor: "rgba(255, 255, 255, 0)",
    lineColor: "#2962ff",
    topColor: "rgba(41, 98, 255, 0.3)",
    bottomColor: "rgba(41, 98, 255, 0)",
    lineWidth: 3,
    container_id: "tradingview_838bc",
  });