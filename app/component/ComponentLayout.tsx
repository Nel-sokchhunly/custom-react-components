import GithubIcon from '../../components/icons/GithubIcon'

export default function ComponentLayout({ github }: { github?: string }) {
  return (
    <div className='fixed right-0 bottom-0 p-4 pr-8'>
      {github && (
        <a
          href={github}
          className='
            hover:bg-black rounded-full p-2 transition-all duration-300 
            flex justify-center items-center
          '
        >
          <GithubIcon className='w-8 h-8 fill-black hover:fill-white' />
        </a>
      )}
    </div>
  )
}
