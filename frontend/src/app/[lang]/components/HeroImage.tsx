import Image from "next/image"

interface HeroImageProps {
  image: string,
  isHomePage: boolean,
  alt: string
}

const HeroImage = ({ data }: { data: HeroImageProps }) => {
  return (
    <div>
      <Image src={data.image} alt={data.alt} fill />
    </div>
  )
}

export default HeroImage