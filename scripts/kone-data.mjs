// Single source of truth for the horses: profile data (goes to podklady/kone.json on the `main` branch)
// and the look of each avatar (used by kone.mjs to draw podklady/kone/<id>.svg).

export const horses = [
  {
    id: 'bara', name: 'Bára', age: 6, breed: 'Hafling', distanceKm: 3, likesYou: true,
    bio: 'Hledám někoho na dlouhé procházky po louce. Seno platím já.',
    interests: ['louky', 'mrkev', 'západy slunce'],
    look: { coat: '#e0a15c', coatDark: '#c4823f', mane: '#fbecc4', muzzle: '#f3c995', bg: ['#ffe3d3', '#ffc4b0'], marking: 'blaze', accessory: 'flowers', lashes: true },
  },
  {
    id: 'trojan', name: 'Trojan', age: 3200, breed: 'Trojský kůň (dřevěný)', distanceKm: 1840, likesYou: true,
    bio: 'Uvnitř mám velké překvapení. Stačí otevřít bránu 😉',
    interests: ['historie', 'překvapení', 'řecká kuchyně'],
    look: { coat: '#c08a55', coatDark: '#9a6a3c', mane: '#7a5230', muzzle: '#d6a571', bg: ['#e6f0ff', '#bcd3f7'], marking: 'wood', accessory: 'hatch' },
  },
  {
    id: 'pepik', name: 'Pepík', age: 9, breed: 'Shetlandský pony', distanceKm: 1, likesYou: false,
    bio: 'Malý, ale šikovný. Vejdu se do výtahu i do tvého srdce.',
    interests: ['výtahy', 'jablka', 'špatné vtipy'],
    look: { coat: '#6b4a3a', coatDark: '#4f3428', mane: '#f2e6d8', muzzle: '#8c6a58', bg: ['#e7f8e9', '#bfe8c6'], marking: 'star', accessory: 'bow' },
  },
  {
    id: 'hvezda', name: 'Hvězda', age: 5, breed: 'Arabský plnokrevník', distanceKm: 12, likesYou: true,
    bio: 'Ráno běhám 40 km, odpoledne protahování. Hledám parťačku na cardio.',
    interests: ['běh', 'protein', 'chytré hodinky'],
    look: { coat: '#f4f1ee', coatDark: '#d9d2cc', mane: '#c9c2bd', muzzle: '#e9dcd6', bg: ['#fff4cc', '#ffd98a'], marking: 'none', accessory: 'headband', lashes: true },
  },
  {
    id: 'unicornelius', name: 'Unicornelius', age: 2, breed: 'Jednorožec (startup)', distanceKm: 7, likesYou: false,
    bio: 'Technicky jsem taky kůň. Valuace miliarda, zisk zatím nula.',
    interests: ['investoři', 'pitch decky', 'duhy'],
    look: { coat: '#ffffff', coatDark: '#e8e2f4', mane: '#ff8fc8', mane2: '#8fd3ff', muzzle: '#fbe6f0', bg: ['#f3e8ff', '#d9c2ff'], marking: 'none', accessory: 'horn', lashes: true },
  },
  {
    id: 'doubek', name: 'Doubek', age: 14, breed: 'Starokladrubský kůň', distanceKm: 64, likesYou: true,
    bio: 'Senior developer. Kóduju od dob jQuery. Mezery, ne taby. O tom se nediskutuje.',
    interests: ['refaktoring', 'Vim', 'ovesná kaše'],
    look: { coat: '#3a3438', coatDark: '#262225', mane: '#191618', muzzle: '#5a5056', bg: ['#e5f4f7', '#b7e0e8'], marking: 'snip', accessory: 'glasses' },
  },
  {
    id: 'lucka', name: 'Lucka', age: 4, breed: 'Appaloosa', distanceKm: 9, likesYou: true,
    bio: 'Mám puntíky jako tvůj první web z roku 2003. A stejně tak ráda bliká.',
    interests: ['retro', 'GIFy', 'karaoke'],
    look: { coat: '#f6efe6', coatDark: '#ddd0c0', mane: '#6c5a4c', muzzle: '#eadccb', bg: ['#ffe0ec', '#ffb8d2'], marking: 'spots', spotColor: '#7b5f4b', accessory: 'sunglasses' },
  },
  {
    id: 'ferda', name: 'Ferda', age: 7, breed: 'Fríský kůň', distanceKm: 23, likesYou: false,
    bio: 'Kudrnatá hříva, žádné drama. Fotky z gotického focení na požádání.',
    interests: ['focení', 'poezie', 'kondicionér'],
    look: { coat: '#2a2630', coatDark: '#1b181f', mane: '#0f0d12', muzzle: '#403a46', bg: ['#e9e6ff', '#c7c0ff'], marking: 'none', accessory: 'headphones' },
  },
  {
    id: 'daisy', name: 'Daisy', age: 8, breed: 'Mustang', distanceKm: 31, likesYou: true,
    bio: 'Divoká duše. Ohrady nesnáším. Ty ji klidně otevři, já budu za horizontem.',
    interests: ['volnost', 'kempování', 'country'],
    look: { coat: '#a8643c', coatDark: '#864c2b', mane: '#3d2418', muzzle: '#c08260', bg: ['#fff0d9', '#ffcf99'], marking: 'blaze', accessory: 'hat' },
  },
  {
    id: 'zofka', name: 'Žofka', age: 11, breed: 'Huculský kůň', distanceKm: 140, likesYou: false,
    bio: 'Hory, turistika a tatranky. Ty poneseš batoh, já ponesu tebe.',
    interests: ['hory', 'tatranky', 'mapy.cz'],
    look: { coat: '#9c8a6b', coatDark: '#7c6b50', mane: '#3c342a', muzzle: '#b6a487', bg: ['#e4f6ef', '#b4e3cf'], marking: 'none', accessory: 'bandana', lashes: true },
  },
  {
    id: 'max', name: 'Max', age: 6, breed: 'Lipicán', distanceKm: 210, likesYou: true,
    bio: 'Tančím ve Vídni, ale srdce mám v Brně. Umím valčík i kroket.',
    interests: ['balet', 'Vídeň', 'kroket'],
    look: { coat: '#eceef2', coatDark: '#cfd3db', mane: '#d8dce4', muzzle: '#dcdfe6', bg: ['#fdf1d6', '#f5d48f'], marking: 'none', accessory: 'crown' },
  },
  {
    id: 'hopik', name: 'Hopík', age: 1, breed: 'Houpací kůň', distanceKm: 0.2, likesYou: false,
    bio: 'Nejsem moc upovídaný, ale houpu skvěle. Najdeš mě v dětském pokoji.',
    interests: ['houpání', 'Vánoce', 'dětský pokoj'],
    look: { coat: '#ffffff', coatDark: '#eae6e0', mane: '#e2463e', muzzle: '#f4efe8', bg: ['#e3f3ff', '#b5dcff'], marking: 'dapples', spotColor: '#3a7bd5', accessory: 'handle' },
  },
]
