import SlowComponent from './SlowComponent';

export default async function Home() {
  return (
    <div>
      <h1>Main Contetn(すぐ)</h1>

      <SlowComponent />
    </div>
  );
}
