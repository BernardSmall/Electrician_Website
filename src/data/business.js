export const business = {
  name: "Sha'an Electrical",
  shortName: "Sha'an",
  phoneDisplay: "Add phone number",
  phoneHref: "",
  whatsappNumber: "",
  email: "Add email address",
  hours: "Add operating hours",
  primaryArea: "Add primary service area",
  locations: [
    "Stellenbosch",
    "Somerset West",
    "Paarl",
    "Surrounding areas",
  ],
  whatsappMessage: "Hi Sha'an Electrical, I'd like to get a quote for some electrical work.",
  serviceGroups: {
    residential: [
      'Lighting',
      'Switches and plugs',
      'Installations',
      'DB board work',
    ],
    repairs: [
      'Fault finding',
      'Electrical repairs',
      'Maintenance',
    ],
    commercial: [
      'Small commercial work',
      'Maintenance',
      'Installations',
    ],
  },
  services: [
    { title: 'Electrical installations', description: 'Practical installation work for homes, renovations and small commercial spaces.' },
    { title: 'Fault finding & repairs', description: 'Tracing electrical faults and repairing everyday electrical problems.' },
    { title: 'Lighting installation', description: 'New lights, replacements and upgrades for indoor and outdoor spaces.' },
    { title: 'Plugs & switches', description: 'Installation and replacement of plugs, switches and related fittings.' },
    { title: 'DB board work', description: 'DB board changes, additions and electrical distribution work.' },
    { title: 'Electrical maintenance', description: 'General maintenance to keep electrical systems working as they should.' },
    { title: 'Residential work', description: 'Straightforward electrical work for homeowners and rental properties.' },
    { title: 'Commercial work', description: 'Electrical support for shops, offices and small business premises.' },
  ],
  reviews: [],
  images: {
    hero: 'https://images.pexels.com/photos/27928762/pexels-photo-27928762.jpeg?auto=compress&cs=tinysrgb&w=1600',
    about: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=1400',
    local: 'https://images.pexels.com/photos/13785838/pexels-photo-13785838.jpeg?auto=compress&cs=tinysrgb&w=1400',
  },
}

export function whatsappUrl() {
  if (!business.whatsappNumber) return '#contact'
  return `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(business.whatsappMessage)}`
}
