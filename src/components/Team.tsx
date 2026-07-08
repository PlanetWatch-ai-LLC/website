import { useState } from 'react';

const TEAM_MEMBERS = [
  {
    name: 'Iulian Naidin',
    role: 'CEO',
    bio: "Founder of AViA SYSTEM and its FAUNiA biodiversity platform, and 20-year President of OS System, an IT infrastructure and security firm. 17+ years building software and security products before founding PlanetWatch's biodiversity-tech vision.",
    photo: 'team-iulian-naidin.jpg',
  },
  {
    name: 'Claude-Jacques Tronquet',
    role: 'CTO',
    bio: "20+ years scaling technology from European deep-tech to US enterprise — built StickyAdsTV's infrastructure to 10B+ daily requests across 12 data centers before its FreeWheel acquisition. Now architects BirdDetect, PlanetWatch's patent-pending, multisensor AI detection system running on NVIDIA Jetson edge hardware.",
    photo: 'team-claude-jacques-tronquet.jpg',
  },
  {
    name: 'Jill Abelson',
    role: 'CMO',
    bio: "25+ years in strategic communications across the U.S. and France — recent work for NextEra Energy, the Environmental Defense Fund, and Nestlé, with roots at the U.S. EPA's Energy Star program and Greenpeace's early Arctic climate expeditions.",
    photo: 'team-jill-abelson.jpg',
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
      <div className="w-28 h-28 rounded-full bg-[#03A9F4]/10 text-[#03A9F4] flex items-center justify-center text-2xl font-bold mx-auto mb-5">
        {initials}
      </div>
    );
  }

  return (
    <img
      src={photo}
      alt={name}
      onError={() => setImgOk(false)}
      className="w-28 h-28 rounded-full object-cover mx-auto mb-5"
    />
  );
}

export default function Team() {
  return (
    <section id="team" className="py-24 lg:py-32 bg-[#F7F7F7]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <p className="text-[#03A9F4] font-semibold text-sm uppercase tracking-widest mb-3">
            Our Team
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1F2937] leading-tight mb-5">
            The people behind PlanetWatch
          </h2>
          <p className="text-lg text-[#6B7280] leading-relaxed">
            A founding team combining deep AI expertise, field experience with
            renewable energy operators, and a shared commitment to biodiversity.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.name}
              className="group bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center"
            >
              <TeamPhoto name={member.name} photo={member.photo} />
              <h3 className="text-xl font-bold text-[#1F2937] mb-1">
                {member.name}
              </h3>
              <p className="text-[#03A9F4] font-semibold text-sm uppercase tracking-widest mb-4">
                {member.role}
              </p>
              <p className="text-[#6B7280] leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
