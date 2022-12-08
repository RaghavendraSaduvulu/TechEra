import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const TechEraCourseItem = styled.li`
  height: fit-content;
  width: 20%;
  margin: 0;
  margin: 20px 0px;
  @media screen and (max-width: 767px) {
    width: 25%;
  }

  @media screen and (max-width: 567px) {
    width: 40%;
  }
`
export const CourseLink = styled(Link)`
  text-decoration: none;
`

export const TechEraCourseItemContent = styled.div`
  display: flex;
  flex-direction: row;
`

export const TechEraCourseImg = styled.img`
  width: 50px;

  @media screen and (max-width: 567px) {
    align-self: center;
  }
`

export const TechEraCourseName = styled.p`
  align-self: center;
  padding-left: 10px;
  font-family: roboto;
  font-weight: 600;
  color: #1e293b;
`
