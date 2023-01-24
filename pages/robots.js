import Link from 'next/link'

const Robots = (props) => {
  return (
  <div>
    <h1>Robots</h1>
    <Link href="/">
      <button>Home</button>
    </Link>
    <div>
      {
        props.robots.map(robot => (
         <li key={robot.id}>
          <Link href={`robots/${robot.id}`}>
            {robot.name}
          </Link>
        </li>
        ))
      }
    </div>
  </div>
  )
}



// exporting getserversideprops individually instead of getinitialprops. needed to return a props object and assign the response data to robots, so that i can access it in props.robots.map above. this way data is requested from my own server instead of typicode
export const getServerSideProps = async function() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json()
  console.log(data)
  return {
    props: {
        robots: data // returned data assigned to robots,  
    }
    
  }
}

export default Robots;