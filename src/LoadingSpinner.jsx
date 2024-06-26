import { useState, useEffect } from 'react';

export default function LoadingSpinner() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      'https://react-getting-started-ccd14-default-rtdb.firebaseio.com/contacts.json'
    ).then((response) => {
      setIsLoading(false);
    });
  }, []);

  let content = <div>Loading . . . </div>;
  if (!isLoading) {
    content = <div>Loaded</div>;
  }

  return (
    <>
      {content}
    </>
  );
}
