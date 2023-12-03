import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'
import type * as LabelPrimitive from '@radix-ui/react-label'
import { Slot } from '@radix-ui/react-slot'
import * as React from 'react'
import {
  Controller,
  FormProvider,
  type ControllerProps,
  type FieldPath,
  type FieldValues
} from 'react-hook-form'
import { useFormField } from './useFormField'

const Form = FormProvider

interface FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> {
  name: TName
}

export const FormFieldContext = React.createContext<FormFieldContextValue>(
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  {} as FormFieldContextValue
)

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
    ...props
  }: ControllerProps<TFieldValues, TName>): JSX.Element => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  )
}

interface FormItemContextValue {
  id: string
}

export const FormItemContext = React.createContext<FormItemContextValue>(
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  {} as FormItemContextValue
)

const FormItem = React.forwardRef<
HTMLDivElement,
React.HTMLAttributes<HTMLDivElement> & {
  className?: string
}
>(({ className, ...props }, ref) => {
  const id = React.useId()

  return (
    <FormItemContext.Provider value={{ id }}>
      <div ref={ref} className={cn('space-y-2', className)} {...props} />
    </FormItemContext.Provider>
  )
})
FormItem.displayName = 'FormItem'

const FormLabel = React.forwardRef<
React.ElementRef<typeof LabelPrimitive.Root>,
React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> & {
  className?: string
}
>(({ className, ...props }, ref) => {
  const { error, formItemId } = useFormField()

  return (
    <Label
      ref={ref}
      className={cn((error != null && error !== undefined) && 'text-destructive', className)}
      htmlFor={formItemId}
      {...props}
    />
  )
})
FormLabel.displayName = 'FormLabel'

const FormControl = React.forwardRef<
React.ElementRef<typeof Slot>,
React.ComponentPropsWithoutRef<typeof Slot>
>(({ ...props }, ref) => {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField()

  return (
    <Slot
      ref={ref}
      id={formItemId}
      aria-describedby={
        (error == null || error === undefined)
          ? `${formDescriptionId}`
          : `${formDescriptionId} ${formMessageId}`
      }
      aria-invalid={!(error == null || error === undefined)}
      {...props}
    />
  )
})
FormControl.displayName = 'FormControl'

const FormDescription = React.forwardRef<
HTMLParagraphElement,
React.HTMLAttributes<HTMLParagraphElement> & {
  className?: string
}
>(({ className, ...props }, ref) => {
  const { formDescriptionId } = useFormField()

  return (
    <p
      ref={ref}
      id={formDescriptionId}
      className={cn('text-sm text-muted-foreground', className)}
      {...props}
    />
  )
})
FormDescription.displayName = 'FormDescription'

const FormMessage = React.forwardRef<
HTMLParagraphElement,
React.HTMLAttributes<HTMLParagraphElement> & {
  className?: string
}
>(({ className, children, ...props }, ref) => {
  const { error, formMessageId } = useFormField()
  const body = (error != null && error !== undefined) ? String(error?.message) : children

  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  if (!body) {
    return null
  }

  return (
    <p
      ref={ref}
      id={formMessageId}
      className={cn('text-sm font-medium text-destructive', className)}
      {...props}
    >
      {body}
    </p>
  )
})
FormMessage.displayName = 'FormMessage'

export {
  Form, FormControl,
  FormDescription, FormField, FormItem,
  FormLabel, FormMessage
}
