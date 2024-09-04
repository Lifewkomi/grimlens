import React from "react";
import LayoutGrid from "../LayoutGrid/LayoutGrid";
import LayoutGrid2 from "./LayoutGrid2";


import Image1 from "../../Assets/24.jpg";
import Image2 from "../../Assets/32.jpg";
import Image3 from "../../Assets/12.png";
import Image4 from "../../Assets/19.jpg";
import Image5 from "../../Assets/28.jpg";
import Image6 from "../../Assets/28.png";
import Image7 from "../../Assets/37.jpg";
import Image8 from "../../Assets/18.jpg";
import Image9 from "../../Assets/27.jpg";
import Image10 from "../../Assets/32.jpg";
import Image11 from "../../Assets/29.jpg";
import Image12 from "../../Assets/34.jpg";
import Image13 from "../../Assets/40.jpg";
import Image14 from "../../Assets/30.jpg";

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        House in the woods
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A serene and tranquil retreat, this house in the woods offers a peaceful
        escape from the hustle and bustle of city life.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        House above the clouds
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Perched high above the world, this house offers breathtaking views and a
        unique living experience. It&apos;s a place where the sky meets home,
        and tranquility is a way of life.
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Greens all over
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house surrounded by greenery and nature&apos;s beauty. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Rivers are serene
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house by the river is a place of peace and tranquility. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};
const SkeletonFive = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Rivers are serene
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house by the river is a place of peace and tranquility. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};
const SkeletonSix = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Rivers are serene
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house by the river is a place of peace and tranquility. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};
const SkeletonSeven = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Rivers are serene
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house by the river is a place of peace and tranquility. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail: Image1,
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-0",
    thumbnail: Image2,
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-2 md:col-span-1",
    thumbnail: Image3,
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "col-span-2",
    thumbnail: Image4,
  },
  {
    id: 5,
    content: <SkeletonFive />,
    className: "col-span-2",
    thumbnail: Image5,
  },
  {
    id: 6,
    content: <SkeletonSix />,
    className: "col-span-2",
    thumbnail: Image13,
  },
  {
    id: 7,
    content: <SkeletonSeven />,
    className: "col-span-2",
    thumbnail: Image12,
  },
];
const cards2 =[
  {
    id: 8,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail: Image6,
  },
  {
    id: 9,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail: Image7,
  },
  {
    id: 10,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail: Image8,
  },
  {
    id: 11,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail: Image10,
  },
  {
    id: 12,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail: Image9,
  },
  {
    id: 13,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail: Image11,
  },
  {
    id: 14,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail: Image14,
  },
]

export default function LayoutGridDemo() {
  return (
    <div className=" w-full bg-black">
      <LayoutGrid cards={cards} />
      {/* <LayoutGrid2 cards={cards2} /> */}
    </div>
  );
}
