'use client';

import { useState, useEffect, Suspense } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Container from '../../components/ui/Container';
import ImageGallery from '../../components/features/ImageGallery';
import RoomBenefits from '../../components/features/RoomBenefits';
import RoomLoading from '../../components/features/RoomLoading';
import RoomMainContent from '../../components/features/RoomMainContent';
import RoomNotFound from '../../components/features/RoomNotFound';
import { mockProperties } from '../../data/properties';
import type { Room } from '../../types/room';

const RoomDetailContent = () => {
  const { id } = useParams<{ id: string }>();
  const [loadedRoom, setLoadedRoom] = useState<{ id: string; room: Room | null } | null>(null);
  const isLoading = loadedRoom?.id !== id;

  useEffect(() => {
    const timer = setTimeout(() => {
      const room = mockProperties.find((property) => property.id === id) ?? null;
      setLoadedRoom({ id, room });
    }, 800);

    return () => clearTimeout(timer);
  }, [id]);

  if (isLoading || !loadedRoom) return <RoomLoading />;
  if (!loadedRoom.room) return <RoomNotFound />;

  const room = loadedRoom.room;

  return (
    <div className="bg-white">
      <Container className="py-4">
        <Link href="/catalog" className="text-rose-500 hover:text-rose-600 font-medium text-sm">
          Volver al catálogo
        </Link>
      </Container>
      <ImageGallery images={room.images} title={room.title} />
      <RoomMainContent room={room} />
      <RoomBenefits />
    </div>
  );
};

const RoomDetail = () => (
  <Suspense fallback={<RoomLoading />}>
    <RoomDetailContent />
  </Suspense>
);

export default RoomDetail;
