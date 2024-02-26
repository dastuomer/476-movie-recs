import Logo from './Components/logo.js';

export default function Home() {
  return (
    <main>
      <div>
        <Logo/>
        <p className="text-success">This website is working!</p>
      </div>
    </main>
  );
}
