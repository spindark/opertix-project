import { TrendingUp, ShieldCheck, Users, Headphones } from 'lucide-react';

const stats = [
  {
    icon: TrendingUp,
    value: '1.200+',
    label: 'Listing Aktif',
    color: 'text-violet-600',
    bg: 'bg-violet-100/60',
  },
  {
    icon: ShieldCheck,
    value: '98%',
    label: 'Transaksi Aman',
    color: 'text-emerald-600',
    bg: 'bg-emerald-100/60',
  },
  {
    icon: Users,
    value: '10.000+',
    label: 'Pengguna Terpercaya',
    color: 'text-blue-600',
    bg: 'bg-blue-100/60',
  },
  {
    icon: Headphones,
    value: '24/7',
    label: 'Support Aktif',
    color: 'text-amber-600',
    bg: 'bg-amber-100/60',
  },
];

export default function StatsBar() {
  return (
    <section className="relative bg-white border-y border-gray-100/50 backdrop-blur-sm">
      <div className="divider-gradient" />
      <div className="container-padded py-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-gray-100/50">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="flex items-center gap-3.5 lg:px-12 first:lg:pl-0 last:lg:pr-0 group cursor-pointer"
              >
                <div className={`w-11 h-11 rounded-2xl ${stat.bg} flex items-center justify-center flex-shrink-0 group-hover:shadow-elevation-2 transition-premium`}>
                  <Icon className={`w-5.5 h-5.5 ${stat.color}`} strokeWidth={1.6} />
                </div>
                <div>
                  <div className="text-lg lg:text-xl font-bold text-gray-900 leading-tight group-hover:text-violet-700 transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-[11px] lg:text-xs text-gray-500 leading-tight font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="divider-gradient" />
    </section>
  );
}
