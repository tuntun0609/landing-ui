import Image from 'next/image'

import ThreeDCard from '.'

const ThreeDCardDemo = () => (
  <ThreeDCard className="h-auto w-[300px]" rotateSize="large">
    <div className="flex flex-col items-center justify-center p-4">
      <Image
        className="w-full rounded-xl"
        src="/image/background-case.jpg"
        alt="3d-card-image-case"
        width={300}
        height={200}
      />
      <div className="mt-5 w-full text-start text-2xl font-bold">Whispers of Eternal</div>
      <div className="mt-2 w-full text-start">
        In the depths of silence, beauty speaks its most profound truths, echoing through the
        chambers of our hearts like whispers of eternity.
      </div>
    </div>
  </ThreeDCard>
)

export default ThreeDCardDemo
