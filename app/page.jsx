import PopularBikes from '@/app/components/PopularBikes';
import HerosPresentation from '@/app/components/Heros';

export default function Home() {
  return (
    <main>
      <HerosPresentation />
      <PopularBikes />
      {/* <div className='h-[2000px]'></div> */}
    </main>
  );
}
