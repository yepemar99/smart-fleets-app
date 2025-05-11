import { STATUS } from '@/lib/constants'

const LightStatus = ({ status = STATUS.OK }) => {
  return (
    <div
      className={`w-2 h-2 rounded-full ${status == STATUS.ERROR ? 'bg-red-600' : 'bg-green-600'}`}
    />
  )
}

export default LightStatus
