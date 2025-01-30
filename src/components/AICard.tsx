import useFinData from "../hooks/useFinData"
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import ReactMarkdown from 'react-markdown'

export const AICard = () => {
  const { symbol, intervals, studies } = useFinData();

  const content = "Lorem ipsum dolor sit amet consectetur adipisicing elit.";

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
      <CardContent className="flex-1 overflow-auto">
        <div className="h-full">
          <ReactMarkdown children={content} />
        </div>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button size="sm">Run Analysis</Button>
      </CardFooter>
    </Card>
  )
}
