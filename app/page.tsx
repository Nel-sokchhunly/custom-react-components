import Link from 'next/link'

import { Bars3Icon } from '@heroicons/react/24/outline'

export default function Home() {
  return (
    <div
      className='
        prose w-1/2 rounded-lg  p-4 text-center
      
      '
    >
      <h1>Open-source Components</h1>

      <div className='flex justify-center gap-4'>
        <ComponentLink
          href='/dock-navbar'
          title='Dock Bar'
          icon={<Bars3Icon className='h-6 w-6' />}
        />
      </div>
    </div>
  )
}

const ComponentLink = ({
  href,
  title,
  icon,
}: {
  href: string
  title: string
  icon: React.ReactNode
}) => {
  return (
    <Link href={'component' + href}>
      <div
        className='
          flex
          w-40 items-center justify-start gap-4
          rounded-lg bg-white p-4 shadow-lg
          transition-all duration-300 hover:scale-110
        '
      >
        {icon}
        {title}
      </div>
    </Link>
  )
}
