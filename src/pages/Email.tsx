/**
 *
 *  An example component that displays an email
 *
 */

function Email() {
  return (
    <section className='mx-auto max-w-2xl bg-white px-6 py-8 dark:bg-gray-900'>
      <header>
        <a href='#'>
          <img
            className='h-7 w-auto sm:h-8'
            src='https://TEST.com/images/full-logo.svg'
            alt=''
          ></img>
        </a>
      </header>

      <div className='mt-8'>
        <h2 className='text-gray-700 dark:text-gray-200'>Hi Olivia,</h2>

        <p className='mt-2 leading-loose text-gray-600 dark:text-gray-300'>
          NWS Pocatello has invited you to join the team on <span className='font-semibold'>NWS Connect</span>.
        </p>

        <button className='mt-4 transform rounded-lg bg-blue-600 px-6 py-2 text-sm font-medium capitalize tracking-wider text-white transition-colors duration-300 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80'>
          Accept the invite
        </button>

        <p className='mt-8 text-gray-600 dark:text-gray-300'>
          Thanks, <br />
          NWS Pocatello team
        </p>
      </div>

      <div className='mt-8'>
        <p className='text-gray-500 dark:text-gray-400'>
          This email was sent to{' '}
          <a
            href='#'
            className='text-blue-600 hover:underline dark:text-blue-400'
            target='_blank'
          >
            contact@TEST.com
          </a>
          . If you'd rather not receive this kind of email, you can{' '}
          <a
            href='#'
            className='text-blue-600 hover:underline dark:text-blue-400'
          >
            unsubscribe
          </a>{' '}
          or{' '}
          <a
            href='#'
            className='text-blue-600 hover:underline dark:text-blue-400'
          >
            manage your email preferences
          </a>
          .
        </p>
      </div>
    </section>
  );
}

export default Email;
