import './index.css'

const LatestMatch = props => {
  const {latestMatch} = props
  const {
    competingTeam,
    date,
    venue,
    competingTeamLogo,
    firstInnings,
    manOfTheMatch,
    result,
    secondInnings,
    umpires,
  } = latestMatch
  return (
    <div>
      <h1 className="para2">Latest Matches</h1>
      <div className="card">
        <div className="first-side">
          <p className="para1">{competingTeam}</p>
          <p className="para1">{date}</p>
          <p className="para2">{venue}</p>
          <p className="para2">{result}</p>
        </div>
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="team-logo"
        />
        <div className="second-side">
          <p className="para3">First Innings</p>
          <p className="para2">{firstInnings}</p>
          <p className="para3">Second Innings</p>
          <p className="para2">{secondInnings}</p>
          <p className="para4">Man Of The Match</p>
          <p className="para2">{manOfTheMatch}</p>
          <p className="para3">Umpires</p>
          <p className="para2">{umpires}</p>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch
