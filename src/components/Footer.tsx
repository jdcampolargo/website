import Link from "next/link"


const Footer: React.FC = () => {
  return (
    <footer>
      <div>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about/">
          <a>About</a>
        </Link>
        <Link href="/essays/">
          <a>Essays</a>
        </Link>
        <Link href="mailto:jdcampolargo@hotmail.com">
          <a>Contact</a>
        </Link>
      </div>
    </footer>
  )
}
export default Footer
