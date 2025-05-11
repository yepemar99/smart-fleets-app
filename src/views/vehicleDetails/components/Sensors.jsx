import { RadialChart } from '@/components/common/RadialChart'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'

const Sensors = ({ className = '', sensors = [] }) => {
  return (
    <Card className={cn('p-4', className)}>
      <div>
        <h6 className="font-semibold">Sensores</h6>
        <div className="grid grid-cols-4">
          {sensors.map((sensor, index) => {
            return (
              <div
                key={sensor.id + '-' + index}
                className="flex flex-col justify-center items-center gap-2 col-span-1"
              >
                <RadialChart
                  label={sensor.label}
                  total={sensor.type ? (sensor.value ? 100 : 50) : sensor.total}
                  value={sensor.type ? (sensor.value ? 100 : 50) : sensor.value}
                  color={sensor.type ? (sensor.value ? 'green' : 'red') : 'var(--color-primary)'}
                  type={sensor.type}
                />
              </div>
            )
          })}
        </div>
      </div>
    </Card>
  )
}

export default Sensors
