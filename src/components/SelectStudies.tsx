import { useState } from "react"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
import { Button } from "./ui/button"
import { Check, ChevronsUpDown, X } from "lucide-react"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "./ui/command"
import { cn } from "../lib/utils"
import { STUDIES } from "../utils/study-list"
import { Badge } from "./ui/badge"

export interface SelectStudiesProps {
  values: string[]
  onChange: (values: string[]) => void
}

export const SelectStudies = ({ values, onChange }: SelectStudiesProps) => {
  const [open, setOpen] = useState(false)
  const studyKeys = Object.keys(STUDIES)

  const handleSelect = (study: string) => {
    if (values.includes(study)) {
      onChange(values.filter(v => v !== study))
    } else if (values.length < 6) {
      onChange([...values, study])
    }
  }

  const removeStudy = (study: string) => {
    onChange(values.filter(v => v !== study))
  }

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-1 h-8">
        {values.map((study) => (
          <Badge key={study} variant="secondary" className="flex items-center gap-1">
            {study}
            <button
              className="ring-offset-background rounded-full outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              onClick={() => removeStudy(study)}
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
            disabled={values.length >= 6}
          >
            {values.length === 6 ? (
              "Maximum studies selected"
            ) : (
              <>
                Select studies
                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0">
          <Command>
            <CommandInput placeholder="Search study..." />
            <CommandList>
              <CommandEmpty>No study found.</CommandEmpty>
              <CommandGroup>
                {studyKeys.map((study) => (
                  <CommandItem
                    key={study}
                    value={study}
                    onSelect={() => {
                      handleSelect(study)
                      setOpen(false)
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        values.includes(study) ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {study}
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