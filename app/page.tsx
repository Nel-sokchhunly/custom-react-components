import Link from 'next/link'

export default function Home() {
  return (
    <div className="prose">
      <h1> Components</h1>
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
    <Link href={href}>
      <div
        className="
          flex items-center justify-center gap-4
        "
      >
        {icon}
        {title}
      </div>
    </Link>
  )
}
