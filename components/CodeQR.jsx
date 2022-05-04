import React from 'react';
import { useQRCode } from 'next-qrcode';
import { useRef, forwardRef } from "react";
import ReactToPrint from "react-to-print";
import { saveAs } from "file-saver";

const front_URL = "http://localhost:3000";

export default function CodeQR({props, ref, artist}) {
  const { Canvas } = useQRCode();
  return (
    <div ref={ref}>
      <Canvas
        text={`${front_URL}/artist/${artist?._id}/next-qrcode`}
        props={props}
        options={{
          type: 'image/jpeg',
          quality: 0.3,
          level: 'M',
          margin: 3,
          scale: 4,
          width: 200,
          color: {
            dark: '#04032E',
            light: '#E7E3E3',
          },
        }}
      />
    </div>
  )
}
