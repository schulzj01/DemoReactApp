import { ConnectButton } from 'componentLibrary/ConnectButton';
import { Link as RACLink } from 'react-aria-components';

function Home() {
  return (
    <>
      <p>
        <RACLink href='/Contacts'>Fetch Data</RACLink>
        <ConnectButton
          as='link'
          href='/Contacts'
          variant='primary'
          className='m-3 w-2/6'
        >
          Contacts Map Demo
        </ConnectButton>
      </p>
      <p>
        <ConnectButton
          variant='destructive'
          as='link'
          href='/FetchData'
          className='m-3 w-2/6'
        >
          Fetch Data Demo
        </ConnectButton>
      </p>
      <p>
        <RACLink href='/Email'>
          <ConnectButton
            variant='primary'
            as='link'
            href='/Email'
            className='m-3 w-3/6'
          >
            Email Display Demo
          </ConnectButton>
        </RACLink>
      </p>
    </>
  );
}

export default Home;
