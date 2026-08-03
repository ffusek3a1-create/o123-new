import Image from "next/image";

export default function PhotoCollage() {
  return (
    <div className="relative h-[626px] w-[321px]">
      {/* Womens in pub */}
      <div className="absolute left-0 top-[125px] h-[176px] w-[52px] overflow-hidden">
        <Image
          src="/images/services/03-pub.png"
          alt=""
          fill
          className="object-cover"
          sizes="52px"
        />
      </div>

      {/* Building */}
      <div className="absolute left-[50px] top-[26px] h-[274px] w-[174px] overflow-hidden">
        <Image
          src="/images/services/01-building.png"
          alt=""
          fill
          className="object-cover"
          sizes="174px"
        />
      </div>

      {/* Mini boats */}
      <div className="absolute left-[208px] top-[54px] h-[111px] w-[73px] overflow-hidden">
        <Image
          src="/images/services/02-boats.png"
          alt=""
          fill
          className="object-cover"
          sizes="73px"
        />
      </div>

      {/* Dancing woman */}
      <div className="absolute left-[175px] top-[163px] h-[187px] w-[146px] overflow-hidden">
        <Image
          src="/images/services/04-dancing.png"
          alt=""
          fill
          className="object-cover"
          sizes="146px"
        />
      </div>

      {/* Gokart */}
      <div className="absolute left-[50px] top-[298px] h-[146px] w-[258px] overflow-hidden">
        <Image
          src="/images/services/05-gokart.png"
          alt=""
          fill
          className="object-cover"
          sizes="258px"
        />
      </div>

      {/* Drifting car */}
      <div className="absolute left-[96px] top-[434px] h-[116px] w-[204px] overflow-hidden">
        <Image
          src="/images/services/06-drifting.png"
          alt=""
          fill
          className="object-cover"
          sizes="204px"
        />
      </div>

      {/* Restaurant */}
      <div className="absolute left-[136px] top-[549px] h-[77px] w-[153px] overflow-hidden">
        <Image
          src="/images/services/07-restaurant.png"
          alt=""
          fill
          className="object-cover"
          sizes="153px"
        />
      </div>
    </div>
  );
}