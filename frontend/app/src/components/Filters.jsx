// // src/components/Filters.jsx
// import React, { useState } from 'react';
// import './Filters.css';

// const Filters = ({ options, currentFilters, onChange }) => {
//   const [showFilters, setShowFilters] = useState(false);
//   const [localFilters, setLocalFilters] = useState(currentFilters);

//   const handleFilterChange = (e) => {
//     const { name, value } = e.target;
//     setLocalFilters(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const applyFilters = () => {
//     onChange(localFilters);
//   };

//   const resetFilters = () => {
//     const reset = {};
//     setLocalFilters(reset);
//     onChange(reset);
//   };

//   return (
//     <div className="filters">
//       <button 
//         onClick={() => setShowFilters(!showFilters)}
//         className="filter-toggle"
//       >
//         {showFilters ? 'Hide Filters' : 'Show Filters'}
//       </button>
      
//       {showFilters && (
//         <div className="filter-controls">
//           <div className="filter-row">
//             <div className="filter-group">
//               <label>Subject:</label>
//               <select
//                 name="subject"
//                 value={localFilters.subject || ''}
//                 onChange={handleFilterChange}
//               >
//                 <option value="">All Subjects</option>
//                 {options.subjects?.map(subject => (
//                   <option key={subject} value={subject}>{subject}</option>
//                 ))}
//               </select>
//             </div>
            
//             <div className="filter-group">
//               <label>Technology:</label>
//               <select
//                 name="technology"
//                 value={localFilters.technology || ''}
//                 onChange={handleFilterChange}
//               >
//                 <option value="">All Technologies</option>
//                 {options.technologies?.map(tech => (
//                   <option key={tech} value={tech}>{tech}</option>
//                 ))}
//               </select>
//             </div>
            
//             <div className="filter-group">
//               <label>Project:</label>
//               <select
//                 name="project"
//                 value={localFilters.project || ''}
//                 onChange={handleFilterChange}
//               >
//                 <option value="">All Projects</option>
//                 {options.projects?.map(project => (
//                   <option key={project} value={project}>{project}</option>
//                 ))}
//               </select>
//             </div>
//           </div>
          
//           <div className="filter-row">
//             <div className="filter-group">
//               <label>Date:</label>
//               <input
//                 type="date"
//                 name="date"
//                 value={localFilters.date || ''}
//                 onChange={handleFilterChange}
//               />
//             </div>
            
//             <div className="filter-group">
//               <label>Center:</label>
//               <select
//                 name="centre"
//                 value={localFilters.centre || ''}
//                 onChange={handleFilterChange}
//               >
//                 <option value="">All Centers</option>
//                 {options.centres?.map(centre => (
//                   <option key={centre} value={centre}>{centre}</option>
//                 ))}
//               </select>
//             </div>
            
//             <div className="filter-group">
//               <label>Mode:</label>
//               <select
//                 name="mode"
//                 value={localFilters.mode || ''}
//                 onChange={handleFilterChange}
//               >
//                 <option value="">All Modes</option>
//                 {options.modes?.map(mode => (
//                   <option key={mode} value={mode}>{mode}</option>
//                 ))}
//               </select>
//             </div>
//           </div>
          
//           <div className="filter-row">
//             <div className="filter-group">
//               <label>Speaker:</label>
//               <select
//                 name="speaker"
//                 value={localFilters.speaker || ''}
//                 onChange={handleFilterChange}
//               >
//                 <option value="">All Speakers</option>
//                 {options.speakers?.map(speaker => (
//                   <option key={speaker} value={speaker}>{speaker}</option>
//                 ))}
//               </select>
//             </div>
//           </div>
          
//           <div className="filter-buttons">
//             <button onClick={applyFilters} className="apply-btn">
//               Apply Filters
//             </button>
//             <button onClick={resetFilters} className="reset-btn">
//               Reset Filters
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Filters;

import React, { useState } from 'react';
import './Filters.css';
import filterExampleImage from './filter-example.png'; // You'll need to add this image

const Filters = ({ options, currentFilters, onChange }) => {
  const [showFilters, setShowFilters] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [localFilters, setLocalFilters] = useState(currentFilters);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setLocalFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const applyFilters = () => {
    onChange(localFilters);
  };

  const resetFilters = () => {
    const reset = {};
    setLocalFilters(reset);
    onChange(reset);
  };

  const fillExampleFilters = () => {
    setLocalFilters({
      subject: 'demo',
      technology: 'java',
      project: 'isea',
      centre: 'Inderlok',
      mode: 'Offline',
      speaker: 'ansh'
    });
    setShowHelp(false);
  };

  return (
    <div className="filters">
      <div className="filter-header">
        <button 
          onClick={() => setShowFilters(!showFilters)}
          className="filter-toggle"
        >
          {showFilters ? 'Hide Filters' : 'Show Filters'}
        </button>
        <button 
          className="filter-help-button"
          onClick={() => setShowHelp(true)}
        >
          Help
        </button>
      </div>
      
      {showFilters && (
        <div className="filter-controls">
          <div className="filter-row">
            <div className="filter-group">
              <label>Subject:</label>
              <select
                name="subject"
                value={localFilters.subject || ''}
                onChange={handleFilterChange}
              >
                <option value="">All Subjects</option>
                {options.subjects?.map(subject => (
                  <option key={subject} value={subject}>{subject}</option>
                ))}
              </select>
            </div>
            
            <div className="filter-group">
              <label>Technology:</label>
              <select
                name="technology"
                value={localFilters.technology || ''}
                onChange={handleFilterChange}
              >
                <option value="">All Technologies</option>
                {options.technologies?.map(tech => (
                  <option key={tech} value={tech}>{tech}</option>
                ))}
              </select>
            </div>
            
            <div className="filter-group">
              <label>Project:</label>
              <select
                name="project"
                value={localFilters.project || ''}
                onChange={handleFilterChange}
              >
                <option value="">All Projects</option>
                {options.projects?.map(project => (
                  <option key={project} value={project}>{project}</option>
                ))}
              </select>
            </div>
          </div>
          
          <div className="filter-row">
            <div className="filter-group">
              <label>Date:</label>
              <input
                type="date"
                name="date"
                value={localFilters.date || ''}
                onChange={handleFilterChange}
              />
            </div>
            
            <div className="filter-group">
              <label>Center:</label>
              <select
                name="centre"
                value={localFilters.centre || ''}
                onChange={handleFilterChange}
              >
                <option value="">All Centers</option>
                {options.centres?.map(centre => (
                  <option key={centre} value={centre}>{centre}</option>
                ))}
              </select>
            </div>
            
            <div className="filter-group">
              <label>Mode:</label>
              <select
                name="mode"
                value={localFilters.mode || ''}
                onChange={handleFilterChange}
              >
                <option value="">All Modes</option>
                {options.modes?.map(mode => (
                  <option key={mode} value={mode}>{mode}</option>
                ))}
              </select>
            </div>
          </div>
          
          <div className="filter-row">
            <div className="filter-group">
              <label>Speaker:</label>
              <select
                name="speaker"
                value={localFilters.speaker || ''}
                onChange={handleFilterChange}
              >
                <option value="">All Speakers</option>
                {options.speakers?.map(speaker => (
                  <option key={speaker} value={speaker}>{speaker}</option>
                ))}
              </select>
            </div>
          </div>
          
          <div className="filter-buttons">
            <button onClick={applyFilters} className="apply-btn">
              Apply Filters
            </button>
            <button onClick={resetFilters} className="reset-btn">
              Reset Filters
            </button>
          </div>
        </div>
      )}

      {showHelp && (
        <div className="filter-help-modal">
          <div className="filter-help-content">
            <button className="close-button" onClick={() => setShowHelp(false)}>
              &times;
            </button>
            <h2>Filter Help</h2>
            
            <div className="help-section">
              <h3>Example Filter Values</h3>
              <div className="example-data">
                <pre>
                  {JSON.stringify({
                    "Subject": "demo",
                    "Technology": "java",
                    "Project": "isea",
                    "Center": "Inderlok",
                    "Mode": "Offline",
                    "Speaker": "ansh"
                  }, null, 2)}
                </pre>
                <button 
                  className="fill-example-btn"
                  onClick={fillExampleFilters}
                >
                  Apply Example Filters
                </button>
              </div>
            </div>
            
            <div className="help-section">
              <h3>How to Use Filters</h3>
              <img 
                src={filterExampleImage} 
                alt="Filter example" 
                className="filter-example-image"
              />
              <ol className="filter-steps">
                <li>Click "Show Filters" to expand the filter panel</li>
                <li>Select values from the dropdown menus</li>
                <li>Click "Apply Filters" to filter the results</li>
                <li>Use "Reset Filters" to clear all selections</li>
              </ol>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Filters;