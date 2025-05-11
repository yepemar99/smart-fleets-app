'use client'
import Input from '@/components/common/Input'
import Select from '@/components/common/Select'
import { Textarea } from '@/components/common/Textarea'
import { Button } from '@/components/ui/button'
import { STATUS_OPTIONS, VEHICLE_TYPE_OPTIONS } from './utils'
import { useFormik } from 'formik'
import { useState } from 'react'
import { Progress } from '@/components/ui/progress'
import { apiService } from '@/services/api'
import { toast } from 'react-toastify'

const EditVehicle = () => {
  const [loading, setLoading] = useState(0)

  const handleFormSubmit = async (values) => {
    try {
      console.log('values', values)
      setLoading(20)
      const data = await apiService.createVehicle({
        vehicleId: values.identifier,
        model: values.model,
        active: false,
        description: values.description,
        status: values.status,
        type: values.type,
      })
      setLoading(80)
      setLoading(100)
      setLoading(0)
      toast.success('Vehículo creado correctamente')
    } catch (error) {
      setLoading(0)
      toast.error('Error al crear el vehículo')
    }
  }

  const formik = useFormik({
    initialValues: {
      identifier: '',
      model: '',
      type: VEHICLE_TYPE_OPTIONS[0].value,
      status: STATUS_OPTIONS[0].value,
      description: '',
    },
    onSubmit: handleFormSubmit,
  })

  return (
    <div>
      {loading !== 0 ? (
        <div className="flex items-center justify-center my-4">
          <Progress value={33} />
        </div>
      ) : (
        <form className="flex flex-col gap-4" onSubmit={formik.handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Input
                id={'identifier'}
                label="Identificador*"
                placeholder="PW-800"
                name="identifier"
                value={formik.values.identifier}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.identifier && formik.errors.identifier}
              />
            </div>
            <div>
              <Input
                id={'identifier'}
                label="Modelo*"
                name="model"
                value={formik.values.model}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.model && formik.errors.model}
              />
            </div>
            <div>
              <Select
                id="{`vehicle-type`}"
                label="Tipo*"
                name="type"
                options={VEHICLE_TYPE_OPTIONS}
                value={formik.values.type}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.type && formik.errors.type}
              />
            </div>
            <div>
              <Select
                id="{`vehicle-status`}"
                label="Estado*"
                name="status"
                options={STATUS_OPTIONS}
                value={formik.values.status}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.status && formik.errors.status}
              />
            </div>
            <div className="col-span-2">
              <Textarea
                id="description"
                label="Descripción"
                placeholder="El vehículo tiene una disposición ..."
                name="description"
                value={formik.values.description}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.description && formik.errors.description}
              />
            </div>
          </div>
          <div className="flex justify-end gap-2">
            <Button type="submit">Guardar</Button>
          </div>
        </form>
      )}
    </div>
  )
}

export default EditVehicle
