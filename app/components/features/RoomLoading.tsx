import Container from '../ui/Container';

const RoomLoading = () => (
  <Container className="space-y-6 py-12">
    <div className="h-96 animate-pulse rounded-lg bg-gray-200" />
    <div className="h-8 w-1/2 animate-pulse rounded bg-gray-200" />
    <div className="h-6 w-1/3 animate-pulse rounded bg-gray-200" />
  </Container>
);

export default RoomLoading;