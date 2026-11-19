'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Suspense } from 'react';
import Container from '../../components/ui/Container';
import { ListingHeader, HostProfile, AmenitiesList, BookingWidget, ImageGallery } from '../../components/features';
import Title from '../../components/ui/Title';
import Divider from '../../components/ui/Divider';
import { mockProperties, type PropertyListing } from '../../data/properties';

function RoomDetailContent() {
  const params = useParams();
  const id = params.id as string;
  const [roomState, setRoomState] = useState<{ id: string; room: PropertyListing } | null>(null);
  const room = roomState?.id === id ? roomState.room : null;
  const isLoading = room === null;

  useEffect(() => {
    const timer = setTimeout(() => {
      const roomData = mockProperties.find((property) => property.id === id) || mockProperties[0];
      setRoomState({ id, room: roomData });
    }, 800);

    return () => clearTimeout(timer);
  }, [id]);

  if (isLoading) {
    return (
      <Container className="py-12">
        <div className="animate-pulse space-y-6">
          <div className="bg-gray-200 h-96 rounded-lg" />
          <div className="bg-gray-200 h-8 rounded w-1/2" />
          <div className="bg-gray-200 h-6 rounded w-1/3" />
        </div>
      </Container>
    );
  }

  if (!room) return null;

  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      <Container className="py-4">
        <Link href="/catalog" className="text-rose-500 hover:text-rose-600 font-medium text-sm">
          ← Volver al catálogo
        </Link>
      </Container>

      {/* Image Gallery */}
      <ImageGallery images={room.images} title={room.title} />

      {/* Main Content */}
      <Container className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Header */}
            <ListingHeader
              title={room.title}
              location={room.location}
              rating={room.rating}
              reviewCount={room.reviewCount}
            />

            {/* Description */}
            <div>
              <Title level={2} size="lg" className="mb-4">
                Acerca de este alojamiento
              </Title>
              <p className="text-gray-600 leading-relaxed">
                {room.description}
              </p>
            </div>

            <Divider />

            {/* Host Profile */}
            <HostProfile
              name={room.host.name}
              avatarUrl={room.host.avatarUrl}
              yearsHosting={room.host.yearsHosting}
              isSuperhost={room.host.isSuperhost}
            />

            <Divider />

            {/* Amenities */}
            <AmenitiesList amenities={room.amenities.map((name, index) => ({ id: `${room.id}-${index}`, name, icon: null }))} />
          </div>

          {/* Right Column - Booking Widget */}
          <div>
            <BookingWidget
              pricePerNight={room.price}
              minGuests={1}
              maxGuests={room.maxGuests}
              onBook={(guests) => {
                alert(`Reserva para ${guests} huésped${guests > 1 ? 'es' : ''} - Próximamente disponible`);
              }}
            />
          </div>
        </div>
      </Container>

      {/* Additional Info Section */}
      <div className="bg-gray-50 py-12 mt-8">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                title: 'Cancelación flexible',
                description: 'Cancela hasta 7 días antes de la llegada y recibe un reembolso total',
              },
              {
                title: 'Comunicación segura',
                description: 'Comunícate con el anfitrión a través de la plataforma',
              },
              {
                title: 'Alojamiento verificado',
                description: 'Este alojamiento ha sido verificado por nuestro equipo',
              },
            ].map((info, idx) => (
              <div key={idx} className="text-center">
                <Title level={3} size="base" className="mb-2">
                  {info.title}
                </Title>
                <p className="text-gray-600 text-sm">{info.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
}

export default function RoomDetail() {
  return (
    <Suspense
      fallback={
        <Container className="py-12">
          <div className="animate-pulse space-y-6">
            <div className="bg-gray-200 h-96 rounded-lg" />
            <div className="bg-gray-200 h-8 rounded w-1/2" />
            <div className="bg-gray-200 h-6 rounded w-1/3" />
          </div>
        </Container>
      }
    >
      <RoomDetailContent />
    </Suspense>
  );
}
