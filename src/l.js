// useEffect(() => {



       
//     const url = `https://quizapi.io/api/v1/questions?limit=10`;

// fetch(url, {
//   method: 'GET',
//   headers: {
//     'X-Api-Key': 'FPxcuWls02NBGHwWi16e1v8VDbyLQwBc8iEH1Vvr', 
//   }
// })
// .then(response => {
//   if (response.ok) {
//     return response.json();
//   }
//   throw new Error('Network response was not ok.');
// })
// .then(data => {
//   console.log('API Data:', data);
// })
// .catch(error => {
//   console.error('There was a problem with the fetch operation:', error);

// });

 
// }, [])





<section className='bg-[#fafbfb] mx-auto flex flex-col items-center p-4'>
<p>Check out our predefined quizzes! You can use the search bar to filter what you need.</p>
<br />

<input
  className="mx-auto w-96 px-3 py-2 border rounded-lg text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
  type="text"
  placeholder="QUIZZ search"
  value={search}
  onChange={handleSearchChange}
  style={{ margin: '20px 0' }}
/>
<br />

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
  {(search ? filteredQuizArray : quizArrays.length > 0 ? quizArrays : quizArray).map((question, index) => (
    <Link to="/Quizz">
      <div  onClick={() => handleCardClick(question.title, question.category, question.level)} className="shadow-2xl bg-[#fafbfb] max-h-36 overflow-hidden">
        <div className="p-4">
          <div className="tracking-wide font-medium font-sans">{question.title}</div>
          <div className="mb-2">
            Category: {question.category} Difficulty: {question.level}
          </div>
        </div>
      </div>
    </Link>
  ))}
</div>
</section>