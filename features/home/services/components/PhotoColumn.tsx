import Image from "next/image";

export default function PhotoColumn() {
  return (
    <div className="flex w-[158.22px] flex-col gap-8">
      <div className="relative h-[200.27px] w-[158.22px] overflow-hidden">
        <Image
          src="/images/services/04-dancing.png"
          alt=""
          fill
          className="object-cover"
          sizes="158.22px"
        />
      </div>

      <div className="relative h-[294.06px] w-[158.22px] overflow-hidden">
        <Image
          src="/images/services/01-building.png"
          alt=""
          fill
          className="object-cover"
          sizes="158.22px"
        />
      </div>

      <div className="relative h-[200.27px] w-[158.22px] overflow-hidden">
        <Image
          src="/images/services/04-dancing.png"
          alt=""
          fill
          className="object-cover"
          sizes="158.22px"
        />
      </div>
    </div>
  );
}