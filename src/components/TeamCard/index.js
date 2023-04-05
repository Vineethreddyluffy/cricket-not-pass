import {Link} from 'react-router-dom'

import './index.css'

const GetItem = props => {
  const {item} = props
  const {name, teamImageUrl, id} = item
  return (
    <Link to={`/team-matches/${id}`}>
      <li className="list-item">
        <img src={teamImageUrl} alt={name} className="img" />
        <p className="list-para">{name}</p>
      </li>
    </Link>
  )
}
export default GetItem
