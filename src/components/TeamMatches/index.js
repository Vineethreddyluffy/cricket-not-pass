import {Component} from 'react'

import Loader from 'react-loader-spinner'

import LatestMatch from '../LatestMatch'

import GetCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {detailsOf: {}, running: true}

  componentDidMount() {
    this.getMatches()
  }

  getMatches = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const recent = await data.recent_matches.map(each => ({
      competingTeam: each.competing_team,
      competingTeamLogo: each.competing_team_logo,
      date: each.date,
      firstInnings: each.first_innings,
      id: each.id,
      manOfTheMatch: each.man_of_the_match,
      matchStatus: each.match_status,
      result: each.result,
      secondInnings: each.second_innings,
      umpires: each.umpires,
      venue: each.venue,
    }))
    const latest = {
      competingTeam: data.latest_match_details.competing_team,
      competingTeamLogo: data.latest_match_details.competing_team_logo,
      date: data.latest_match_details.date,
      firstInnings: data.latest_match_details.first_innings,
      id: data.latest_match_details.id,
      manOfTheMatch: data.latest_match_details.man_of_the_match,
      matchStatus: data.latest_match_details.match_status,
      result: data.latest_match_details.result,
      secondInnings: data.latest_match_details.second_innings,
      umpires: data.latest_match_details.umpires,
      venue: data.latest_match_details.venue,
    }
    const updatedData = {
      latestMatchDetails: latest,
      recentMatches: recent,
      teamBannerUrl: data.team_banner_url,
      style: id,
    }
    this.setState({detailsOf: updatedData, running: false})
  }

  render() {
    const {detailsOf, running} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches, style} = detailsOf
    return running ? (
      <div testid="loader">
        <Loader type="Oval" color="#ffffff" height={50} width={50} />
      </div>
    ) : (
      <div className={`match-cont ${style}`}>
        <img src={teamBannerUrl} alt="team banner" className="banner" />
        <LatestMatch latestMatch={latestMatchDetails} />
        <ul className="un-list">
          {recentMatches.map(each => (
            <GetCard key={each.id} card={each} />
          ))}
        </ul>
      </div>
    )
  }
}
export default TeamMatches
