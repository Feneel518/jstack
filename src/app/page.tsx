import Image from "next/image"
import { FC } from "react"
import ShineBorder from "./components/ui/shine-border"

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  // const theme = useTheme();
  return (
    <div className="h-screen w-screen px-40 text-center  overflow-y-hidden text-white p-8 text-9xl font-heading font-[400]">
      <blockquote>"Revolutionizing Interaction Through Voice."</blockquote>
    </div>
  )
}

export default page
