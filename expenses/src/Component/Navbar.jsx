import { Form, NavLink } from "react-router-dom"
import { TrashIcon } from '@heroicons/react/24/solid'
function Navbar({userName}) {
  return (
    <nav>
    <NavLink
        to='/'
    >
        <img src="../../dist/assets/logomark.svg" height={30}/>
        <span>HomeBudget</span>
    </NavLink>
    {userName && (
        <Form 
            method="post"
            action="/logout"
            onSubmit={(event) =>{
                if (!confirm('Are you sure you want to delete all data'))
                {
                    event.preventDefault();
                }
            }}
        >
        <button type="submit" className="btn btn--warning">
        <span>Delete user</span>
        <TrashIcon width={20}/>
        </button>
        </Form>
    )}
    </nav>
  )
}

export default Navbar