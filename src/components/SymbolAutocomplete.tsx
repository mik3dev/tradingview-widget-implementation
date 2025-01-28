import { useState, useEffect, useRef } from 'react';

// Common cryptocurrency trading pairs
const DEFAULT_SYMBOLS = [
  'BINANCE:BTCUSDT',
  'BINANCE:ETHUSDT',
  'BINANCE:BNBUSDT',
  'BINANCE:XRPUSDT',
  'BINANCE:ADAUSDT',
  'BINANCE:DOGEUSDT',
  'BINANCE:DOTUSDT',
  'BINANCE:LINKUSDT',
  'BINANCE:SOLUSDT',
  'BINANCE:MATICUSDT'
];

interface SymbolAutocompleteProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function SymbolAutocomplete({ value, onChange, placeholder = 'Search symbol...' }: SymbolAutocompleteProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredSymbols, setFilteredSymbols] = useState<string[]>([]);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Filter symbols based on search term
    const filtered = DEFAULT_SYMBOLS.filter(symbol =>
      symbol.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredSymbols(filtered);
  }, [searchTerm]);

  useEffect(() => {
    // Close dropdown when clicking outside
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setSearchTerm(newValue);
    setIsOpen(true);
  };

  const handleSelectSymbol = (symbol: string) => {
    onChange(symbol);
    setSearchTerm('');
    setIsOpen(false);
  };

  return (
    <div ref={wrapperRef} className="relative w-full">
      <input
        type="text"
        value={searchTerm || value}
        onChange={handleInputChange}
        onFocus={() => setIsOpen(true)}
        placeholder={placeholder}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
      {isOpen && filteredSymbols.length > 0 && (
        <ul className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-auto">
          {filteredSymbols.map((symbol) => (
            <li
              key={symbol}
              onClick={() => handleSelectSymbol(symbol)}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              {symbol}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
