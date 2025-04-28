import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { getPayload } from 'payload';
import configPromise from '@payload-config';

export default async function Home() {
  const payload = await getPayload({
    config: configPromise,
  });

  const data = await payload.find({
    collection: "categories",
    depth: 1,
    where: {
      parent: {
        exists: false
      }
    }
  })

  console.log(data)

  return (
    <div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
      <Button variant={'elevated'}>Hello World</Button>
      <Input />
    </div>
  );
}
