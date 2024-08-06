import { FC } from 'react'
import { FaInfoCircle } from 'react-icons/fa'

export const SashaphotoAd: FC<{}> = () => {
  return (
    <a
      href={`https://sashaphoto.ca?sr=tbsc`}
      style={{
        position: 'fixed',
        bottom: '1rem',
        right: '1rem',
        zIndex: 1000,
      }}
    >
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
      </div>
    </a>
  )
}
