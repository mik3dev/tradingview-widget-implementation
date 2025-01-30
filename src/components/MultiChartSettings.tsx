import { useState } from "react"
import { SelectSymbol } from "./SelectSymbol"
import { Button } from "./ui/button"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "./ui/dialog"
import { Label } from "./ui/label"
import { SelectIntervals } from "./SelectIntervals"

export const MultiChartSettings = ({ children }: { children: React.ReactNode }) => {
  const [symbol, setSymbol] = useState("");
  const [intervals, setIntervals] = useState<string[]>([]);

  const handleSymbolChange = (symbol: string) => {
    setSymbol(symbol);
  }

  const handleIntervalsChange = (intervals: string[]) => {
    setIntervals(intervals);
  }

  return (
    <Dialog>
      {children}
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Symbol
            </Label>
            <SelectSymbol value={symbol} onChange={handleSymbolChange} />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Intervals
            </Label>
            <SelectIntervals values={intervals} onChange={handleIntervalsChange} />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
