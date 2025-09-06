'use client';
import { useEffect, useState } from 'react';

export default function RobotAssistant() {
  const [currentMessage, setCurrentMessage] = useState('');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll('[data-robot]');
    const observer = new IntersectionObserver(
      (entries) => {
        let activeMessage = '';
        let isVisible = false;

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isVisible = true;
            activeMessage = entry.target.getAttribute('data-robot') || '';
          }
        });

        setVisible(isVisible);
        if (activeMessage) {
          setCurrentMessage(activeMessage);
        }
      },
      { threshold: 0.5 }
    );

    sections.forEach((sec) => observer.observe(sec));

    return () => observer.disconnect();
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '50px',
        right: '50px',
        width: '150px',
        zIndex: 1000,
        textAlign: 'center',
        transition: 'opacity 0.3s ease-in-out',
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? 'auto' : 'none', // 🔑 вот это решает проблему
      }}
    >
      <img
        src="/images/robot.png"
        alt="Робот"
        style={{ width: '100%', marginBottom: '10px' }}
      />
      {currentMessage && (
        <div
          style={{
            background: '#fff',
            padding: '10px',
            borderRadius: '10px',
            boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
            fontSize: '14px',
          }}
        >
          {currentMessage}
        </div>
      )}
    </div>
  );
}
