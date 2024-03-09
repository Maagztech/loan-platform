import Image from "next/image";
import StateManagementandLogic from './onboarding/StateManagementandLogic';
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className='max-w-md w-full h-[100vh] mintDetailsContainer md:p-[2rem]'>
        <StateManagementandLogic />
      </div>
    </main>
  );
}
