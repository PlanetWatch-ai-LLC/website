import { useState } from 'react';
import SectionHeader from './ui/SectionHeader';
import Card from './ui/Card';

const TEAM_MEMBERS = [
  {
    name: 'Iulian Naidin',
    role: 'CEO',
    bio: "Founder of AViA SYSTEM and its FAUNiA biodiversity platform, and 20-year President of OS System, an IT infrastructure and security firm. 17+ years building software and security products before founding PlanetWatch's biodiversity-tech vision.",
    photo: 'team-iulian-naidin.webp',
  },
  {
    name: 'Claude-Jacques Tronquet',
    role: 'CTO',
    bio: "20+ years scaling technology from European deep-tech to US enterprise — built StickyAdsTV's infrastructure to 10B+ daily requests across 12 data centers before its FreeWheel acquisition. Now architects BirdDetect, PlanetWatch's patent-pending, multisensor AI detection system running on NVIDIA Jetson edge hardware.",
    photo: 'team-claude-jacques-tronquet.webp',
  },
  {
    name: 'Jill Abelson',
    role: 'CMO',
    bio: "25+ years in strategic communications across the U.S. and France — recent work for NextEra Energy, the Environmental Defense Fund, and Nestlé, with roots at the U.S. EPA's Energy Star program and Greenpeace's early Arctic climate expeditions.",
    photo: 'team-jill-abelson.webp',
  },
];

function TeamPhoto({ name, photo }: { name: string; photo: string }) {
  const [imgOk, setImgOk] = useState(true);

  if (!imgOk) {
    const initials = name
      .split(' ')
      .map((n) => n[0])
      .join('');
    return (
      <div className="w-28 h-28 rounded-full bg-primary/10 text-primary flex items-center justify-center text-2xl font-bold mx-auto mb-5">
        {initials}
      </div>
    );
  }

  return (
    <img
      src={photo}
      alt={name}
      onError={() => setImgOk(false)}
      loading="lazy"
      decoding="async"
      className="w-28 h-28 rounded-full object-cover mx-auto mb-5"
    />
  );
}

export default function Team() {
  return (
    <section id="team" className="py-24 lg:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="Our Team"
          heading="The people behind PlanetWatch"
          description="A founding team combining deep AI expertise, field experience with renewable energy operators, and a shared commitment to biodiversity."
        />

        <div className="grid md:grid-cols-3 gap-8">
          {TEAM_MEMBERS.map((member) => (
            <Card key={member.name} className="text-center">
              <TeamPhoto name={member.name} photo={member.photo} />
              <h3 className="text-xl font-bold text-ink mb-1">
                {member.name}
              </h3>
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-4">
                {member.role}
              </p>
              <p className="text-muted leading-relaxed">{member.bio}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
