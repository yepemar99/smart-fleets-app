'use client'

import { Label, PolarGrid, PolarRadiusAxis, RadialBar, RadialBarChart } from 'recharts'
import { ChartContainer } from '@/components/ui/chart'
import { STATUS_OPTIONS } from '@/views/vehicles/utils'
import { STATUS } from '@/lib/constants'

const chartConfig = {
  visitors: {
    label: 'Visitors',
  },
  safari: {
    label: 'Safari',
    color: 'hsl(var(--chart-2))',
  },
}

export function RadialChart({
  value = 10,
  total = 100,
  label = 'Sdasdas',
  color = 'var(--color-primary)',
  type = false,
}) {
  const chartData = [
    {
      browser: 'safari',
      visitors: value,
      fill: color,
    },
  ]
  const chartValue = (value * 360) / total
  return (
    <div className="h-full  w-full">
      <ChartContainer config={chartConfig} className="mx-auto aspect-square max-h-[250px]">
        <RadialBarChart
          data={chartData}
          startAngle={0}
          endAngle={chartValue}
          innerRadius={80}
          outerRadius={110}
        >
          <PolarGrid
            gridType="circle"
            radialLines={false}
            stroke="none"
            className="first:fill-muted last:fill-background"
            polarRadius={[86, 74]}
          />
          <RadialBar dataKey="visitors" background cornerRadius={10} />
          <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
            <Label
              content={({ viewBox }) => {
                if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                  return (
                    <text
                      x={viewBox.cx}
                      y={viewBox.cy}
                      textAnchor="middle"
                      dominantBaseline="middle"
                    >
                      <tspan
                        x={viewBox.cx}
                        y={viewBox.cy}
                        className="fill-foreground text-4xl font-bold"
                      >
                        {type ? (value == 50 ? STATUS.ERROR : STATUS.OK) : value}
                      </tspan>
                      <tspan
                        x={viewBox.cx}
                        y={(viewBox.cy || 0) + 24}
                        className="fill-muted-foreground"
                      >
                        {label}
                      </tspan>
                    </text>
                  )
                }
              }}
            />
          </PolarRadiusAxis>
        </RadialBarChart>
      </ChartContainer>
    </div>
  )
}
