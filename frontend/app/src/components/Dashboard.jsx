// // src/components/Dashboard.jsx
// import React, { useEffect, useState } from 'react';
// import { getWorkshopStats } from '../services/api';
// import StatsCard from './StatsCard';
// import './Dashboard.css';

// const Dashboard = () => {
//   const [stats, setStats] = useState({});
//   const [year, setYear] = useState(new Date().getFullYear());
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchStats = async () => {
//       try {
//         setLoading(true);
//         const data = await getWorkshopStats(year);
//         setStats(data);
//       } catch (error) {
//         console.error('Error fetching stats:', error);
//       } finally {
//         setLoading(false);
//       }
//     };
    
//     fetchStats();
//   }, [year]);

//   const handleYearChange = (e) => {
//     setYear(e.target.value);
//   };

//   return (
//     <div className="dashboard">
//       <h1>Dashboard</h1>
//       <div className="year-selector">
//         <label htmlFor="year">Financial Year:</label>
//         <select id="year" value={year} onChange={handleYearChange}>
//           {Array.from({ length: 5 }, (_, i) => {
//             const y = new Date().getFullYear() - 2 + i;
//             return (
//               <option key={y} value={y}>
//                 {y}-{y + 1}
//               </option>
//             );
//           })}
//         </select>
//       </div>
      
//       {loading ? (
//         <div className="loading">Loading...</div>
//       ) : (
//         <div className="stats-grid">
//           <StatsCard 
//             title="Total Workshops" 
//             value={stats.total_workshops} 
//             icon="📊"
//           />
//           <StatsCard 
//             title="Total Participants" 
//             value={stats.total_participants} 
//             icon="👥"
//           />
//         </div>
//       )}
//     </div>
//   );
// };

// // export default Dashboard;
// import React, { useEffect, useState } from 'react';
// import { getWorkshopStats } from '../services/api';
// import StatsCard from './StatsCard';
// import './Dashboard.css';

// const Dashboard = () => {
//   const [stats, setStats] = useState({});
//   const [year, setYear] = useState(new Date().getFullYear());
//   const [loading, setLoading] = useState(true);
//   const [showHelp, setShowHelp] = useState(false);

//   useEffect(() => {
//     const fetchStats = async () => {
//       try {
//         setLoading(true);
//         const data = await getWorkshopStats(year);
//         setStats(data);
//       } catch (error) {
//         console.error('Error fetching stats:', error);
//       } finally {
//         setLoading(false);
//       }
//     };
    
//     fetchStats();
//   }, [year]);

//   const handleYearChange = (e) => {
//     setYear(e.target.value);
//   };

//   const toggleHelp = () => {
//     setShowHelp(!showHelp);
//   };

//   return (
//     <div className="dashboard">
//       <h1>Dashboard</h1>
//       <div className="year-selector">
//         <label htmlFor="year">Financial Year:</label>
//         <select id="year" value={year} onChange={handleYearChange}>
//           {Array.from({ length: 5 }, (_, i) => {
//             const y = new Date().getFullYear() - 2 + i;
//             return (
//               <option key={y} value={y}>
//                 {y}-{y + 1}
//               </option>
//             );
//           })}
//         </select>
//       </div>
      
//       {loading ? (
//          <div className="loading">Loading...</div>
//        ) : (
//          <div className="stats-grid">
//            <StatsCard 
//              title="Total Workshops" 
//              value={stats.total_workshops} 
//              icon="📊"
//            />
//            <StatsCard 
//              title="Total Participants" 
//              value={stats.total_participants} 
//              icon="👥"
//            />
//          </div>
//       )}

//       <div className="dashboard-footer">
//         <button className="help-button" onClick={toggleHelp}>
//           Help
//         </button>
//       </div>

//       {showHelp && (
//         <div className="help-modal">
//           <div className="help-modal-content">
//             <button className="close-button" onClick={toggleHelp}>
//               &times;
//             </button>
//             <h2>Dashboard Help</h2>
//             <div className="help-section">
//               <h3>Financial Year Selection</h3>
//               <p>
//                 Use the dropdown to select the financial year you want to view statistics for.
//                 The financial year runs from April 1 to March 31 of the following year.
//               </p>
//             </div>
//             <div className="help-section">
//               <h3>Statistics Cards</h3>
//               <p>
//                 <strong>Total Workshops:</strong> Shows the number of workshops conducted in the selected financial year.
//               </p>
//               <p>
//                 <strong>Total Participants:</strong> Shows the total number of participants across all workshops in the selected financial year.
//               </p>
//             </div>
//             <div className="help-section">
//               <h3>Need More Help?</h3>
//               <p>
//                 Contact the support team at <a href="mailto:support@workshops.com">support@workshops.com</a> or call +1 (555) 123-4567.
//               </p>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Dashboard;

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getWorkshopStats } from '../services/api';
import StatsCard from './StatsCard';
import './Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();
  const [stats, setStats] = useState({});
  const [year, setYear] = useState(new Date().getFullYear());
  const [loading, setLoading] = useState(true);
  const [showHelp, setShowHelp] = useState(false);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        setLoading(true);
        const data = await getWorkshopStats(year);
        setStats(data);
      } catch (error) {
        console.error('Error fetching stats:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchStats();
  }, [year]);

  const handleYearChange = (e) => {
    setYear(e.target.value);
  };

  const toggleHelp = () => {
    setShowHelp(!showHelp);
  };

  const navigateToWorkshops = () => {
    navigate('/workshops');
  };

  const navigateToParticipants = () => {
    navigate('/participants');
  };

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="year-selector">
        <label htmlFor="year">Financial Year:</label>
        <select id="year" value={year} onChange={handleYearChange}>
          {Array.from({ length: 10 }, (_, i) => {
            const y = new Date().getFullYear() - 2 + i;
            return (
              <option key={y} value={y}>
                {y}-{y + 1}
              </option>
            );
          })}
        </select>
      </div>
      
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="stats-grid">
          <StatsCard 
            title="Total Workshops" 
            value={stats.total_workshops} 
            icon="📊"
            onClick={navigateToWorkshops}
            clickable
          />
          <StatsCard 
            title="Total Participants" 
            value={stats.total_participants} 
            icon="👥"
            onClick={navigateToParticipants}
            clickable
          />
        </div>
      )}

      <div className="dashboard-footer">
        <button className="help-button" onClick={toggleHelp}>
          Help
        </button>
      </div>

      {showHelp && (
        <div className="help-modal">
          <div className="help-modal-content">
            <button className="close-button" onClick={toggleHelp}>
              &times;
            </button>
            <h2>Dashboard Help</h2>
            <div className="help-section">
              <h3>Financial Year Selection</h3>
              <p>
                Use the dropdown to select the financial year you want to view statistics for.
                The financial year runs from April 1 to March 31 of the following year.
              </p>
            </div>
            <div className="help-section">
              <h3>Statistics Cards</h3>
              <p>
                <strong>Total Workshops:</strong> Click to view all workshops. Shows the number of workshops conducted in the selected financial year.
              </p>
              <p>
                <strong>Total Participants:</strong> Click to view all participants. Shows the total number of participants across all workshops in the selected financial year.
              </p>
            </div>
            <div className="help-section">
              <h3>Need More Help?</h3>
              <p>
                Contact the support team at <a href="mailto:support@workshops.com">support@workshops.com</a> or call +1 (555) 123-4567.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;