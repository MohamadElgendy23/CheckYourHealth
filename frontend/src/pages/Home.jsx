import NavBar from "../components/NavBar";
import healthLogo from "../assets/health.webp";

function Home() {
  return (
    <div className="bg-yellow-300 min-h-screen w-full p-10">
      <NavBar />
      <div className="flex justify-center items-center flex-col gap-3">
        <h1 className="text-6xl font-bold font-sans">CheckYourHealth</h1>
        <h3 className="text-3xl">
          This app allows you to check your health on the go quickly without the
          extra hassle!
        </h3>
      </div>
      <div className="mt-20 flex flex-col justify-center items-center">
        <img src={healthLogo} alt="Health Image" className="h-200 w-300" />
      </div>
    </div>
  );
}

export default Home;
