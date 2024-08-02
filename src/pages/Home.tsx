import { ConnectButton } from 'componentLibrary/ConnectButton';
import { Link as RACLink } from 'react-aria-components';
import { Link } from 'react-router-dom';
import paths from 'routes/paths';

function Component() {
  return (
    <>
      <p>
        <RACLink href={paths.contacts}>Fetch  Data</RACLink>
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
        <RACLink href={paths.fetchData}>Fetch  Data</RACLink>
        <ConnectButton
          variant='destructive'
          className='m-3 w-2/6'
        >
          Fetch Data Demo
        </ConnectButton>
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

export default Component;
