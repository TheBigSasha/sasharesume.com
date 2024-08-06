import { FC } from 'react'
import { FaInfoCircle } from 'react-icons/fa'
import styled from 'styled-components'

const ButtonHolder = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  margin: 0.5rem;
  button {
    border: 1px solid var(--gray-400);
    padding: 0.5rem 1rem;
    border-radius: var(--border-radius);
    cursor: pointer;
    transition: all 0.2s;
    background: var(--gray-100);
    width: 100%;
    flex-grow: 1;
    width: min(100%, 10rem);
    &:hover {
      background: var(--gray-50);
    }
  }
`

const AppearingCard = styled.a`
  @media (max-width: 600px) {
    position: relative;
    #sashaphoto-header-image {
      height: 9rem;
      object-fit: cover;
      transition: all 0.5s;
    }
  }
  @media (min-width: 600px) {
    opacity: 0;
    bottom: -100px;
    box-shadow: 0 0 1rem 0.5rem var(--gray-200);
    animation: appear 1s forwards;
    position: fixed;
    z-index: 1000;
    right: 1.2rem;
    bottom: 1.2rem;

    @keyframes appear {
      to {
        opacity: 1;
        bottom: 1rem;
      }
    }
    #sashaphoto-header-image {
      height: 2rem;
      object-fit: cover;
      transition: all 0.5s;
    }
  }

  &:hover {
    #sashaphoto-header-image {
      height: 9rem;
      transition: all 0.5s;
    }
  }
`

export const SashaphotoAd: FC<{}> = () => {
  return (
    <AppearingCard href={`https://sashaphoto.ca?sr=tbsc`}>
      <div
        style={{
          background: 'var(--gray-100)',
          borderRadius: 'var(--border-radius)',
          boxShadow: 'var(--shadow)',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '30rem',
          margin: '0 auto',
        }}
      >
        <img
          id="sashaphoto-header-image"
          style={{
            borderRadius: 'var(--border-radius) var(--border-radius) 0 0 ',
          }}
          src="https://res.cloudinary.com/dsqtaqrcl/image/upload/q_auto/f_auto/c_fill,w_960/v1716345646/SP-35_s9w9ha.heic?_a=DATAfRa2ZAA0"
        />
        <div
          style={{
            margin: '1rem',
            display: 'flex',
            position: 'relative',
            flexDirection: 'column',
            marginTop: '0',
            gap: '0.5rem',
          }}
        >
          <FaInfoCircle style={{ position: 'absolute', left: '0', top: '0' }} />
          <h3 style={{ margin: 0 }}>sashaphoto.ca redesign</h3>
          <p style={{ margin: 0 }}>
            Check out my new site all about imaging art and technology
          </p>
        </div>
        <ButtonHolder>
          <a href={`https://sashaphoto.ca?sr=tbsc`}>
            <button>Visit</button>
          </a>
          <a href={`https://sashaphoto.ca/about?sr=tbsc`}>
            <button>Learn More</button>
          </a>
        </ButtonHolder>
      </div>
    </AppearingCard>
  )
}
