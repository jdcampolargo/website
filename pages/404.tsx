import Link from "next/link";

const NotFound = () => {
  return (
    <div>
      <h2>Wow that was interesting!</h2>
      <p>Not really. I'm rebuilding this website and you know links...</p>
      <p>If you're looking for my essays, <a href="https://juandavidcampolargo.substack.com/" target="_blank" rel="noreferrer">here</a>. </p>
      <p>If you want to get in touch, <a href="https://twitter.com/jdcampolargo" target="_blank" rel="noreferrer">Twitter</a> or <a href="mailto:jdcampolargo@hotmail.com" target="_blank" rel="noreferrer">email.</a> </p>
      {/* <Link href="/">
        <a >Visit our home page</a>
      </Link> */}
    </div>
  );
};

export default NotFound;
