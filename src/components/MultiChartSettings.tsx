import { useEffect, useState } from "react"
import { SelectSymbol } from "./SelectSymbol"
import { Button } from "./ui/button"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "./ui/dialog"
import { Label } from "./ui/label"
import { SelectIntervals } from "./SelectIntervals"
import { SelectStudies } from "./SelectStudies"
import { useNavigate } from "react-router-dom"

export const MultiChartSettings = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  const [symbol, setSymbol] = useState("");
  const [intervals, setIntervals] = useState<string[]>([]);
  const [studies, setStudies] = useState<string[]>([])
  const [isEnabled, setIsEnabled] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    if (symbol && intervals.length === 3) {
      setIsEnabled(true)
    } else {
      setIsEnabled(false)
    }
  }, [symbol, intervals, studies])

  const handleSymbolChange = (symbol: string) => {
    setSymbol(symbol);
  }

  const handleIntervalsChange = (intervals: string[]) => {
    setIntervals(intervals);
  }

  const handleStudiesChange = (studies: string[]) => {
    setStudies(studies);
  }

  const handleEnableChange = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    let path = `/multi-charts?symbol=${symbol}&intervals=${intervals.join(",")}`
    if (studies.length > 0) {
      path += `&studies=${studies.join(",")}`
    }
    setOpen(false)
    navigate(path)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {children}
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Settings</DialogTitle>
          <DialogDescription>
            Change the settings of the charts
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
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Studies
            </Label>
            <SelectStudies values={studies} onChange={handleStudiesChange} />
          </div>
        </div>
        <DialogFooter>
          <Button disabled={!isEnabled} onClick={(e) => handleEnableChange(e)}>Update Charts</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
