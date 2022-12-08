import {
  NotFoundContainer,
  NotFoundContent,
  NotFoundImg,
  NotFoundHeading,
  NotFoundDescription,
} from './StyledComponents'
import Header from '../Header'

const NotFound = () => (
  <NotFoundContainer>
    <Header />
    <NotFoundContent>
      <NotFoundImg
        src="https://assets.ccbp.in/frontend/react-js/tech-era/not-found-img.png"
        alt="not found"
      />
      <NotFoundHeading>Page Not Found</NotFoundHeading>
      <NotFoundDescription>
        We are sorry, the page you requested could not be found.
      </NotFoundDescription>
    </NotFoundContent>
  </NotFoundContainer>
)

export default NotFound
