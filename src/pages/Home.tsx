import { ConnectButton } from 'componentLibrary/ConnectButton';
import { Link } from 'react-router-dom';
import paths from 'routes/paths.ts';

function Home() {
  return (
    <>
      <p>
        <Link to={paths.contacts}>
          <ConnectButton
            variant='primary'
            className='m-3 w-2/6'
          >
            Contacts Map Demo
          </ConnectButton>
        </Link>
      </p>
      <p>
        <Link to={paths.fetchData}>
          <ConnectButton
            variant='destructive'
            className='m-3 w-2/6'
          >
            Fetch Data Demo
          </ConnectButton>
        </Link>
      </p>
      <p>
        <Link to={paths.email}>
          <ConnectButton
            variant='primary'
            className='m-3 w-3/6'
          >
            Email Display Demo
          </ConnectButton>
        </Link>
      </p>
    </>
  );
}

export default Home;
