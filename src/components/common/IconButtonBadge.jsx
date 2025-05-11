import { cn } from '@/lib/utils'
import { Bell } from 'lucide-react'
import { Button } from '../ui/button'

export function IconButtonBadge({ className = '', badge = '', children, onClick = () => {} }) {
  return (
    <div className={cn('relative inline-block', className)}>
      <Button onClick={onClick} variant={'inherit'} className="p-0 rounded-xl border transition">
        {children}
      </Button>
      {badge && (
        <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
          {badge}
        </span>
      )}
    </div>
  )
}
