'use client';
import { useEffect, useState } from 'react';
import './RobotAssistant.css';


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
    <div className='robotas'
      style={{
        zIndex: 1000,
        textAlign: 'center',
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? 'auto' : 'none',
      }}
    >
      <img
        src="/images/robot.png"
        alt="Робот"
        style={{ width: '100%', marginBottom: '10px' }}
      />
      {currentMessage && (
        <div className='robotas__container'
          style={{

          }}
        >
          <img
            src="/images/Union.png"
            alt="Робот"
            style={{ width: "500px", height: "127px" }}
          />
          <p>
            {currentMessage}
          </p>
        </div>
      )}
    </div>
  );
}
