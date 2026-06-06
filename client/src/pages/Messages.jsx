import { useEffect, useMemo, useState } from 'react';
import axios from 'axios';

function formatDateTime(value) {
  if (!value) {
    return 'Date unavailable';
  }

  return new Intl.DateTimeFormat('en-LK', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  }).format(new Date(value));
}

export default function Messages() {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [password, setPassword] = useState(() => sessionStorage.getItem('messagesAdminPassword') || '');
  const [isAuthenticated, setIsAuthenticated] = useState(() => Boolean(sessionStorage.getItem('messagesAdminPassword')));
  const [authError, setAuthError] = useState('');
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [updatingId, setUpdatingId] = useState('');

  useEffect(() => {
    if (!isAuthenticated) {
      setIsLoading(false);
      return undefined;
    }

    let isMounted = true;

    async function loadMessages() {
      setIsLoading(true);
      try {
        const response = await axios.get('/api/contact', {
          headers: { 'x-admin-password': password },
        });
        if (isMounted) {
          setMessages(Array.isArray(response.data) ? response.data : []);
          setError('');
        }
      } catch (requestError) {
        if (isMounted) {
          if (requestError.response?.status === 401) {
            sessionStorage.removeItem('messagesAdminPassword');
            setIsAuthenticated(false);
            setPassword('');
            setAuthError('Your session expired or the password is incorrect.');
          } else {
            setError('Unable to load messages.');
          }
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    loadMessages();

    return () => {
      isMounted = false;
    };
  }, [isAuthenticated, password]);

  const sortedMessages = useMemo(
    () => [...messages].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)),
    [messages]
  );

  const handleLogin = async (event) => {
    event.preventDefault();
    setIsAuthenticating(true);
    setAuthError('');

    try {
      await axios.post('/api/contact/admin-login', { password });
      sessionStorage.setItem('messagesAdminPassword', password);
      setIsAuthenticated(true);
    } catch {
      setAuthError('Invalid admin password.');
    } finally {
      setIsAuthenticating(false);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('messagesAdminPassword');
    setPassword('');
    setMessages([]);
    setIsAuthenticated(false);
    setAuthError('');
    setError('');
  };

  const handleMarkedChange = async (id, isMarked) => {
    setUpdatingId(id);
    setMessages((current) =>
      current.map((item) => (item._id === id ? { ...item, isMarked } : item))
    );

    try {
      const response = await axios.patch(
        `/api/contact/${id}/marked`,
        { isMarked },
        { headers: { 'x-admin-password': password } }
      );
      setMessages((current) =>
        current.map((item) => (item._id === id ? response.data : item))
      );
      setError('');
    } catch {
      setMessages((current) =>
        current.map((item) => (item._id === id ? { ...item, isMarked: !isMarked } : item))
      );
      setError('Could not update marked status.');
    } finally {
      setUpdatingId('');
    }
  };

  const styles = {
    page: {
      minHeight: '100vh',
      background: 'linear-gradient(180deg, #08111f 0%, #0f172a 100%)',
      color: '#e5e7eb',
      padding: '4rem 1.5rem',
    },
    container: {
      maxWidth: '1120px',
      margin: '0 auto',
    },
    top: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      gap: '1.2rem',
      flexWrap: 'wrap',
      marginBottom: '1.6rem',
    },
    eyebrow: {
      margin: '0 0 0.7rem',
      color: '#7c8cff',
      fontSize: '0.82rem',
      fontWeight: 800,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
    },
    heading: {
      margin: 0,
      color: '#f8fafc',
      fontSize: 'clamp(2rem, 4vw, 3.2rem)',
      lineHeight: 1.05,
    },
    count: {
      border: '1px solid rgba(148, 163, 184, 0.18)',
      background: 'rgba(15, 23, 42, 0.82)',
      color: '#cbd5e1',
      borderRadius: '999px',
      padding: '0.75rem 1rem',
      fontWeight: 700,
    },
    authCard: {
      width: 'min(460px, 100%)',
      margin: '7rem auto 0',
      border: '1px solid rgba(148, 163, 184, 0.16)',
      background: 'rgba(15, 23, 42, 0.92)',
      boxShadow: '0 24px 70px rgba(0, 0, 0, 0.34)',
      borderRadius: 18,
      padding: '1.5rem',
    },
    authInput: {
      width: '100%',
      borderRadius: 12,
      border: '1px solid rgba(148, 163, 184, 0.2)',
      background: 'rgba(30, 41, 59, 0.86)',
      color: '#f8fafc',
      padding: '0.95rem 1rem',
      outline: 'none',
      fontSize: '1rem',
      boxSizing: 'border-box',
      marginTop: '0.8rem',
    },
    authButton: {
      width: '100%',
      border: 0,
      borderRadius: 12,
      background: '#7c8cff',
      color: '#fff',
      padding: '0.95rem 1rem',
      fontWeight: 800,
      cursor: 'pointer',
      marginTop: '1rem',
    },
    topActions: {
      display: 'flex',
      gap: '0.75rem',
      alignItems: 'center',
      flexWrap: 'wrap',
    },
    logoutButton: {
      border: '1px solid rgba(148, 163, 184, 0.2)',
      borderRadius: '999px',
      background: 'rgba(15, 23, 42, 0.82)',
      color: '#e2e8f0',
      padding: '0.75rem 1rem',
      fontWeight: 700,
      cursor: 'pointer',
    },
    grid: {
      display: 'grid',
      gap: '1rem',
    },
    card: {
      border: '1px solid rgba(148, 163, 184, 0.16)',
      background: 'rgba(15, 23, 42, 0.9)',
      boxShadow: '0 20px 55px rgba(0, 0, 0, 0.28)',
      borderRadius: 16,
      padding: '1.25rem',
    },
    markedCard: {
      borderColor: 'rgba(124, 140, 255, 0.38)',
      background: 'linear-gradient(180deg, rgba(124, 140, 255, 0.16), rgba(15, 23, 42, 0.92))',
    },
    cardTop: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: '1rem',
      flexWrap: 'wrap',
      marginBottom: '1rem',
    },
    name: {
      margin: 0,
      color: '#f8fafc',
      fontSize: '1.18rem',
    },
    date: {
      color: '#9fb0ff',
      fontSize: '0.9rem',
      fontWeight: 700,
    },
    markLabel: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.55rem',
      color: '#e2e8f0',
      fontWeight: 800,
      cursor: 'pointer',
      userSelect: 'none',
    },
    checkbox: {
      width: 18,
      height: 18,
      accentColor: '#7c8cff',
      cursor: 'pointer',
    },
    details: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
      gap: '0.8rem',
      marginBottom: '1rem',
    },
    detailBox: {
      borderRadius: 12,
      background: 'rgba(30, 41, 59, 0.62)',
      border: '1px solid rgba(148, 163, 184, 0.12)',
      padding: '0.8rem',
      minWidth: 0,
    },
    label: {
      display: 'block',
      color: '#94a3b8',
      fontSize: '0.78rem',
      fontWeight: 800,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      marginBottom: '0.35rem',
    },
    value: {
      color: '#e2e8f0',
      overflowWrap: 'anywhere',
      lineHeight: 1.55,
    },
    message: {
      margin: 0,
      color: '#f1f5f9',
      lineHeight: 1.75,
      whiteSpace: 'pre-wrap',
    },
    empty: {
      border: '1px dashed rgba(148, 163, 184, 0.28)',
      borderRadius: 16,
      padding: '2rem',
      color: '#cbd5e1',
      textAlign: 'center',
      background: 'rgba(15, 23, 42, 0.55)',
    },
  };

  if (!isAuthenticated) {
    return (
      <main style={styles.page}>
        <form onSubmit={handleLogin} style={styles.authCard}>
          <p style={styles.eyebrow}>Admin Access</p>
          <h1 style={styles.heading}>Messages</h1>
          <p style={{ color: '#cbd5e1', lineHeight: 1.65, margin: '0.9rem 0 0' }}>
            Enter your admin password to view contact form submissions.
          </p>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Admin password"
            style={styles.authInput}
            required
          />
          <button type="submit" style={styles.authButton} disabled={isAuthenticating}>
            {isAuthenticating ? 'Checking...' : 'Open Messages'}
          </button>
          {authError ? <p style={{ color: '#fca5a5', margin: '1rem 0 0', fontWeight: 700 }}>{authError}</p> : null}
        </form>
      </main>
    );
  }

  return (
    <main style={styles.page}>
      <div style={styles.container}>
        <div style={styles.top}>
          <div>
            <p style={styles.eyebrow}>Contact Submissions</p>
            <h1 style={styles.heading}>Messages</h1>
          </div>
          <div style={styles.topActions}>
            <div style={styles.count}>{sortedMessages.length} total</div>
            <button type="button" onClick={handleLogout} style={styles.logoutButton}>
              Sign out
            </button>
          </div>
        </div>

        {isLoading ? <div style={styles.empty}>Loading messages...</div> : null}
        {!isLoading && error ? <div style={styles.empty}>{error}</div> : null}
        {!isLoading && !error && sortedMessages.length === 0 ? <div style={styles.empty}>No messages saved yet.</div> : null}

        {!isLoading && !error && sortedMessages.length > 0 ? (
          <div style={styles.grid}>
            {sortedMessages.map((item) => (
              <article
                key={item._id || `${item.email}-${item.createdAt}`}
                style={item.isMarked ? { ...styles.card, ...styles.markedCard } : styles.card}
              >
                <div style={styles.cardTop}>
                  <div>
                    <h2 style={styles.name}>{item.name}</h2>
                    <time dateTime={item.createdAt} style={styles.date}>
                      {formatDateTime(item.createdAt)}
                    </time>
                  </div>
                  <label style={styles.markLabel}>
                    <input
                      type="checkbox"
                      checked={Boolean(item.isMarked)}
                      disabled={updatingId === item._id}
                      onChange={(event) => handleMarkedChange(item._id, event.target.checked)}
                      style={styles.checkbox}
                    />
                    Marked
                  </label>
                </div>

                <div style={styles.details}>
                  <div style={styles.detailBox}>
                    <span style={styles.label}>Email</span>
                    <a href={`mailto:${item.email}`} style={{ ...styles.value, color: '#9fb0ff', textDecoration: 'none' }}>
                      {item.email}
                    </a>
                  </div>
                  <div style={styles.detailBox}>
                    <span style={styles.label}>Company</span>
                    <span style={styles.value}>{item.companyName || 'Not provided'}</span>
                  </div>
                  <div style={styles.detailBox}>
                    <span style={styles.label}>Subject</span>
                    <span style={styles.value}>{item.subject || 'Portfolio inquiry'}</span>
                  </div>
                  <div style={styles.detailBox}>
                    <span style={styles.label}>Received</span>
                    <span style={styles.value}>{formatDateTime(item.createdAt)}</span>
                  </div>
                </div>

                <p style={styles.message}>{item.message}</p>
              </article>
            ))}
          </div>
        ) : null}
      </div>
    </main>
  );
}
