import Card from '../ui/Card';
import Image from 'next/image';
import Title from '../ui/Title';
import Badge from '../ui/Badge';
import Divider from '../ui/Divider';

interface HostProfileProps {
  name: string;
  avatarUrl?: string;
  yearsHosting: number;
  isSuperhost?: boolean;
}

const HostProfile = ({
  name,
  avatarUrl,
  yearsHosting,
  isSuperhost = false,
}: HostProfileProps) => {
  return (
    <Card variant="default" padding="md">
      <div className="flex items-start gap-4 mb-4">
        <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center flex-shrink-0 overflow-hidden">
          {avatarUrl ? (
            <Image src={avatarUrl} alt={name} fill sizes="56px" className="object-cover" />
          ) : (
            <svg className="w-8 h-8 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          )}
        </div>
        <div className="flex-1">
          <Title level={3} size="base" className="mb-2">
            {name}
          </Title>
          <div className="flex flex-col gap-2">
            <p className="text-sm text-gray-600">
              Anfitrión hace {yearsHosting} año{yearsHosting > 1 ? 's' : ''}
            </p>
            {isSuperhost && (
              <Badge variant="primary" size="sm">
                Superanfitrión
              </Badge>
            )}
          </div>
        </div>
      </div>
      <Divider className="my-4" />
      <button className="text-rose-500 font-semibold text-sm hover:text-rose-600 transition-colors">
        Contactar anfitrión
      </button>
    </Card>
  );
};

export default HostProfile;
