import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import { Link } from 'react-router-dom';

function LeaderBoards() {
  const [leaderboardData, setLeaderboardData] = useState(null);

  useEffect(() => {
    const getResult = async () => {
      try {
        const response = await axios.get('http://localhost:8011/get');
        console.log(response.data);
        setLeaderboardData(response.data.user);
      } catch (error) {
        console.error('Error fetching leaderboard data:', error.message);
      }
    };

    getResult();
  }, []);

  return (
    <>
    <Link to={"/"}> <ArrowCircleLeftIcon fontSize="medium" style={{ marginTop:"3px" }}/></Link>
   
    <div className="container  p-8">
      <h2 className="text-3xl font-bold mb-4">LeaderBoards</h2>
      {leaderboardData ? (
      <table class="min-w-full bg-white border border-gray-300">
      <thead>
        <tr>
          <th class="py-2 px-4 border-b text-left">Username</th>
          <th class="py-2 px-4 border-b text-left">Email</th>
          <th class="py-2 px-4 border-b text-left">Date & Time</th>
          <th class="py-2 px-4 border-b text-left">Category</th>
          <th class="py-2 px-4 border-b text-left">Score</th>
          <th class="py-2 px-4 border-b text-left">Grade</th>
        </tr>
      </thead>
      <tbody>
        {leaderboardData.map((user, index) => (
          <tr key={index} class="bg-gray-100">
            <td class="py-2 px-4 border-b text-left">{user.name}</td>
            <td class="py-2 px-4 border-b text-left">{user.email}</td>
            <td class="py-2 px-6 border-b text-left">{user.istFormattedDate}</td>  
            <td class="py-2 px-4 border-b text-left">{user.category} interview quetions</td>
            <td class="py-2 px-6 border-b text-left">{user.score}</td>
            <td class="py-2 px-6 border-b text-left">{user.grade}</td>
            
          </tr>
        ))}
      </tbody>
    </table>
      
      ) : (
        <p className="text-gray-700">Loading leaderboard data...</p>
      )}
    </div>
    </>
  );
}

export default LeaderBoards;
