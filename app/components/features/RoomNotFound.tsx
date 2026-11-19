import Link from 'next/link';
import Container from '../ui/Container';
import Title from '../ui/Title';

const RoomNotFound = () => (
  <Container className="py-16 text-center">
    <Title level={1} className="mb-4">No encontramos este alojamiento</Title>
    <Link href="/catalog" className="font-semibold text-rose-500 hover:text-rose-600">
      Volver al catálogo
    </Link>
  </Container>
);

export default RoomNotFound;