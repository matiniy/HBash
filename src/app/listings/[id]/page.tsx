import React, { use } from 'react';
import ListingDetailsClient from './ListingDetailsClient';

type ListingDetailsPageProps = {
  params: Promise<{ id: string }>;
};

const ListingDetailsPage = ({ params }: ListingDetailsPageProps) => {
  const { id } = use(params);

  return <ListingDetailsClient id={id ?? ''} />;
};

export default ListingDetailsPage;
