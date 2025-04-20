import { Textarea as TextareaComponent } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'

export function Textarea({
  name = '',
  id = '',
  placeholder = '',
  label = '',
  value = '',
  onChange = () => {},
  onBlur = () => {},
  error = '',
  disabled = false,
}) {
  return (
    <div className="flex flex-col gap-2">
      {label && <Label htmlFor={id}>{label}</Label>}
      <TextareaComponent
        name={name}
        rows={4}
        className="resize-none"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        id={id}
        disabled={disabled}
      />
    </div>
  )
}
