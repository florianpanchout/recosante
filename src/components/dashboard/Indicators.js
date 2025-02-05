import React from 'react'
import styled from 'styled-components'
import Masonry from 'react-masonry-css'

import IndiceAtmo from './indicators/IndiceAtmo'
import Raep from './indicators/Raep'

const StyledMasonry = styled(Masonry)`
  display: flex;
  margin-left: -2rem;
  width: auto;

  .my-masonry-grid_column {
    padding-left: 2rem;
  }
`
export default function Indicators(props) {
  return (
    <StyledMasonry
      breakpointCols={{
        default: 2,
        1200: 1,
      }}
      columnClassName='my-masonry-grid_column'
    >
      <IndiceAtmo place={props.place} />
      <Raep place={props.place} />
    </StyledMasonry>
  )
}
