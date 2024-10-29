import { FadeText } from '.'

export default function FadeTextDemo() {
  return (
    <div className="flex flex-col gap-8">
      <FadeText
        direction="up"
        framerProps={{
          show: { transition: { delay: 0.2 } },
        }}
      >
        <div className="text-4xl font-bold">Up</div>
      </FadeText>
      <FadeText
        direction="down"
        framerProps={{
          show: { transition: { delay: 0.4 } },
        }}
      >
        <div className="text-4xl font-bold">Down</div>
      </FadeText>
      <FadeText
        direction="left"
        framerProps={{
          show: { transition: { delay: 0.6 } },
        }}
      >
        <div className="text-4xl font-bold">Left</div>
      </FadeText>
      <FadeText
        direction="right"
        framerProps={{
          show: { transition: { delay: 0.8 } },
        }}
      >
        <div className="text-4xl font-bold">Right</div>
      </FadeText>
    </div>
  )
}
