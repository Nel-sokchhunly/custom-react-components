import Image from 'next/image'
import GithubIcon from '../../../components/icons/GithubIcon'
import ComponentLayout from '../ComponentLayout'

export default function DockLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main>
      {/* component */}
      <div>{children}</div>

      {/* navbar */}
      <ComponentLayout github='https://github.com/Nel-sokchhunly/custom-react-components/blob/main/components/DockBar' />
    </main>
  )
}
