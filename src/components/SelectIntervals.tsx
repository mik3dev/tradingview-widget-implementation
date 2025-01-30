import { useState } from "react"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
import { Button } from "./ui/button"
import { Check, ChevronsUpDown, X } from "lucide-react"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "./ui/command"
import { cn } from "../lib/utils"
import { VALID_INTERVALS } from "../utils/intervals"
import { Badge } from "./ui/badge"

export interface SelectIntervalsProps {
  values: string[]
  onChange: (values: string[]) => void
}

export const SelectIntervals = ({ values, onChange }: SelectIntervalsProps) => {
  const [open, setOpen] = useState(false)

  const handleSelect = (interval: string) => {
    if (values.includes(interval)) {
      onChange(values.filter(v => v !== interval))
    } else if (values.length < 3) {
      onChange([...values, interval])
    }
  }

  const removeInterval = (interval: string) => {
    onChange(values.filter(v => v !== interval))
  }

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-1 h-8">
        {values.map((interval) => (
          <Badge key={interval} variant="secondary" className="flex items-center gap-1">
            {interval}
            <button
              className="ring-offset-background rounded-full outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              onClick={() => removeInterval(interval)}
            >
              <X className="h-3 w-3" />
              <span className="sr-only">Remove</span>
            </button>
          </Badge>
        ))}
      </div>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[280px] justify-between"
            disabled={values.length >= 3}
          >
            {values.length === 3 ? (
              "Maximum intervals selected"
            ) : (
              <>
                Select intervals
                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0">
          <Command>
            <CommandInput placeholder="Search interval..." />
            <CommandList>
              <CommandEmpty>No interval found.</CommandEmpty>
              <CommandGroup>
                {VALID_INTERVALS.map((interval) => (
                  <CommandItem
                    key={interval}
                    value={interval}
                    onSelect={() => {
                      handleSelect(interval)
                      setOpen(false)
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        values.includes(interval) ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {interval}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  )
}
