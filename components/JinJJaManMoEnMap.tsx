"use client";
import React, { useEffect, useRef, useState } from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";

const LoadComp = () => {
  return <div>로드 중</div>;
};

export default function JinJJaManMoEnMap() {
  const ref = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map>();

  useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, {}));
    }
  }, [ref, map]);

  return <Wrapper apiKey="" render={LoadComp}></Wrapper>;
}
