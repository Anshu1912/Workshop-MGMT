// // src/components/StatsCard.jsx
// import React from 'react';
// import './StatsCard.css';

// const StatsCard = ({ title, value, icon }) => {
//   return (
//     <div className="stats-card">
//       <div className="stats-icon">{icon}</div>
//       <div className="stats-content">
//         <h3>{title}</h3>
//         <p>{value || 0}</p>
//       </div>
//     </div>
//   );
// };

// export default StatsCard;

// src/components/StatsCard.jsx
import React from 'react';
import './StatsCard.css';

const StatsCard = ({ title, value, loading, isLabel = false }) => {
  return (
    <div className={`stats-card ${isLabel ? 'label-card' : ''}`}>
      <h3>{title}</h3>
      {loading ? (
        <div className="stats-loader"></div>
      ) : (
        <div className={`stats-value ${isLabel ? 'label-value' : ''}`}>
          {value}
        </div>
      )}
    </div>
  );
};

export default StatsCard;