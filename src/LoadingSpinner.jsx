import { useState, useEffect } from 'react';

export default function LoadingSpinner() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
      setTimeout(() => {
        setIsLoading(false);
        setContactList(contacts);
      }, 3000);
  }, []);

  let content = <img
  src="https://miro.medium.com/v2/resize:fit:1400/1*CsJ05WEGfunYMLGfsT2sXA.gif"
  alt="Loading-Spinner"
/>;
  if (!isLoading) {
    content = <h1>Loaded</h1>;
  }

  return (
    <>
      {content}
    </>
  );
}
