import { useState } from "react";
import useFinData from "../hooks/useFinData"
import { fetchAnalysis } from "../utils/fetchAnalysis";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog"
import ReactMarkdown from 'react-markdown'
import { Loader2, Maximize2 } from "lucide-react"
import remarkGfm from 'remark-gfm'

export const AICard = () => {
  const { symbol, intervals, studies } = useFinData();
  const [analysis, setAnalysis] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [showFullAnalysis, setShowFullAnalysis] = useState(false)

  const handleRunAnalysis = async () => {
    try {
      setIsLoading(true)
      setIsDialogOpen(false)
      const output = await fetchAnalysis({ symbol, intervals });
      setAnalysis(output);
    } catch (error) {
      console.error('Error running analysis:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const previewAnalysis = analysis.split('\n').slice(0, 5).join('\n')

  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <CardTitle>AI Analysis</CardTitle>
        <CardDescription>
          <Badge variant="destructive">{symbol}</Badge>
          {intervals.map(interval => (<Badge key={interval} className="ml-2">{interval}</Badge>))}
          {studies.map(study => <Badge key={study} className="ml-2" variant="secondary">{study}</Badge>)}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 overflow-hidden">
        <div className="flex flex-col">
          {isLoading ? (
            <div className="flex-1 flex flex-col items-center justify-center text-muted-foreground">
              <Loader2 className="h-8 w-8 animate-spin mb-4" />
              <p>Analyzing {symbol}...</p>
              <p className="text-sm">This might take a few seconds</p>
            </div>
          ) : (
            analysis ? (
              <>
                <div className="overflow-y-auto mb-4">
                  <ReactMarkdown children={previewAnalysis} remarkPlugins={[remarkGfm]} />
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full"
                  onClick={() => setShowFullAnalysis(true)}
                >
                  <Maximize2 className="mr-2 h-4 w-4" />
                  View Full Analysis
                </Button>
              </>
            ) : (
              <div className="flex-1 flex items-center justify-center text-muted-foreground">
                <p>Run analysis to see the results</p>
              </div>
            )
          )}
        </div>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button size="sm" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Analyzing...
                </>
              ) : (
                'Run Analysis'
              )}
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Run AI Analysis</DialogTitle>
              <DialogDescription>
                This will generate an AI analysis for {symbol} with the following intervals: {intervals.join(', ')}
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsDialogOpen(false)}>Cancel</Button>
              <Button onClick={handleRunAnalysis}>Confirm</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardFooter>

      <Dialog open={showFullAnalysis} onOpenChange={setShowFullAnalysis}>
        <DialogContent className="max-w-3xl max-h-[80vh]">
          <DialogHeader>
            <DialogTitle>AI Analysis for {symbol}</DialogTitle>
            <DialogDescription>
              Analysis based on intervals: {intervals.join(', ')}
            </DialogDescription>
          </DialogHeader>
          <div className="overflow-y-auto">
            <ReactMarkdown children={analysis} />
          </div>
          <DialogFooter>
            <Button onClick={() => setShowFullAnalysis(false)}>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Card>
  )
}
