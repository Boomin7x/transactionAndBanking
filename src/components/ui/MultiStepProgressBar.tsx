'use client'

interface MultiStepProgressBarProps {
  steps: string[]
  currentStep: number
}

export function MultiStepProgressBar({ steps, currentStep }: MultiStepProgressBarProps) {
  return (

    <div className="flex items-center justify-center mb-12 mx-auto">
      {steps.map((step, index) => (
        <div key={index} className="flex w-full items-center">
          <div className="relative flex flex-col items-center text-gold-dark">
            <div
              className={`flex h-9 w-9 items-center justify-center rounded-full border-2 transition-all duration-300 ${
                currentStep >= index ? 'border-gold-dark bg-gold-dark' : 'border-gray-300'
              }`}
            >
              {currentStep > index ? (
                 <span className="text-white text-lg">✓</span>
              ) : (
                <span className={currentStep >= index ? 'text-white' : 'text-gray-500'}>{index + 1}</span>
              )}
            </div>
            <div className={`absolute bottom-full mb-2 w-max text-center text-xs font-semibold transition-all duration-300 ${currentStep >= index ? 'text-gold-dark' : 'text-gray-500'}`}>
              {step}
            </div>
          </div>
          {index < steps.length - 1 && (
            <div className={`h-1 flex-1 transition-all duration-300 ${currentStep > index ? 'bg-gold-dark' : 'bg-gray-300'}`} />
          )}
        </div>
      ))}
    </div>
  )
}
