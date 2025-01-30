import { useEffect, useState } from "react"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
import { Button } from "./ui/button"
import { Check, ChevronsUpDown } from "lucide-react"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "./ui/command"
import { symbols } from "../utils/symbols"
import { cn } from "../lib/utils"

export interface SelectSymbolProps {
  value?: string
  onChange?: (value: string) => void
}

export const SelectSymbol = ({ value, onChange }: SelectSymbolProps) => {
  const [open, setOpen] = useState(false)
  const [_value, setValue] = useState("")

  useEffect(() => {
    setValue(value ?? "")
  }, [value])

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[280px] justify-between"
        >
          {_value
            ? symbols.find((symbol) => symbol === _value)
            : "Select Symbol..."}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search symbol..." />
          <CommandList>
            <CommandEmpty>No symbol found.</CommandEmpty>
            <CommandGroup>
              {symbols.map((symbol) => (
                <CommandItem
                  key={symbol}
                  value={symbol}
                  onSelect={(currentValue) => {
                    setValue(currentValue === _value ? "" : currentValue)
                    onChange?.(currentValue === _value ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  {symbol}
                  <Check
                    className={cn(
                      "ml-auto",
                      _value === symbol ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
