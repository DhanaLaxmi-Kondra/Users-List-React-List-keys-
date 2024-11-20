import UserProfile from './componets/UserProfile'

import './App.css'

const userDetailesList = [
  {
    uniqueNo: 1,
    url: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'Dhevansh',
    role: 'Web Developer',
  },
  {
    uniqueNo: 2,
    url: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Dhana',
    role: 'software Engeeniring',
  },
  {
    uniqueNo: 3,
    url: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Narendhar',
    role: 'UX/UI Designer',
  },
  {
    uniqueNo: 4,
    url: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Jayasri',
    role: 'software Engeeniring',
  },
  {
    uniqueNo: 5,
    url: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Laxmi',
    role: 'Data Analyst',
  },
  {
    uniqueNo: 6,
    url: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'Naveen',
    role: 'software Engeeniring',
  },
]

const App = () => (
  <div className="list-container">
    <h1 className="title">Users List</h1>
    <ul>
      {userDetailesList.map(eachItem => (
        <UserProfile userDetailes={eachItem} key={eachItem.uniqueNo} />
      ))}
    </ul>
  </div>
)

export default App
