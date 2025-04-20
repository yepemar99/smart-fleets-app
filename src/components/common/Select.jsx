import {
  Select as SelectRoot,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Label } from '../ui/label'

const Select = ({
  name = '',
  id = '',
  label = '',
  placeholder = '',
  options = [],
  value = '',
  onChange = () => {},
  onBlur = () => {},
}) => {
  return (
    <div className="flex flex-col gap-2">
      {label && <Label htmlFor={id}>{label}</Label>}
      <SelectRoot id={id} name={name} value={value} onValueChange={onChange} onBlur={onBlur}>
        <SelectTrigger className={'w-full'}>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map((option, index) => (
            <SelectItem
              key={`select-${option.label}-${option.value}-${index}`}
              value={option.value}
            >
              {option.icon} {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </SelectRoot>
    </div>
  )
}

export default Select
