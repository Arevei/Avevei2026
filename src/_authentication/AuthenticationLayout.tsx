import { Outlet } from 'react-router-dom'

const AuthenticationLayout = () => {
  return (
    <>
    <img
      src="/assets/images/designer.svg"
      alt="logo"
      className="h-screen hidden xl:block w-[60%] object-cover text-center bg-no-repeat bg-white"
    />
    <section className="flex flex-1 justify-center items-center flex-col py-10">
      <Outlet />
    </section>

  </>
  )
}

export default AuthenticationLayout