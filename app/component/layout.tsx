import { ChevronLeftIcon } from '@heroicons/react/24/outline'
// import { useRouter } from 'next/router'

import Link from 'next/link'

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      {/* navbar */}
      <div className='fixed left-0 top-0 p-4 '>
        <Link
          href='/'
          className='
            flex items-center gap-2 bg-white rounded-full pr-4 p-2
            hover:scale-95 transition-all duration-300
          '
        >
          <ChevronLeftIcon className='h-6 w-6' />
          <span>Back</span>
        </Link>
      </div>

      {/* component */}
      <div>{children}</div>
    </main>
  )
}
