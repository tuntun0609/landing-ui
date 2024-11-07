import { HyperText } from '.'

export default function Demo() {
  return (
    <>
      <HyperText className="text-4xl font-bold text-black dark:text-white" text="Hello World" />
      <HyperText
        className="text-4xl font-bold text-black dark:text-white"
        text="No Animation On Hover"
        animateOnHover={false}
      />
    </>
  )
}
