'use client'
import { Bar, BarChart, CartesianGrid, XAxis, ResponsiveContainer } from 'recharts'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'

const chartConfig = {
  value: {
    label: 'Valor',
    color: 'hsl(var(--chart-1))',
  },
  total: {
    label: 'Total',
    color: 'hsl(var(--chart-2))',
  },
}

export function Barchart({ label = 'Sensores', value = 50, total = 100 }) {
  const chartData = [{ label: label, value: value, total: total }]

  return (
    <div className="h-full w-full">
      {/* Aquí le damos h-full al ChartContainer */}
      <ChartContainer config={chartConfig} className="h-full w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData}>
            <XAxis dataKey="label" tickLine={false} tickMargin={10} axisLine={false} />
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <Bar dataKey="value" stackId="a" fill="var(--color-primary)" radius={[0, 0, 4, 4]} />
            <Bar dataKey="total" stackId="a" fill="var(--color-accent)" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </ChartContainer>
    </div>
  )
}
