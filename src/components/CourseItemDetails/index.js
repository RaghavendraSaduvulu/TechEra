import {Component} from 'react'
import Loader from 'react-loader-spinner'

import {
  CourseItemDetailsContainer,
  CourseItemDetailsContent,
  CourseItemDetailsSuccessContent,
  CourseItemDetailsImg,
  CourseItemDetailsTitleWithDescription,
  CourseItemDetailsTitle,
  CourseItemDetailsDescription,
  CourseItemDetailsLoadingContainer,
  CourseItemDetailsLoadingContent,
  CourseItemDetailsFailureContainer,
  CourseItemDetailsFailureImg,
  CourseItemDetailsFailureHeading,
  CourseItemDetailsFailureDescription,
  CourseItemDetailsFailureBtn,
} from './StyledComponents'
import Header from '../Header'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class CourseItemDetails extends Component {
  state = {courseItemDetailsApiStatus: apiStatusConstants.initial, course: {}}

  componentDidMount() {
    this.getCourseItemDetailsApi()
  }

  getCourseItemDetailsApi = async () => {
    this.setState({courseItemDetailsApiStatus: apiStatusConstants.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const courseItemDetailsApiUrl = `https://apis.ccbp.in/te/courses/${id}`
    const options = {
      method: 'GET',
    }
    const response = await fetch(courseItemDetailsApiUrl, options)
    const data = await response.json()
    const courseDetails = data.course_details
    if (response.ok === true) {
      const updatedData = {
        description: courseDetails.description,
        name: courseDetails.name,
        id: courseDetails.id,
        imageUrl: courseDetails.image_url,
      }
      this.setState({
        courseItemDetailsApiStatus: apiStatusConstants.success,
        course: updatedData,
      })
    } else {
      this.setState({courseItemDetailsApiStatus: apiStatusConstants.failure})
    }
  }

  renderLoadingView = () => (
    <CourseItemDetailsLoadingContainer>
      <CourseItemDetailsLoadingContent data-testid="loader">
        <Loader type="ThreeDots" color="#1e293b" height="50" width="50" />
      </CourseItemDetailsLoadingContent>
    </CourseItemDetailsLoadingContainer>
  )

  renderCourseItemDetailsApiSuccessView = () => {
    const {course} = this.state
    const {imageUrl, name, description} = course

    return (
      <CourseItemDetailsSuccessContent>
        <CourseItemDetailsImg src={imageUrl} alt={name} />
        <CourseItemDetailsTitleWithDescription>
          <CourseItemDetailsTitle>{name}</CourseItemDetailsTitle>
          <CourseItemDetailsDescription>
            {description}
          </CourseItemDetailsDescription>
        </CourseItemDetailsTitleWithDescription>
      </CourseItemDetailsSuccessContent>
    )
  }

  onClickRetryButton = () => {
    this.setState(
      {courseItemDetailsApiStatus: apiStatusConstants.initial},
      this.getCourseItemDetailsApi,
    )
  }

  renderCourseItemDetailsApiFailureView = () => (
    <CourseItemDetailsFailureContainer>
      <CourseItemDetailsFailureImg
        src="https://assets.ccbp.in/frontend/react-js/tech-era/failure-img.png"
        alt="failure view"
      />
      <CourseItemDetailsFailureHeading>
        Oops! Something Went Wrong
      </CourseItemDetailsFailureHeading>
      <CourseItemDetailsFailureDescription>
        We cannot seem to find the page you are looking for.
      </CourseItemDetailsFailureDescription>
      <CourseItemDetailsFailureBtn
        type="button"
        onClick={this.onClickRetryButton}
      >
        Retry
      </CourseItemDetailsFailureBtn>
    </CourseItemDetailsFailureContainer>
  )

  renderCourseItemDetailsApi = () => {
    const {courseItemDetailsApiStatus} = this.state

    switch (courseItemDetailsApiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      case apiStatusConstants.success:
        return this.renderCourseItemDetailsApiSuccessView()
      case apiStatusConstants.failure:
        return this.renderCourseItemDetailsApiFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <CourseItemDetailsContainer>
        <Header />
        <CourseItemDetailsContent>
          {this.renderCourseItemDetailsApi()}
        </CourseItemDetailsContent>
      </CourseItemDetailsContainer>
    )
  }
}

export default CourseItemDetails
