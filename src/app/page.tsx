import Header from '@/components/Header';
import MainForm from '@/components/MainForm/MainForm';

export default function HomePage() {
  return (
    <>
      <Header>Get list of models</Header>
      <main className='min-h-full bg-gray-100 p-5 sm:p-8'>
        <section className='rounded-lg bg-white p-5'>
          <MainForm />
        </section>
      </main>
    </>
  );
}
