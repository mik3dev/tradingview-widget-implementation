import axios from 'axios'
import { Intervals } from './intervals'

export interface AnalysisRequest {
  symbol: string
  intervals: Intervals[]
}

export const fetchAnalysis = async ({ symbol, intervals }: AnalysisRequest) => {
  const user = import.meta.env.VITE_API_USER
  const password = import.meta.env.VITE_API_PASSWORD
  const analysisUrl = import.meta.env.VITE_API_URL

  // Create base64 encoded credentials for Basic Auth
  const credentials = btoa(`${user}:${password}`)

  const response = await axios.post(analysisUrl, {
    symbol,
    intervals: intervals.join(','),
  }, {
    headers: {
      'Authorization': `Basic ${credentials}`,
      'Content-Type': 'application/json'
    }
  });

  console.log(response.data);

  if (response.status !== 200) {
    throw new Error(`Request failed with status ${response.status}`)
  }

  if (!response.data?.[0]?.output) {
    throw new Error('No output found')
  }

  return response.data?.[0]?.output;
}
