import './index.css'

const GetCard = props => {
  const {card} = props
  const {competingTeam, competingTeamLogo, result, matchStatus} = card
  const classOf = matchStatus === 'Lost' ? 'status' : 'status1'
  return (
    <li className="list">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="logoOf"
      />
      <p className="name">{competingTeam}</p>
      <p className="result">{result}</p>
      <p className={classOf}>{matchStatus}</p>
    </li>
  )
}
export default GetCard
