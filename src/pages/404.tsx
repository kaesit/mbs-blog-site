import React from 'react';
import { Link } from 'react-router-dom';

// Inline styles for a quick, theme-matching 404 page
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    width: '100%',
    backgroundColor: '#0a0a0a', // Dark background
    color: '#f5ecec', // Light text
    fontFamily: '"Cascadia Code", monospace',
  },
  title: {
    fontSize: '6rem',
    fontWeight: 700,
    color: '#58f0b5', // Your primary color
    margin: 0,
  },
  message: {
    fontSize: '1.5rem',
    color: '#f5ecec',
    marginBottom: '30px',
  },
  link: {
    fontSize: '1rem',
    color: '#f5ecec',
    backgroundColor: '#17171c', // Dark button
    padding: '10px 20px',
    borderRadius: '5px',
    textDecoration: 'none',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    transition: 'all 0.3s ease',
  },
  linkHover: { // Note: You'd need to use CSS classes for :hover
    color: '#58a6f0', // Your hover color
    borderColor: '#58a6f0',
  }
};

const NotFoundPage: React.FC = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>// 404</h1>
      <p style={styles.message}>[Page Not Found]</p>
      <Link to="/" style={styles.link}
        onMouseEnter={(e) => (e.currentTarget.style.color = styles.linkHover.color, 
                                e.currentTarget.style.borderColor = styles.linkHover.borderColor!)}
        onMouseLeave={(e) => (e.currentTarget.style.color = styles.link.color!, 
                                e.currentTarget.style.borderColor = styles.link.borderColor!)}
      >
        &lt; Go Home /&gt;
      </Link>
    </div>
  );
};

export default NotFoundPage;