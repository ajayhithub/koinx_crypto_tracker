import { useEffect, useState } from "react";
import "./TeamTab.css";

const TeamTab = () => {
  const [teamData, setTeamData] = useState([]);

  // useEffect(() => {
  //   // Replace with your API endpoint
  //   fetch("https://api.example.com/team")
  //     .then((response) => response.json())
  //     .then((data) => setTeamData(data))
  //     .catch((error) => console.error("Error fetching team data:", error));
  // }, []);

  useEffect(() => {
    
    const mockData = [
      {
        id: 1,
        name: "John Smith",
        designation: "CEO",
        image: "https://via.placeholder.com/150",
        description: "John is an experienced leader with a passion for innovation and growth.",
      },
      {
        id: 2,
        name: "Elina Williams",
        designation: "CTO",
        image: "https://via.placeholder.com/150",
        description: "Elina leads the technology team with expertise in blockchain and AI.",
      },
      {
        id: 3,
        name: "David Johnson",
        designation: "COO",
        image: "https://via.placeholder.com/150",
        description: "David ensures the company operations run smoothly and efficiently.",
      },
    ];

   
    setTimeout(() => {
      setTeamData(mockData);
    }, 1000);
  }, []);

  if (teamData.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="team-tab">
      <h2>Team</h2>
      <p>Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu nibh.</p>
      <div className="team-cards">
        {teamData.map((member) => (
         <div key={member.id} className="team-card">
         <div className="team-info">
           <img src={member.image} alt={member.name} className="team-image" />
           <div className="name-designation">
             <h4>{member.name}</h4>
             <p className="designation">{member.designation}</p>
           </div>
         </div>
         <p className="description">{member.description}</p>
       </div>
       
        
        ))}
      </div>
    </div>
  );
};

export default TeamTab;