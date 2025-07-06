import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon, ComputerDesktopIcon, CodeBracketIcon, FolderArrowDownIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Data integration and Dashboarding | Procter & Gamble Baddi',
    description:
      'Integrated data from multiple sensors into the WMS system and created dashboards for real-time monitoring.',
    logo: <img src="/logos/png.jpeg" alt="" className="absolute top-0 right-0 h-10 w-auto" />
  },
  {
    name: 'BLE Scanner Appliaction | Tynatech Noida',
    description:
      'Working on BLE scanner application to detect and display nearby Bluetooth devices, providing real-time data on device proximity.',
    logo: <img src="/logos/tynatech.png" alt="" className="absolute top-0 right-0 h-10 w-auto" />
  },
  {
    name: 'Data Pipeline and Web Service | Procter & Gamble Madideep',
    description:
      'Build data pipeline to collect data from influx db at intervals 10 minutes and push it P&G internal services.',
    logo: <img src="/logos/png.jpeg" alt="" className="absolute top-0 right-0 h-10 w-auto" />
  },
  {
    name: 'People Counting System | Bristol Myers Squibb Hyderabad',
    description:
      'Programming the logic into the controller to accurately count the number of people entering and exiting the building.',
    logo: <img src="/logos/bms.png" alt="" className="absolute top-0 right-0 h-10 w-auto" />
  },
  {
    name: 'Data pipeline to Power Bi | Procter & Gamble Hyderabad',
    description:
      'Worked on building realtime data pipeline to Power Bi using Azure Data Factory, Azure Functions, and Azure SQL Database.',
    logo: <img src="/logos/png.jpeg" alt="" className="absolute top-0 right-0 h-10 w-auto" />
  },
  {
    name: 'People Counting PoC and implementation | GMR Delhi IGI Airport',
    description:
      'Developed a proof of concept for people counting using sensors and implemented the solution at Delhi IGI Airport, enhancing crowd management.',
    logo: <img src="/logos/gmr.png" alt="" className="absolute top-0 right-0 h-5 w-auto" />
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
                  <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg">
                    {feature.logo}
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
