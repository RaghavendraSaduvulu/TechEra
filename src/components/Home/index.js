import {Component} from 'react'
import Loader from 'react-loader-spinner'

import {
  TechEraContainer,
  Heading,
  TechEraContent,
  HomeLoadingContainer,
  TechEraFailureContainer,
  TechEraFailureHeading,
  TechEraFailureImg,
  TechEraFailureDescription,
  TechEraFailureButton,
  TechEraCoursesList,
} from './StyledComponents'
import Header from '../Header'
import CourseItem from '../CourseItem'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {coursesApiStatus: apiStatusConstants.initial, courses: []}

  componentDidMount() {
    this.getCourseApi()
  }

  getCourseApi = async () => {
    this.setState({coursesApiStatus: apiStatusConstants.inProgress})
    const coursesApiUrl = 'https://apis.ccbp.in/te/courses'
    const options = {
      method: 'GET',
    }
    const response = await fetch(coursesApiUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      console.log(data)
      const updatedData = data.courses.map(eachItem => ({
        id: eachItem.id,
        name: eachItem.name,
        logoUrl: eachItem.logo_url,
      }))
      this.setState({
        coursesApiStatus: apiStatusConstants.success,
        courses: updatedData,
      })
    } else {
      this.setState({coursesApiStatus: apiStatusConstants.failure})
    }
  }

  renderLoadingView = () => (
    <HomeLoadingContainer>
      <HomeLoadingContainer data-testid="loader">
        <Loader type="ThreeDots" color="#1e293b" height="50" width="50" />
      </HomeLoadingContainer>
    </HomeLoadingContainer>
  )

  renderCoursesApiSuccessView = () => {
    const {courses} = this.state

    return (
      <>
        <Heading>Courses</Heading>
        <TechEraCoursesList>
          {courses.map(eachItem => (
            <CourseItem key={eachItem.id} course={eachItem} />
          ))}
        </TechEraCoursesList>
      </>
    )
  }

  onClickRetryBtn = () => {
    this.setState(
      {coursesApiStatus: apiStatusConstants.initial},
      this.getCourseApi,
    )
  }

  renderCoursesApiFailureView = () => (
    <TechEraFailureContainer>
      <TechEraFailureImg
        src="https://assets.ccbp.in/frontend/react-js/tech-era/failure-img.png"
        alt="failure view"
      />
      <TechEraFailureHeading>Oops! Something Went Wrong</TechEraFailureHeading>
      <TechEraFailureDescription>
        We cannot seem to find the page you are looking for.
      </TechEraFailureDescription>
      <TechEraFailureButton type="button" onClick={this.onClickRetryBtn}>
        Retry
      </TechEraFailureButton>
    </TechEraFailureContainer>
  )

  renderCoursesApi = () => {
    const {coursesApiStatus} = this.state

    switch (coursesApiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      case apiStatusConstants.success:
        return this.renderCoursesApiSuccessView()
      case apiStatusConstants.failure:
        return this.renderCoursesApiFailureView()

      default:
        return null
    }
  }

  render() {
    return (
      <>
        <TechEraContainer>
          <Header />
          <TechEraContent>{this.renderCoursesApi()}</TechEraContent>
        </TechEraContainer>
      </>
    )
  }
}

export default Home
