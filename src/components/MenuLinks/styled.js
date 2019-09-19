
import styled from "styled-components"
import media from "styled-media-query"

import { Link } from "gatsby"
// import AniLink from "gatsby-plugin-transition-link/AniLink"

export const MenuLinksWrapper = styled.nav`
`

export const MenuLinksList = styled.ul`
  font-size: 1.2rem;
  font-weight: 300;
`

export const MenuLinksItem = styled.li`
  padding: 0.5rem 0;
  .active {
    color: #1fa1f2;
  }
`

export const MenuLinksLink = styled(Link)`
  color: #8899a6;
  text-decoration: none;
  transition: color 0.5s;
  cursor: pointer;
  &:hover {
    color: #1fa1f2;
  }
`