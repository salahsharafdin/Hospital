import React, { useState, useEffect } from 'react';

export default function StatsCounter({ target, duration = 2000, suffix = "" }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    // parse the numeric part of the target (e.g. "15000+" -> 15000)
    const end = parseInt(target.toString().replace(/,/g, '').replace(/\+/g, ''), 10);
    if (isNaN(end)) {
      setCount(target);
      return;
    }

    if (end === 0) return;

    const increment = Math.ceil(end / (duration / 30));
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(start);
      }
    }, 30);

    return () => clearInterval(timer);
  }, [target, duration]);

  // format count back to readable string with commas
  const formatted = count.toLocaleString();

  return (
    <span className="font-heading font-bold text-3xl md:text-4xl text-primary">
      {formatted}
      {suffix}
    </span>
  );
}
