import styled from 'styled-components'

export const TechEraContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`

export const TechEraContent = styled.div`
  margin: 0px 127px;
  height: 100%;

  @media screen and (max-width: 767px) {
    margin: 0px 32px;
  }
`

export const Heading = styled.h1`
  font-family: roboto;
  font-weight: 600;
  font-size: 30px;
  line-height: 21px;
  color: #1e293b;
  margin-bottom: 20px;
`

export const HomeLoadingContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const HomeLoadingContent = styled.div``

// failure view

export const TechEraFailureContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const TechEraFailureImg = styled.img`
  width: 40%;

  @media screen and (max-width: 767px) {
    width: 70%;
  }
`

export const TechEraFailureHeading = styled.h1`
  line-height: 20px;
  font-family: roboto;
  font-weight: 600;
  letter-spacing: 0.02em;
  font-size: 32px;
  color: #475569;
`

export const TechEraFailureDescription = styled.p`
  font-family: roboto;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #64748b;
`

export const TechEraFailureButton = styled.button`
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

// success view

export const TechEraCoursesList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  overflow-y: auto;
  margin-top: 40px;
`
