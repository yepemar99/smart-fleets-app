'use client'
import { AlertDestructive } from '@/components/common/Alert'
import Avatar from '@/components/common/Avatar'
import { Dialog } from '@/components/common/Dialog'
import { IconButtonBadge } from '@/components/common/IconButtonBadge'
import LightStatus from '@/components/common/LigthStatus'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { History } from 'lucide-react'
import { CarFront } from 'lucide-react'
import { Bell } from 'lucide-react'
import { useState } from 'react'

const styles = {
  gridCells: 'flex flex-col justify-center col-span-2',
}

const VehicleInfo = ({
  className = '',
  model = '-',
  identificador = '-',
  tipo = '-',
  status = '-',
  description = '',
  fails = [],
  showAlerts = false,
  onShowAlerts = () => {},
}) => {
  return (
    <Card className={cn('p-4 relative', className)}>
      <div className="d-flex absolute top-3 right-3">
        {!showAlerts ? (
          <IconButtonBadge onClick={onShowAlerts} className="mr-2">
            <History size={20} />
          </IconButtonBadge>
        ) : (
          <IconButtonBadge onClick={onShowAlerts} className="mr-2">
            <CarFront size={20} />
          </IconButtonBadge>
        )}

        <div className="relative inline-block">
          {fails.length > 0 && (
            <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
              {fails.length}
            </span>
          )}
          <Dialog
            title="Fallos del vehiculo en tiempo real"
            buttonComponent={
              <Button variant={'inherit'} className={'rounded-xl border transition'}>
                <Bell size={20} />
              </Button>
            }
          >
            <div className="w-full max-h-128">
              <div>
                {fails.length > 0 ? (
                  fails.map((item, index) => {
                    return (
                      <AlertDestructive
                        className="mb-2"
                        key={item.id + '-' + index}
                        status="ERROR"
                        msg={item.label}
                      />
                    )
                  })
                ) : (
                  <div className="d-flex w-full h-full justify-content items-center">
                    <h5>No hay fallas detectadas</h5>
                  </div>
                )}
              </div>
            </div>
          </Dialog>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-9 gap-2">
        <div className={'flex gap-2 items-center col-span-3'}>
          <div>
            <Avatar src={''} alt="" fallback="A" />
          </div>
          <div>
            <h6 className="font-semibold">Identificador:</h6>
            <h6>{identificador}</h6>
          </div>
        </div>
        <div className={styles.gridCells}>
          <h6 className="font-semibold">Modelo:</h6>
          <h6>{model}</h6>
        </div>
        <div className={styles.gridCells}>
          <h6 className="font-semibold">Tipo:</h6>
          <h6>{tipo}</h6>
        </div>
        <div className={styles.gridCells}>
          <h6 className="font-semibold">Estado:</h6>
          <div className="flex items-center gap-2">
            <LightStatus status={status} />
            <h6>{status}</h6>
          </div>
        </div>
      </div>

      {/* {description && (
        <div className="mt-4">
          <h6 className="font-semibold">Descripción:</h6>
          <p className="text-sm">{description}</p>
        </div>
      )} */}
    </Card>
  )
}

export default VehicleInfo
