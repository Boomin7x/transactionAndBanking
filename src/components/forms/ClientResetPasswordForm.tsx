'use client'

import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

// Assuming you have an API function to handle password reset
async function resetPassword(data: any) {
  // Replace with your actual API call
  const response = await fetch('/api/reset-password', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  if (!response.ok) throw new Error('Password reset failed')
  return response.json()
}

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email').required('Email is required'),
})

type ResetPasswordFormValues = Yup.InferType<typeof validationSchema>

export default function ClientResetPasswordForm() {
  const mutation = useMutation({ mutationFn: resetPassword })

  const form = useForm<ResetPasswordFormValues>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      email: '',
    },
  })

  const onSubmit = (values: ResetPasswordFormValues) => {
    mutation.mutate(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="Enter Your Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" disabled={mutation.isPending} className="w-full">
          {mutation.isPending ? 'Sending...' : 'Reset Password'}
        </Button>
      </form>
    </Form>
  )
}
