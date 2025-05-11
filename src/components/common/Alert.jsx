import { AlertCircle } from 'lucide-react'

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

export function AlertDestructive({ status = 'ERROR', msg = '', className = '' }) {
  return (
    <Alert className={className} variant="destructive">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>{status}</AlertTitle>
      <AlertDescription>{msg}</AlertDescription>
    </Alert>
  )
}
