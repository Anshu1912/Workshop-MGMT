// src/components/AddWorkshop.jsx
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { addWorkshop } from '../services/api';
// import './AddWorkshop.css';

// const AddWorkshop = () => {
//   const navigate = useNavigate(); // 
//   const [formData, setFormData] = useState({
//     subject: '',
//     from_date: '',
//     till_date: '',
//     technology: '',
//     project: '',
//     venue: '',
//     centre: '',
//     mode: '',
//     speaker_name: '',
//     other1: '',
//     other2: '',
//     other3: ''
//   });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError('');
    
//     try {
//       await addWorkshop(formData);
//       navigate('/workshops');
//     } catch (err) {
//       setError(err.response?.data?.error || 'Failed to add workshop');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="add-workshop">
//       <h1>Add New Workshop</h1>
      
//       {error && <div className="error-message">{error}</div>}
      
//       <form onSubmit={handleSubmit}>
//         <div className="form-row">
//           <div className="form-group">
//             <label>Subject:</label>
//             <input
//               type="text"
//               name="subject"
//               value={formData.subject}
//               onChange={handleChange}
//               required
//             />
//           </div>
          
//           <div className="form-group">
//             <label>From Date:</label>
//             <input
//               type="date"
//               name="from_date"
//               value={formData.from_date}
//               onChange={handleChange}
//               required
//             />
//           </div>
          
//           <div className="form-group">
//             <label>Till Date:</label>
//             <input
//               type="date"
//               name="till_date"
//               value={formData.till_date}
//               onChange={handleChange}
//               required
//             />
//           </div>
//         </div>
        
//         <div className="form-row">
//           <div className="form-group">
//             <label>Technology:</label>
//             <input
//               type="text"
//               name="technology"
//               value={formData.technology}
//               onChange={handleChange}
//               required
//             />
//           </div>
          
//           <div className="form-group">
//             <label>Project:</label>
//             <input
//               type="text"
//               name="project"
//               value={formData.project}
//               onChange={handleChange}
//             />
//           </div>
          
//           <div className="form-group">
//             <label>Venue:</label>
//             <input
//               type="text"
//               name="venue"
//               value={formData.venue}
//               onChange={handleChange}
//               required
//             />
//           </div>
//         </div>
        
//         <div className="form-row">
//           <div className="form-group">
//             <label>Center:</label>
//             <select
//               name="centre"
//               value={formData.centre}
//               onChange={handleChange}
//               required
//             >
//               <option value="">Select Center</option>
//               <option value="Janakpuri">Janakpuri</option>
//               <option value="Karkardooma">Karkardooma</option>
//               <option value="Inderlok">Inderlok</option>
//             </select>
//           </div>
          
//           <div className="form-group">
//             <label>Mode:</label>
//             <select
//               name="mode"
//               value={formData.mode}
//               onChange={handleChange}
//               required
//             >
//               <option value="">Select Mode</option>
//               <option value="Offline">Offline</option>
//               <option value="Online">Online</option>
//             </select>
//           </div>
          
//           <div className="form-group">
//             <label>Speaker Name:</label>
//             <input
//               type="text"
//               name="speaker_name"
//               value={formData.speaker_name}
//               onChange={handleChange}
//               required
//             />
//           </div>
//         </div>
        
//         <div className="form-row">
//           <div className="form-group">
//             <label>Other Option 1:</label>
//             <input
//               type="text"
//               name="other1"
//               value={formData.other1}
//               onChange={handleChange}
//             />
//           </div>
          
//           <div className="form-group">
//             <label>Other Option 2:</label>
//             <input
//               type="text"
//               name="other2"
//               value={formData.other2}
//               onChange={handleChange}
//             />
//           </div>
          
//           <div className="form-group">
//             <label>Other Option 3:</label>
//             <input
//               type="text"
//               name="other3"
//               value={formData.other3}
//               onChange={handleChange}
//             />
//           </div>
//         </div>
        
//         <button type="submit" disabled={loading} className="submit-btn">
//           {loading ? 'Adding...' : 'Add Workshop'}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddWorkshop;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addWorkshop } from '../services/api';
import './AddWorkshop.css';

const AddWorkshop = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    subject: '',
    from_date: '',
    till_date: '',
    technology: '',
    project: '',
    venue: '',
    centre: '',
    mode: '',
    speaker_name: '',
    other1: '',
    other2: '',
    other3: ''
  });
  const [loading, setLoading] = useState(false);
  const [showHelp, setShowHelp] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      await addWorkshop(formData);
      navigate('/new');
    } catch (err) {
      console.error('Error adding workshop:', err);
    } finally {
      setLoading(false);
    }
  };

  const toggleHelp = () => {
    setShowHelp(!showHelp);
  };

  const fillExample = () => {
    setFormData({
      subject: 'Demo Workshop',
      from_date: '2025-04-09',
      till_date: '2025-04-17',
      technology: 'Java',
      project: 'ISEA',
      venue: 'Delhi',
      centre: 'Inderlok',
      mode: 'Offline',
      speaker_name: 'Ansh',
      other1: '',
      other2: '',
      other3: ''
    });
    setShowHelp(false);
  };

  return (
    <div className="add-workshop">
      <h1>Add New Workshop</h1>
      
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label>Subject:</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label>From Date:</label>
            <input
              type="date"
              name="from_date"
              value={formData.from_date}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label>Till Date:</label>
            <input
              type="date"
              name="till_date"
              value={formData.till_date}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        
        <div className="form-row">
          <div className="form-group">
            <label>Technology:</label>
            <input
              type="text"
              name="technology"
              value={formData.technology}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label>Project:</label>
            <input
              type="text"
              name="project"
              value={formData.project}
              onChange={handleChange}
            />
          </div>
          
          <div className="form-group">
            <label>Venue:</label>
            <input
              type="text"
              name="venue"
              value={formData.venue}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        
        <div className="form-row">
          <div className="form-group">
            <label>Center:</label>
            <select
              name="centre"
              value={formData.centre}
              onChange={handleChange}
              required
            >
              <option value="">Select Center</option>
              <option value="Janakpuri">Janakpuri</option>
              <option value="Karkardooma">Karkardooma</option>
              <option value="Inderlok">Inderlok</option>
            </select>
          </div>
          
          <div className="form-group">
            <label>Mode:</label>
            <select
              name="mode"
              value={formData.mode}
              onChange={handleChange}
              required
            >
              <option value="">Select Mode</option>
              <option value="Offline">Offline</option>
              <option value="Online">Online</option>
            </select>
          </div>
          
          <div className="form-group">
            <label>Speaker Name:</label>
            <input
              type="text"
              name="speaker_name"
              value={formData.speaker_name}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        
        <div className="form-row">
          <div className="form-group">
            <label>Other Option 1:</label>
            <input
              type="text"
              name="other1"
              value={formData.other1}
              onChange={handleChange}
            />
          </div>
          
          <div className="form-group">
            <label>Other Option 2:</label>
            <input
              type="text"
              name="other2"
              value={formData.other2}
              onChange={handleChange}
            />
          </div>
          
          <div className="form-group">
            <label>Other Option 3:</label>
            <input
              type="text"
              name="other3"
              value={formData.other3}
              onChange={handleChange}
            />
          </div>
        </div>
        
        <div className="form-actions">
          <button type="submit" disabled={loading} className="submit-btn">
            {loading ? 'Adding...' : 'Add Workshop'}
          </button>
          <button 
            type="button" 
            className="help-button" 
            onClick={toggleHelp}
          >
            Help
          </button>
        </div>
      </form>

      {showHelp && (
        <div className="help-modal">
          <div className="help-modal-content">
            <button className="close-button" onClick={toggleHelp}>
              &times;
            </button>
            <h2>Workshop Form Help</h2>
            
            <div className="help-section">
              <h3>Example Workshop Data</h3>
              <div className="example-data">
                <pre>
                  {JSON.stringify({
                    "Subject": "Demo Workshop",
                    "From_Date": "2025-04-09",
                    "Till_Date": "2025-04-17",
                    "Technology": "Java",
                    "Project": "ISEA",
                    "venue": "Delhi",
                    "center": "Inderlok",
                    "Mode": "Offline",
                    "speaker": "Ansh"
                  }, null, 2)}
                </pre>
                <button 
                  className="fill-example-btn"
                  onClick={fillExample}
                >
                  Fill Example
                </button>
              </div>
            </div>
            
            <div className="help-section">
              <h3>Field Descriptions</h3>
              <ul className="field-descriptions">
                <li><strong>Subject:</strong> Workshop topic/title</li>
                <li><strong>From/Till Date:</strong> Workshop duration (YYYY-MM-DD)</li>
                <li><strong>Technology:</strong> Main technology covered</li>
                <li><strong>Project:</strong> Related project (if any)</li>
                <li><strong>Venue:</strong> Physical location</li>
                <li><strong>Center:</strong> Select from available centers</li>
                <li><strong>Mode:</strong> Online or Offline</li>
                <li><strong>Speaker:</strong> Workshop instructor</li>
                <li><strong>Other Fields:</strong> Optional additional info</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddWorkshop;