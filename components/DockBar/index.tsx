import './dock-navbar.css'
import DockItem from './DockItem'
import DockWrapper from './DockWrapper'

const Wrapper = DockWrapper
const Item = DockItem

const Divider = () => (
  <div className='mx-0 h-10 w-1 rounded-full bg-gray-900'></div>
)

const DockNavbar = { Wrapper, Item, Divider }

export default DockNavbar
