import styled from "styled-components"
import media from "styled-media-query"

export const SocialLinksWrapper = styled.nav`
  margin: 2rem auto;
  width: 100%;
  ${media.lessThan("large")`
    display: none;
  `}
`

export const SocialLinksList = styled.ul`
  align-items: center;
  display: flex;
  justify-content: center;
  list-style: none;
`

export const SocialLinksItem = styled.li`
  margin-right: 10px;
`

export const SocialLinksLink = styled.a`
  color: #fff;
  text-decoration: none;
  transition: color 0.5s;
  &:hover {
    font-weight: bold;
  }
`

export const IconWrapper = styled.div`
  svg {
    fill: #fff !important;
  width: 30px;
  height: 30px;
  }

`