import { Input as TextField } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const Input = ({
  name = '',
  label = '',
  value = '',
  type = 'text',
  id = '',
  placeholder = '',
  onChange = () => {},
  onBlur = () => {},
}) => {
  return (
    <div className="flex flex-col gap-2">
      {label && <Label htmlFor={id}>{label}</Label>}
      <TextField
        id={id}
        name={name}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  )
}

export default Input
