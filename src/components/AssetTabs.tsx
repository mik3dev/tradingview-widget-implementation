import { Sparkle } from "lucide-react";
import { AICard } from "./AICard";
import { CryptoHeatMap } from "./CryptoHeatMap";
import { Fundamentals } from "./Fundamentals";
import { FxHeatMap } from "./FxHeatMap";
import { Sentiments } from "./Sentiments";
import { StockHeatMap } from "./StockHeatMap";
import { SymbolData } from "./SymbolData";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

export const AssetTabs = () => {


  return (
    <Tabs defaultValue="symbol" className="h-full flex flex-col">
      <TabsList className="w-full">
        <TabsTrigger value="sentiment">Sentiment</TabsTrigger>
        <TabsTrigger value="symbol">Symbol Info</TabsTrigger>
        <TabsTrigger value="fundamentals">Fundamentals</TabsTrigger>
        <TabsTrigger value="stock_heat_map">Stock Heat Map</TabsTrigger>
        <TabsTrigger value="crypto_heat_map">Crypto Heat Map</TabsTrigger>
        <TabsTrigger value="forex_heat_map">Fx Heat Map</TabsTrigger>
        <TabsTrigger value="ai"><Sparkle className="mr-2 h-3 w-3" /> AI Analysis</TabsTrigger>
      </TabsList>
      <TabsContent value="sentiment" className="flex-1">
        <Sentiments />
      </TabsContent>
      <TabsContent value="symbol" className="flex-1">
        <SymbolData />
      </TabsContent>
      <TabsContent value="fundamentals" className="flex-1">
        <Fundamentals />
      </TabsContent>
      <TabsContent value="stock_heat_map" className="flex-1">
        <StockHeatMap />
      </TabsContent>
      <TabsContent value="crypto_heat_map" className="flex-1">
        <CryptoHeatMap />
      </TabsContent>
      <TabsContent value="forex_heat_map" className="flex-1">
        <FxHeatMap />
      </TabsContent>
      <TabsContent value="ai" className="flex-1">
        <AICard />
      </TabsContent>
    </Tabs>
  )
}
