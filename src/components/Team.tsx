import { useState } from 'react';

const TEAM_MEMBERS = [
  {
    name: 'Iulian Naidin',
    role: 'CEO',
    bio: "Leads PlanetWatch's strategy and growth, bridging renewable energy operators with the technology that protects the ecosystems around their sites.",
    photo: 'team-iulian-naidin.jpg',
  },
  {
    name: 'Claude-Jacques Tronquet',
    role: 'CTO',
    bio: "Architects PlanetWatch's computer vision and edge-computing platform, turning real-time detection into actionable, field-ready systems.",
    photo: 'team-claude-jacques-tronquet.jpg',
  },
  {
    name: 'Jill Abelson',
    role: 'CMO',
    bio: 'Shapes how PlanetWatch tells its story to operators, regulators, and partners — translating deep tech into a clear market message.',
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
