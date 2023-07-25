'use client'

const DockItem = ({
  icon,
  title,
}: {
  icon: React.ReactNode
  title: string
}) => {
  return (
    <div
      key={title}
      className={`
        dock-item w-full h-fit
        relative cursor-pointer
        rounded-full 
        bg-gray-900 p-2
        flex items-center justify-center
        group 
      `}
      onMouseEnter={(e) => {
        // add class to previous sibling
        const prevSibling = e.currentTarget.previousElementSibling
        if (prevSibling && prevSibling.classList.contains('dock-item')) {
          prevSibling.classList.add('prev-sibling')
        }

        const nextSibling = e.currentTarget.nextElementSibling
        if (nextSibling && nextSibling.classList.contains('dock-item')) {
          nextSibling.classList.add('next-sibling')
        }
      }}
      onMouseLeave={(e) => {
        const prevSibling = e.currentTarget.previousElementSibling
        if (prevSibling && prevSibling.classList.contains('dock-item')) {
          prevSibling.classList.remove('prev-sibling')
        }

        const nextSibling = e.currentTarget.nextElementSibling
        if (nextSibling && nextSibling.classList.contains('dock-item')) {
          nextSibling.classList.remove('next-sibling')
        }
      }}
    >
      <div className='h-8 w-8 stroke-white'>{icon}</div>
    </div>
  )
}

export default DockItem
