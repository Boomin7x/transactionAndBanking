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
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Check, ChevronsUpDown } from 'lucide-react'
import { cn } from '@/lib/utils'

// Assuming you have an API function to handle sending money
async function sendMoney(data: any) {
  // Replace with your actual API call
  const response = await fetch('/api/send-money', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  if (!response.ok) throw new Error('Send money failed')
  return response.json()
}

const validationSchema = Yup.object({
  sender_country: Yup.string().required('Sender country is required'),
  receiver_country: Yup.string().required('Receiver country is required'),
  amount_sent: Yup.number().required('Amount is required').positive('Amount must be positive'),
  sender_currency: Yup.string().required('Sender currency is required'),
})

type SendMoneyFormValues = Yup.InferType<typeof validationSchema>

const countries = [
  { value: 'Australia', label: 'Australia', flag: 'au' },
  { value: 'Bahrain', label: 'Bahrain', flag: 'bh' },
  { value: 'Brazil', label: 'Brazil', flag: 'br' },
  { value: 'Canada', label: 'Canada', flag: 'ca' },
  { value: 'China', label: 'China', flag: 'cn' },
  { value: 'Denmark', label: 'Denmark', flag: 'dk' },
  { value: 'France', label: 'France', flag: 'fr' },
  { value: 'Germany', label: 'Germany', flag: 'de' },
  { value: 'Iceland', label: 'Iceland', flag: 'is' },
  { value: 'Italy', label: 'Italy', flag: 'it' },
  { value: 'New Zealand', label: 'New Zealand', flag: 'nz' },
  { value: 'Norway', label: 'Norway', flag: 'no' },
  { value: 'Russia', label: 'Russia', flag: 'ru' },
  { value: 'Spain', label: 'Spain', flag: 'es' },
  { value: 'United Kingdom', label: 'United Kingdom', flag: 'gb' },
  { value: 'United States', label: 'United States', flag: 'us' },
  { value: 'Vietnam', label: 'Vietnam', flag: 'vn' },
]

const currencies = [
    { value: 'AUD', label: 'Australian Dollar A$' },
    { value: 'BHD', label: 'Bahraini Dinar .د.ب or BD' },
    { value: 'BRL', label: 'Real R$' },
    { value: 'CAD', label: 'Canadian Dollar Can$' },
    { value: 'CNY', label: 'Chinese Yuan ¥' },
    { value: 'DKK', label: 'Danish Krone Dkr' },
    { value: 'EUR', label: 'Euro €' },
    { value: 'ISK', label: 'Icelandic Krona Kr' },
    { value: 'NZD', label: 'New Zealand Dollar $' },
    { value: 'NOK', label: 'Norwegian Krone kr' },
    { value: 'RUB', label: 'Ruble р.' },
    { value: 'GBP', label: 'Pound Sterling £' },
    { value: 'USD', label: 'United States Dollar $' },
    { value: 'VND', label: 'Dong ₫' },
]

export default function ClientSendMoneyForm() {
  const mutation = useMutation({ mutationFn: sendMoney })

  const form = useForm<SendMoneyFormValues>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
        sender_country: 'United Kingdom',
        receiver_country: 'Nigeria',
        amount_sent: 100,
        sender_currency: 'GBP',
    },
  })

  const onSubmit = (values: SendMoneyFormValues) => {
    mutation.mutate(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-6">
        <FormField
          control={form.control}
          name="sender_country"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Sender Country</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn(
                        'w-full justify-between',
                        !field.value && 'text-muted-foreground'
                      )}
                    >
                      {field.value
                        ? countries.find(
                            (country) => country.value === field.value
                          )?.label
                        : 'Select country'}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-[--radix-popover-trigger-width] max-h-[--radix-popover-content-available-height] p-0">
                  <Command>
                    <CommandInput placeholder="Search country..." />
                    <CommandList>
                      <CommandEmpty>No country found.</CommandEmpty>
                      <CommandGroup>
                        {countries.map((country) => (
                          <CommandItem
                            value={country.label}
                            key={country.value}
                            onSelect={() => {
                              form.setValue('sender_country', country.value)
                            }}
                          >
                            <Check
                              className={cn(
                                'mr-2 h-4 w-4',
                                country.value === field.value
                                  ? 'opacity-100'
                                  : 'opacity-0'
                              )}
                            />
                            <img src={`https://flagcdn.com/16x12/${country.flag}.png`} alt="" className="mr-2" />
                            {country.label}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="receiver_country"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Receiver Country</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn(
                        'w-full justify-between',
                        !field.value && 'text-muted-foreground'
                      )}
                    >
                      {field.value
                        ? countries.find(
                            (country) => country.value === field.value
                          )?.label
                        : 'Select country'}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-[--radix-popover-trigger-width] max-h-[--radix-popover-content-available-height] p-0">
                  <Command>
                    <CommandInput placeholder="Search country..." />
                    <CommandList>
                      <CommandEmpty>No country found.</CommandEmpty>
                      <CommandGroup>
                        {countries.map((country) => (
                          <CommandItem
                            value={country.label}
                            key={country.value}
                            onSelect={() => {
                              form.setValue('receiver_country', country.value)
                            }}
                          >
                            <Check
                              className={cn(
                                'mr-2 h-4 w-4',
                                country.value === field.value
                                  ? 'opacity-100'
                                  : 'opacity-0'
                              )}
                            />
                            <img src={`https://flagcdn.com/16x12/${country.flag}.png`} alt="" className="mr-2" />
                            {country.label}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="amount_sent"
          render={({ field }) => (
            <FormItem>
              <FormLabel>You Send</FormLabel>
              <FormControl>
                <Input type="number" placeholder="0.0" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="sender_currency"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Currency</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn(
                        'w-full justify-between',
                        !field.value && 'text-muted-foreground'
                      )}
                    >
                      {field.value
                        ? currencies.find(
                            (currency) => currency.value === field.value
                          )?.label
                        : 'Select currency'}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-[--radix-popover-trigger-width] max-h-[--radix-popover-content-available-height] p-0">
                  <Command>
                    <CommandInput placeholder="Search currency..." />
                    <CommandList>
                      <CommandEmpty>No currency found.</CommandEmpty>
                      <CommandGroup>
                        {currencies.map((currency) => (
                          <CommandItem
                            value={currency.label}
                            key={currency.value}
                            onSelect={() => {
                              form.setValue('sender_currency', currency.value)
                            }}
                          >
                            <Check
                              className={cn(
                                'mr-2 h-4 w-4',
                                currency.value === field.value
                                  ? 'opacity-100'
                                  : 'opacity-0'
                              )}
                            />
                            {currency.label}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" disabled={mutation.isPending} className="w-full">
          {mutation.isPending ? 'Sending...' : 'Continue'}
        </Button>
      </form>
    </Form>
  )
}
