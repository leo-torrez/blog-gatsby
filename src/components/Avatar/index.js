import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import * as S from "./styled"
const Avatar = () => {
  const { avatarImage } = useStaticQuery(
    graphql`
      query {
        avatarImage: file(relativePath: { eq: "pitang.PNG" }) {
          childImageSharp {
            fixed(width: 150, height: 60) {
              ...GatsbyImageSharpFixed_tracedSVG
            }
          }
        }
      }
    `
  )

  return <S.AvatarWrapper fixed={avatarImage.childImageSharp.fixed} />
}

export default Avatar
