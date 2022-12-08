import {
  TechEraCourseItem,
  TechEraCourseItemContent,
  TechEraCourseImg,
  TechEraCourseName,
  CourseLink,
} from './StyledComponents'

const CourseITem = props => {
  const {course} = props
  const {id, name, logoUrl} = course

  return (
    <TechEraCourseItem>
      <CourseLink to={`/courses/${id}`}>
        <TechEraCourseItemContent>
          <TechEraCourseImg src={logoUrl} alt={name} />
          <TechEraCourseName>{name}</TechEraCourseName>
        </TechEraCourseItemContent>
      </CourseLink>
    </TechEraCourseItem>
  )
}

export default CourseITem
