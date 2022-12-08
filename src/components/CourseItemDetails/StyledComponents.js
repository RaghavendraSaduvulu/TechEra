import styled from 'styled-components'

export const CourseItemDetailsContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`

export const CourseItemDetailsContent = styled.div`
  height: 100%;
  margin: 40px 127px;

  @media (min-width: 767px) and (max-width: 1100px) {
    margin: 20px 80px;
  }

  @media screen and (max-width: 767px) {
    margin: 10px 32px;
  }
`
export const CourseItemDetailsSuccessContent = styled.div`
  display: flex;
  flex-direction: row;
  box-shadow: 2px 2px 10px 5px #f1f5f9;
`

export const CourseItemDetailsImg = styled.img`
  width: 40%;
`

export const CourseItemDetailsTitleWithDescription = styled.div`
  padding: 20px;
`

export const CourseItemDetailsTitle = styled.h1`
  font-family: roboto;
  font-weight: 600;
  font-size: 30px;
  color: #1e293b;

  @media (min-width: 767px) and (max-width: 1100px) {
    font-size: 25px;
  }

  @media screen and (max-width: 767px) {
    font-size: 23px;
  }
`

export const CourseItemDetailsDescription = styled.p`
  font-family: roboto;
  font-weight: 400;
  font-size: 22px;
  line-height: 40px;
  letter-spacing: 0.01em;

  @media (min-width: 767px) and (max-width: 1100px) {
    font-size: 20px;
    line-height: 25px;
  }

  @media screen and (max-width: 767px) {
    font-size: 18px;
    line-height: 21px;
  }
`

// loading details

export const CourseItemDetailsLoadingContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const CourseItemDetailsLoadingContent = styled.div``

// failure details

export const CourseItemDetailsFailureContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const CourseItemDetailsFailureImg = styled.img`
  width: 40%;

  @media screen and (max-width: 767px) {
    width: 70%;
  }
`

export const CourseItemDetailsFailureHeading = styled.h1`
  line-height: 20px;
  font-family: roboto;
  font-weight: 600;
  letter-spacing: 0.02em;
  font-size: 32px;
  color: #475569;
`

export const CourseItemDetailsFailureDescription = styled.p`
  font-family: roboto;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #64748b;
`

export const CourseItemDetailsFailureBtn = styled.button`
  height: 35px;
  width: 85px;
  background-color: #4656a1;
  color: #ffffff;
  font-family: roboto;
  font-weight: 400;
  border: none;
  outline: none;
  border-radius: 4px;
`
