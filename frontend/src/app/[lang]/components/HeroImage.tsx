import Image from "next/image"
import Mask from 'public/curve.png'
import { getStrapiMedia } from "../utils/api-helpers";

interface Picture {
  data: {
    id: string;
    attributes: {
      url: string;
      name: string;
      alternativeText: string;
      width: number,
      height: number
    };
  };
}

interface HeroImageProps {
  data: {
    heroHomeImage: {
      image: Picture,
      isHomePage: boolean,
      alt: string
    }
  }
}

const HeroImage = ({ data }: HeroImageProps ) => {
  const imgUrl = getStrapiMedia(data.heroHomeImage.image.data.attributes.url);
  return (
    <div style={{
      WebkitMaskImage: `url('${Mask.src}')`,
      WebkitMaskRepeat: 'no-repeat',
      WebkitMaskPosition: "center top",
      WebkitMaskSize: "100%"
    }}>
      <div className="absolute w-full h-full bg-gradient-to-b from-[rgba(45,45,45,.99)] to-[rgba(0,0,0,0)] z-50" />
      <Image 
        src={imgUrl || ""} 
        alt={data.heroHomeImage.alt} 
        width={data.heroHomeImage.image.data.attributes.width} 
        height={data.heroHomeImage.image.data.attributes.height}
        className="z-10"
      />
    </div>
  )
}

export default HeroImage