import {Component} from 'react'

import Loader from 'react-loader-spinner'

import GetItem from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {listOf: [], rotate: true}

  componentDidMount() {
    this.getDetails()
  }

  getDetails = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const updatedData = data.teams.map(each => ({
      name: each.name,
      id: each.id,
      teamImageUrl: each.team_image_url,
    }))
    this.setState({listOf: updatedData, rotate: false})
  }

  render() {
    const {listOf, rotate} = this.state
    return rotate ? (
      <div data-testid="loader">
        <Loader type="Oval" color="#ffffff" height={50} width={50} />
      </div>
    ) : (
      <div className="cont">
        <div className="text-cont">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="logo-img"
          />
          <h1 className="home-para">IPL Dashboard</h1>
        </div>
        <ul className="card-cont">
          {listOf.map(each => (
            <GetItem key={each.id} item={each} />
          ))}
        </ul>
      </div>
    )
  }
}
export default Home
