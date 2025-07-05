import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon, ComputerDesktopIcon, CodeBracketIcon, FolderArrowDownIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Data integration and Dashboarding | Procter & Gamble Baddi',
    description:
      'Integrated data from multiple sensors into the WMS system and created dashboards for real-time monitoring.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Data Pipeline and Server | Procter & Gamble Madideep',
    description:
      'Build data pipeline to collect data from influx db at intervals 10 minutes and push it P&G internal services.',
    icon: FolderArrowDownIcon,
  },
  {
    name: 'Data pipeline to Power Bi | Procter & Gamble Hyderabad',
    description:
      'Worked on building realtime data pipeline to Power Bi using Azure Data Factory, Azure Functions, and Azure SQL Database.',
    icon: ComputerDesktopIcon,
  },
  {
    name: 'People Counting System | Bristol Myers Squibb Hyderabad',
    description:
      'Programming the logic into the controller to accurately count the number of people entering and exiting the building.',
    icon: CodeBracketIcon,
  },
]

export default function Projects() {
  return (
    <div className="bg-white py-12 sm:py-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-green-600">Real time Data Pipelines for Industrial Automation.</h2>
          <p className="mt-2 text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
            Worked on multiple data pipeline projects for big names.
          </p>
          <p className="mt-6 text-lg/8 text-gray-700">
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base/7 font-semibold text-gray-900">
                  <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-green-600">
                    <feature.icon aria-hidden="true" className="size-6 text-white" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base/7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
