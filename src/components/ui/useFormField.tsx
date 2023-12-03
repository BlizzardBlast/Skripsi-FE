import * as React from 'react'
import {
  useFormContext,
  type FieldError
} from 'react-hook-form'
import { FormFieldContext, FormItemContext } from './form'

const useFormField = (): {
  invalid: boolean
  isDirty: boolean
  isTouched: boolean
  error?: FieldError | undefined
  id: string
  name: string
  formItemId: string
  formDescriptionId: string
  formMessageId: string
} => {
  const fieldContext = React.useContext(FormFieldContext)
  const itemContext = React.useContext(FormItemContext)
  const { getFieldState, formState } = useFormContext()

  const fieldState = getFieldState(fieldContext.name, formState)

  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  if (!fieldContext) {
    throw new Error('useFormField should be used within <FormField>')
  }

  const { id } = itemContext

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState
  }
}

export { useFormField }
