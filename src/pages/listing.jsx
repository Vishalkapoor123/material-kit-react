import { Helmet } from 'react-helmet-async';

import { ListingView } from '../sections/listing/view';

// ----------------------------------------------------------------------

export default function ListingPage() {
  return (
    <>
      <Helmet>
        <title> I can bring it </title>
      </Helmet>

      <ListingView />
    </>
  );
}
