'use client'
import Input from '@/components/common/Input'
import Select from '@/components/common/Select'
import { Textarea } from '@/components/common/Textarea'
import { Button } from '@/components/ui/button'
import { STATUS_OPTIONS, VEHICLE_TYPE_OPTIONS } from './utils'
import { useFormik } from 'formik'

const EditVehicle = () => {
  const handleFormSubmit = (values) => {
    // Handle form submission logic here
    console.log('Form submitted:', values)
  }

  const formik = useFormik({
    initialValues: {
      identifier: '',
      model: '',
      type: STATUS_OPTIONS[0].value,
      status: VEHICLE_TYPE_OPTIONS[0].value,
      description: '',
    },
    onSubmit: handleFormSubmit,
  })

  return (
    <div>
      <form className="flex flex-col gap-4" onSubmit={formik.handleSubmit}>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Input
              id={'identifier'}
              label="Indentificador*"
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
              options={STATUS_OPTIONS}
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
              options={VEHICLE_TYPE_OPTIONS}
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
    </div>
  )
}

export default EditVehicle
