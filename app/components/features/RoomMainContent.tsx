import Container from '../ui/Container';
import Title from '../ui/Title';
import Divider from '../ui/Divider';
import AmenitiesList from './AmenitiesList';
import BookingWidget from './BookingWidget';
import HostProfile from './HostProfile';
import ListingHeader from './ListingHeader';
import type { Room } from '../../types/room';

const RoomMainContent = ({ room }: { room: Room }) => (
  <Container className="py-8">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
      <div className="space-y-8 lg:col-span-2">
        <ListingHeader
          title={room.title}
          location={room.location}
          rating={room.rating}
          reviewCount={room.reviewCount}
        />
        <section>
          <Title level={2} size="lg" className="mb-4">Acerca de este alojamiento</Title>
          <p className="leading-relaxed text-gray-600">{room.description}</p>
        </section>
        <Divider />
        <HostProfile
          name={room.host.name}
          avatarUrl={room.host.avatarUrl}
          yearsHosting={room.host.yearsHosting}
          isSuperhost={room.host.isSuperhost}
        />
        <Divider />
        <AmenitiesList amenities={room.amenities.map((name, index) => ({ id: `${room.id}-${index}`, name, icon: null }))} />
      </div>
      <aside>
        <BookingWidget
          pricePerNight={room.price}
          minGuests={1}
          maxGuests={room.maxGuests}
          onBook={(guests, nights) => {
            alert(`Reserva para ${guests} huésped${guests > 1 ? 'es' : ''} durante ${nights} noche${nights > 1 ? 's' : ''} - Próximamente disponible`);
          }}
        />
      </aside>
    </div>
  </Container>
);

export default RoomMainContent;