import Link from "next/link"

const Index = () => (
  <div>
    <h1>SSR MAGICIAN</h1>
     <Link href="/about">About</Link>
     {/* <a href="/about">About</a> */} <br />
     <Link href="/robots">Robots</Link>
  </div>
)

export default Index;