import {
  ArchiveBoxIcon,
  BookOpenIcon,
  BellIcon,
  UserIcon,
  Cog8ToothIcon,
  CalendarDaysIcon,
  HomeIcon,
} from '@heroicons/react/24/outline'

import DockNavbar from '../../../component/DockBar'

export default function Page() {
  return (
    <DockNavbar.Wrapper>
      <DockNavbar.Item
        icon={<HomeIcon className='stroke-inherit' />}
        title='Home'
      />
      <DockNavbar.Item
        icon={<CalendarDaysIcon className='stroke-inherit' />}
        title='Calendar'
      />
      <DockNavbar.Item
        icon={<BookOpenIcon className='stroke-inherit' />}
        title='Book'
      />
      <DockNavbar.Item
        icon={<ArchiveBoxIcon className='stroke-inherit' />}
        title='Archive'
      />
      <DockNavbar.Item
        icon={<BellIcon className='stroke-inherit' />}
        title='Notification'
      />

      <Divider />

      <DockNavbar.Item
        icon={<UserIcon className='stroke-inherit' />}
        title='Profile'
      />
      <DockNavbar.Item
        icon={<Cog8ToothIcon className='stroke-inherit' />}
        title='Setting'
      />
    </DockNavbar.Wrapper>
  )
}

const Divider = () => (
  <div className='mx-0 h-10 w-1 rounded-full bg-gray-900'></div>
)
