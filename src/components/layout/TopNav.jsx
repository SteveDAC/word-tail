import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function TopNav({ title }) {
  return (
    <div className='navbar bg-base-300 text-base-content shadow-xl'>
      <div className='div container mx-auto'>
        <div className='mx-2 flex-none px-2'>
          <Link className='btn-ghost btn text-xl normal-case' to='/'>
            {title}
          </Link>
        </div>
      </div>
      <div className='mx-2 flex-1 px-2'>
        <div className='flex justify-end'>
          <Link to='/about' className='btn-ghost rounded-btn btn-sm btn'>
            About
          </Link>
        </div>
      </div>
    </div>
  )
}

TopNav.propTypes = {
  title: PropTypes.string,
}

TopNav.defaultProps = {
  title: 'WordTail',
}

export default TopNav
