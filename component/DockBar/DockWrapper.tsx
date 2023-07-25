export default function DockWrapper({
  children,
}: {
  children: React.ReactNode | React.ReactNode[]
}) {
  return (
    <div
      className='
        dock flex w-fit items-center justify-center
        gap-2 rounded-full bg-gray-700 p-2
        transition-all duration-300
      '
    >
      {children}
    </div>
  )
}
