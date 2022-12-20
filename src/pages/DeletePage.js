import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const DeletePage = () => {
  const { slug } = useParams();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const deletePost = async () => {
      await fetch(`https://backend-virid-zeta.vercel.app/api/${slug}`, {
        method: 'DELETE',
      });
      setLoading(false);
    };
    deletePost();
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }

  return <div>Success</div>;
};
