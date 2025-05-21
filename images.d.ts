declare module '*.jpg' {
    const value: import('next/image-types/global').StaticImageData;
    export default value;
  }
  
  declare module '*.png' {
    const value: import('next/image-types/global').StaticImageData;
    export default value;
  }
  