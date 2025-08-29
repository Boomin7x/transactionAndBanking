'use client'

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion } from 'framer-motion'
import { Lock, CreditCard } from 'lucide-react'
import { sendMoneySchema, SendMoneyForm as SendMoneyFormType } from '@/lib/schemas'
import { useSenderCountries, useReceiverCountries, useExchangeRate } from '@/lib/queries'
import { Button } from '@/components/ui/Button'


export function SendMoneyForm() {
  const [watchedValues, setWatchedValues] = useState({
    senderCountry: '',
    receiverCountry: '',
    sendingCurrency: 'USD',
    amount: 0
  })

  const { data: senderCountries = [] } = useSenderCountries()
  const { data: receiverCountries = [] } = useReceiverCountries()
  
  const { data: exchangeData, isLoading: isCalculating } = useExchangeRate(
    watchedValues.sendingCurrency,
    receiverCountries.find(c => c.name === watchedValues.receiverCountry)?.currency || '',
    watchedValues.amount
  )

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting }
  } = useForm<SendMoneyFormType>({
    resolver: zodResolver(sendMoneySchema),
    defaultValues: {
      senderCountry: 'United States',
      receiverCountry: 'United Kingdom',
      deliveryMethod: 'BANK',
      sendingCurrency: 'USD'
    }
  })

  // Watch form values for real-time updates
  const watchedForm = watch()
  
  // Update watched values when form changes
  React.useEffect(() => {
    setWatchedValues({
      senderCountry: watchedForm.senderCountry || '',
      receiverCountry: watchedForm.receiverCountry || '',
      sendingCurrency: watchedForm.sendingCurrency || 'USD',
      amount: watchedForm.amount || 0
    })
  }, [watchedForm])

  const onSubmit = async (data: SendMoneyFormType) => {
    console.log('Form submitted:', data)
    // Handle form submission
  }

  return (
    <div className="bg-white rounded-lg shadow-2xl p-4 sm:p-6 w-full max-w-md mx-auto">
      <h3 className="text-xl sm:text-2xl font-bold text-dark-blue text-center mb-4">Send Money</h3>
      <hr className="mb-6 -mx-4 sm:-mx-6" />

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Sender Country */}
          <div className="mb-3">
            <label className="block font-medium text-dark-blue mb-2 text-lg">
              Sender Country
            </label>
            <div className="relative">
              <select
                {...register('senderCountry')}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold-dark focus:border-transparent text-dark-blue bg-white text-lg appearance-none"
              >
                <option value="Australia">🇦🇺 Australia</option>
                <option value="Bahrain">🇧🇭 Bahrain</option>
                <option value="Brazil">🇧🇷 Brazil</option>
                <option value="Canada">🇨🇦 Canada</option>
                <option value="China">🇨🇳 China</option>
                <option value="Denmark">🇩🇰 Denmark</option>
                <option value="France">🇫🇷 France</option>
                <option value="Germany">🇩🇪 Germany</option>
                <option value="Iceland">🇮🇸 Iceland</option>
                <option value="Italy">🇮🇹 Italy</option>
                <option value="New Zealand">🇳🇿 New Zealand</option>
                <option value="Norway">🇳🇴 Norway</option>
                <option value="Russia">🇷🇺 Russia</option>
                <option value="Spain">🇪🇸 Spain</option>
                <option value="United Kingdom">🇬🇧 United Kingdom</option>
                <option value="United States">🇺🇸 United States</option>
                <option value="Vietnam">🇻🇳 Vietnam</option>
              </select>
            </div>
            {errors.senderCountry && (
              <p className="text-red-500 text-sm mt-1">{errors.senderCountry.message}</p>
            )}
          </div>

          {/* Receiver Country */}
          <div className="mb-3">
            <label className="block font-medium text-dark-blue mb-2 text-lg">
              Receivers Country
            </label>
            <div className="relative">
              <select
                {...register('receiverCountry')}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold-dark focus:border-transparent text-dark-blue bg-white text-lg appearance-none"
              >
                <option value="Albania">🇦🇱 Albania</option>
                <option value="Algeria">🇩🇿 Algeria</option>
                <option value="Australia">🇦🇺 Australia</option>
                <option value="Bahamas">🇧🇸 Bahamas</option>
                <option value="Belarus">🇧🇾 Belarus</option>
                <option value="Cambodia">🇰🇭 Cambodia</option>
                <option value="China">🇨🇳 China</option>
                <option value="Croatia">🇭🇷 Croatia</option>
                <option value="Germany">🇩🇪 Germany</option>
                <option value="Iran">🇮🇷 Iran</option>
                <option value="Italy">🇮🇹 Italy</option>
                <option value="Latvia">🇱🇻 Latvia</option>
                <option value="Morocco">🇲🇦 Morocco</option>
                <option value="Nepal">🇳🇵 Nepal</option>
                <option value="Romania">🇷🇴 Romania</option>
                <option value="Russia">🇷🇺 Russia</option>
                <option value="Serbia">🇷🇸 Serbia</option>
                <option value="Spain">🇪🇸 Spain</option>
                <option value="United Kingdom">🇬🇧 United Kingdom</option>
                <option value="United States">🇺🇸 United States</option>
                <option value="Vietnam">🇻🇳 Vietnam</option>
              </select>
            </div>
            {errors.receiverCountry && (
              <p className="text-red-500 text-sm mt-1">{errors.receiverCountry.message}</p>
            )}
          </div>

          {/* Delivery Method */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
            <div className="sm:col-span-1">
              <p className="font-medium text-dark-blue mt-3 text-base sm:text-lg">Delivery methods</p>
            </div>
            <div className="sm:col-span-1">
              <div className="relative">
                <select
                  {...register('deliveryMethod')}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold-dark focus:border-transparent text-dark-blue bg-white text-base sm:text-lg appearance-none"
                >
                  <option value="BANK">BANK TRANSFER</option>
                  <option value="Bitcoin">Bitcoin</option>
                  <option value="PAYPAL">PAYPAL</option>
                  <option value="SKRILL">SKRILL</option>
                </select>
              </div>
            </div>
          </div>

          {/* Amount and Currency */}
          <div className="mb-3">
            <label className="block font-medium text-dark-blue mb-2 text-lg">
              Sending Currency
            </label>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-0">
              {/* Amount Input */}
              <div className="flex flex-1">
                <span className="inline-flex items-center px-3 text-gray-600 bg-gray-50 border border-r-0 border-gray-300 rounded-l-md text-lg h-12">
                  $
                </span>
                <input
                  type="number"
                  {...register('amount', { valueAsNumber: true })}
                  placeholder="0"
                  className="flex-1 px-3 py-3 h-12 border border-gray-300 sm:border-r-0 sm:rounded-r-none rounded-r-md focus:ring-2 focus:ring-gold-dark focus:border-transparent text-dark-blue bg-white text-lg"
                />
              </div>

              {/* Currency Select */}
              <div className="sm:w-48">
                <select
                  {...register('sendingCurrency')}
                  className="w-full px-3 py-3 h-12 border border-gray-300 sm:border-l-0 sm:rounded-l-none rounded-md focus:ring-2 focus:ring-gold-dark focus:border-transparent text-dark-blue bg-white text-sm sm:text-base appearance-none"
                >
                  <option value="USD">🇺🇸 USD $</option>
                  <option value="EUR">🇪🇺 EUR €</option>
                  <option value="GBP">🇬🇧 GBP £</option>
                  <option value="AUD">🇦🇺 AUD A$</option>
                  <option value="CAD">🇨🇦 CAD C$</option>
                  <option value="CNY">🇨🇳 CNY ¥</option>
                  <option value="BRL">🇧🇷 BRL R$</option>
                  <option value="BHD">🇧🇭 BHD BD</option>
                  <option value="DKK">🇩🇰 DKK kr</option>
                  <option value="ISK">🇮🇸 ISK Kr</option>
                  <option value="NZD">🇳🇿 NZD $</option>
                  <option value="NOK">🇳🇴 NOK kr</option>
                  <option value="RUB">🇷🇺 RUB ₽</option>
                  <option value="VND">🇻🇳 VND ₫</option>
                </select>
              </div>
            </div>
            {errors.amount && (
              <p className="text-red-500 text-sm mt-1">{errors.amount.message}</p>
            )}
          </div>

          {/* Exchange Rate Display */}
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-dark-blue">Receiver gets</span>
              <span className="font-semibold text-dark-blue">
                {exchangeData ? exchangeData.convertedAmount.toFixed(2) : '0.0'}
              </span>
            </div>
            <hr className="border-gray-300" />

            <div className="flex justify-between">
              <span className="text-dark-blue">Total Fees</span>
              <span className="text-dark-blue">
                {exchangeData ? exchangeData.fees.toFixed(2) : '0.0'}
              </span>
            </div>
            <hr className="border-gray-300" />

            <div className="flex justify-between text-lg font-semibold">
              <span className="text-dark-blue">Amount To Pay</span>
              <span className="text-dark-blue">
                {exchangeData ? exchangeData.totalToPay.toFixed(2) : '0.00'}
              </span>
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-6">
            <Button
              type="submit"
              className="w-full"
              disabled={isSubmitting || isCalculating}
            >
              {isSubmitting ? 'Processing...' : 'Continue'}
            </Button>
          </div>

          {/* Security Info */}
          <div className="text-center mt-6">
            <div className="flex justify-center items-center space-x-4 mb-4">
              <img
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&w=60&h=40&fit=crop"
                alt="Credit Card"
                className="h-8 w-12 object-cover rounded"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Trustly_logo.svg/200px-Trustly_logo.svg.png"
                alt="Trustly"
                className="h-8 w-20 object-contain"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Sofort_%C3%9Cberweisung_Logo.svg/200px-Sofort_%C3%9Cberweisung_Logo.svg.png"
                alt="Sofort Banking"
                className="h-8 w-20 object-contain"
              />
            </div>
            <div className="flex items-start space-x-2 text-sm text-gray-700">
              <Lock className="w-5 h-5 mt-0.5 text-green flex-shrink-0" />
              <p className="text-left">
                We are Authorised and Regulated by the Financial Conduct Authority (US Dollars).
              </p>
            </div>
          </div>
        </form>
    </div>
  )
}
