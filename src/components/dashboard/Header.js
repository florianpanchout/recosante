import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin-bottom: 5rem;

  ${(props) => props.theme.mq.medium} {
    margin-bottom: 2rem;
  }
`
const Title = styled.h1`
  margin: 0 0 0 -0.15rem;

  ${(props) => props.theme.mq.medium} {
    text-align: center;
  }
`
const Name = styled.span`
  color: ${(props) => props.theme.colors.main};
`
const Date = styled.span`
  font-size: 2rem;
  font-weight: 300;
  color: ${(props) => props.theme.colors.text};

  ${(props) => props.theme.mq.medium} {
    display: block;
    margin: 0.2rem 0 0.4rem;
    font-size: 1.25rem;
  }
  ${(props) => props.theme.mq.small} {
    font-size: 1.125rem;
  }
`
const Intro = styled.span`
  ${(props) => props.theme.mq.medium} {
    display: none;
  }
`
const Details = styled.div`
  font-size: 1.25rem;
  font-weight: 300;

  ${(props) => props.theme.mq.medium} {
    display: block;
    font-size: 1rem;
    text-align: center;
  }
  ${(props) => props.theme.mq.medium} {
    font-size: 0.875rem;
  }
`
export default function Header(props) {
  return (
    <Wrapper>
      <Title>
        <Name>{props.place.nom}</Name>
        <Date>
          <Intro>, le </Intro>
          {new Intl.DateTimeFormat('fr-FR', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          }).format()}
        </Date>
      </Title>
      <Details>
        {props.place.codesPostaux.length > 2
          ? props.place.codesPostaux[0] +
            ' ... ' +
            props.place.codesPostaux[props.place.codesPostaux.length - 1]
          : props.place.codesPostaux.join(', ')}{' '}
        - {props.place.departement.nom}
      </Details>
    </Wrapper>
  )
}
