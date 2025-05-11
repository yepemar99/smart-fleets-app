'use client'
import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from 'recharts'
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'

export function RadialChart2({ label = 'Nivel de Combustible', value = 50, total = 100 }) {
  const chartData = [{ value: value, total: total - value < 0 ? 0 : total - value }]
  const chartConfig = {
    value: {
      label: '',
      color: 'hsl(var(--color-primary))',
    },
    total: {
      label: '',
      color: 'hsl(var(--primary-foreground))',
    },
  }

  return (
    <div className="d-flex justify-center items-center h-full w-full">
      <ChartContainer config={chartConfig} className="mx-auto aspect-square w-full max-w-[250px]">
        <RadialBarChart data={chartData} endAngle={180} innerRadius={80} outerRadius={130}>
          <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
          <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
            <Label
              content={({ viewBox }) => {
                if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                  return (
                    <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                      <tspan
                        x={viewBox.cx}
                        y={(viewBox.cy || 0) - 16}
                        className="fill-foreground text-2xl font-bold"
                      >
                        {value.toLocaleString()}
                      </tspan>
                      <tspan
                        x={viewBox.cx}
                        y={(viewBox.cy || 0) + 4}
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
          <RadialBar
            dataKey="total"
            fill="var(--color-accent)"
            stackId="a"
            cornerRadius={5}
            className="stroke-transparent stroke-2"
          />
          <RadialBar
            dataKey="value"
            stackId="a"
            cornerRadius={5}
            fill="var(--color-primary)"
            className="stroke-transparent stroke-2"
          />
        </RadialBarChart>
      </ChartContainer>
    </div>
  )
}
