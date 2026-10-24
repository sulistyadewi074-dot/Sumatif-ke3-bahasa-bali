import { Question } from '../types';

export const INITIAL_QUESTIONS: Question[] = [
  // =========================================================================
  // BAGIAN I: PILIHAN GANDA (10 BUTIR SOAL: NO. 1 - 10)
  // Setiap butir bernilai skor 1 (Total skor PG = 10)
  // =========================================================================
  {
    id: 1,
    type: 'pg',
    topic: 'Kruna Wilangan Gebogan 200-1000',
    difficulty: 'Mudah',
    text: 'Ring sajeroning tatabasa Bali, wilangan madue wastan sane matiosan manut gebogan angka. Kruna wilangan gebogan sane nyihnayang akehnyane wilangan 200 ring basa Bali kawastanin...',
    options: [
      { id: 'A', text: 'Satak' },
      { id: 'B', text: 'Samas' },
      { id: 'C', text: 'Domas' },
      { id: 'D', text: 'Satus' },
    ],
    correctAnswer: 'A',
    explanation:
      'Wilangan 200 ring basa Bali kawastanin "satak". Satus = 100, samas = 400, domas = 800.',
  },
  {
    id: 2,
    type: 'pg',
    topic: 'Kruna Wilangan Gebogan 200-1000',
    difficulty: 'Mudah',
    text: 'Uratiang bagan kruna wilangan gebogan ring basa Bali puniki!\n\nManut bagan punika, kruna wilangan gebogan sane nyihnayang wilangan 400 inggih punika...',
    imageSvg: `<svg viewBox="0 0 520 180" class="w-full max-w-lg h-auto mx-auto" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad200" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#0284c7" />
          <stop offset="100%" stop-color="#0369a1" />
        </linearGradient>
        <linearGradient id="grad400" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#059669" />
          <stop offset="100%" stop-color="#047857" />
        </linearGradient>
        <linearGradient id="grad800" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#d97706" />
          <stop offset="100%" stop-color="#b45309" />
        </linearGradient>
        <linearGradient id="grad1000" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#7c3aed" />
          <stop offset="100%" stop-color="#6d28d9" />
        </linearGradient>
      </defs>
      <rect width="520" height="180" fill="#f8fafc" rx="14" stroke="#cbd5e1" stroke-width="1.5"/>
      <text x="260" y="24" font-size="12" font-weight="bold" fill="#334155" text-anchor="middle">BAGAN KRUNA WILANGAN GEBOGAN BASA BALI</text>
      
      <!-- Kartu 1: 200 -->
      <g transform="translate(15, 36)">
        <rect width="115" height="128" rx="8" fill="url(#grad200)" />
        <circle cx="57.5" cy="32" r="16" fill="rgba(255,255,255,0.2)"/>
        <text x="57.5" y="38" font-size="13" font-weight="bold" fill="#ffffff" text-anchor="middle">200</text>
        <text x="57.5" y="64" font-size="13" font-weight="bold" fill="#ffffff" text-anchor="middle">Satak</text>
        <text x="57.5" y="82" font-size="9" fill="#e0f2fe" text-anchor="middle">2 x 100 (satus)</text>
        <rect x="8" y="96" width="99" height="22" rx="4" fill="rgba(0,0,0,0.2)"/>
        <text x="57.5" y="110" font-size="8.5" fill="#ffffff" text-anchor="middle">Conto: Satak keteng</text>
      </g>

      <!-- Kartu 2: 400 -->
      <g transform="translate(140, 36)">
        <rect width="115" height="128" rx="8" fill="url(#grad400)" stroke="#10b981" stroke-width="2"/>
        <circle cx="57.5" cy="32" r="16" fill="rgba(255,255,255,0.25)"/>
        <text x="57.5" y="38" font-size="13" font-weight="bold" fill="#ffffff" text-anchor="middle">400</text>
        <text x="57.5" y="64" font-size="13" font-weight="bold" fill="#ffffff" text-anchor="middle">Samas</text>
        <text x="57.5" y="82" font-size="9" fill="#d1fae5" text-anchor="middle">2 x 200 (satak)</text>
        <rect x="8" y="96" width="99" height="22" rx="4" fill="rgba(0,0,0,0.2)"/>
        <text x="57.5" y="110" font-size="8.5" fill="#ffffff" text-anchor="middle">Conto: Samas rupiah</text>
      </g>

      <!-- Kartu 3: 800 -->
      <g transform="translate(265, 36)">
        <rect width="115" height="128" rx="8" fill="url(#grad800)" />
        <circle cx="57.5" cy="32" r="16" fill="rgba(255,255,255,0.2)"/>
        <text x="57.5" y="38" font-size="13" font-weight="bold" fill="#ffffff" text-anchor="middle">800</text>
        <text x="57.5" y="64" font-size="13" font-weight="bold" fill="#ffffff" text-anchor="middle">Domas</text>
        <text x="57.5" y="82" font-size="9" fill="#fef3c7" text-anchor="middle">2 x 400 (samas)</text>
        <rect x="8" y="96" width="99" height="22" rx="4" fill="rgba(0,0,0,0.2)"/>
        <text x="57.5" y="110" font-size="8.5" fill="#ffffff" text-anchor="middle">Conto: Domas keteng</text>
      </g>

      <!-- Kartu 4: 1000 -->
      <g transform="translate(390, 36)">
        <rect width="115" height="128" rx="8" fill="url(#grad1000)" />
        <circle cx="57.5" cy="32" r="16" fill="rgba(255,255,255,0.2)"/>
        <text x="57.5" y="38" font-size="13" font-weight="bold" fill="#ffffff" text-anchor="middle">1000</text>
        <text x="57.5" y="64" font-size="13" font-weight="bold" fill="#ffffff" text-anchor="middle">Siu</text>
        <text x="57.5" y="82" font-size="9" fill="#ede9fe" text-anchor="middle">10 x 100 (satus)</text>
        <rect x="8" y="96" width="99" height="22" rx="4" fill="rgba(0,0,0,0.2)"/>
        <text x="57.5" y="110" font-size="8.5" fill="#ffffff" text-anchor="middle">Conto: Siu / A Tali</text>
      </g>
    </svg>`,
    options: [
      { id: 'A', text: 'Telungatus' },
      { id: 'B', text: 'Samas' },
      { id: 'C', text: 'Karobelah' },
      { id: 'D', text: 'Nematus' },
    ],
    correctAnswer: 'B',
    explanation:
      'Wilangan 400 ring basa Bali kawastanin "samas". Duaning 400 punika kalih keti satak (2 x 200).',
  },
  {
    id: 3,
    type: 'pg',
    topic: 'Kruna Wilangan Gebogan 200-1000',
    difficulty: 'Mudah',
    text: 'I Kakang madue ubuhan bébék ring carik akehnyane 800 ukud. Wilangan 800 punika yening kasurat antuk kruna wilangan basa Bali kawastanin...',
    options: [
      { id: 'A', text: 'Domas' },
      { id: 'B', text: 'Samas' },
      { id: 'C', text: 'Satak' },
      { id: 'D', text: 'Sepahe' },
    ],
    correctAnswer: 'A',
    explanation:
      'Kruna wilangan gebogan sane nyihnayang angka 800 kawastanin "domas".',
  },
  {
    id: 4,
    type: 'pg',
    topic: 'Kruna Wilangan Gebogan 200-1000',
    difficulty: 'Mudah',
    text: 'Wilangan angka 1.000 (siu) ketah kaanggen ring sajeroning etongan ageng. Kruna wilangan 1.000 ring basa Bali kawastanin...',
    options: [
      { id: 'A', text: 'Satus' },
      { id: 'B', text: 'Domas' },
      { id: 'C', text: 'Siu' },
      { id: 'D', text: 'Laksa' },
    ],
    correctAnswer: 'C',
    explanation:
      'Wilangan 1.000 ring basa Bali kawastanin "siu" utawi "a tali". Satus = 100, laksa = 10.000.',
  },
  {
    id: 5,
    type: 'pg',
    topic: 'Kruna Wilangan Gebogan 200-1000',
    difficulty: 'Sedang',
    text: 'Di tegalan Pekak Made wenten panen woh poh akehnyane 600 bungkul. Kruna wilangan basa Bali sane manut ring wilangan angka 600 punika inggih punika...',
    options: [
      { id: 'A', text: 'Limangatus' },
      { id: 'B', text: 'Nematus' },
      { id: 'C', text: 'Pitungatus' },
      { id: 'D', text: 'Telungatus' },
    ],
    correctAnswer: 'B',
    explanation:
      'Wilangan 600 ring basa Bali kawastanin "nematus" (nem + atus). Limangatus = 500, pitungatus = 700.',
  },
  {
    id: 6,
    type: 'pg',
    topic: 'Nyambatang Adan Pipis',
    difficulty: 'Sedang',
    text: 'Wayan numbas jaja Bali ring warung maaji Rp 400,-. Yening kasambang nganggen basa Bali, aji jinah Rp 400,- punika kawastanin...',
    options: [
      { id: 'A', text: 'Satak rupiah' },
      { id: 'B', text: 'Samas rupiah' },
      { id: 'C', text: 'Domas rupiah' },
      { id: 'D', text: 'Seket rupiah' },
    ],
    correctAnswer: 'B',
    explanation:
      'Duaning 400 ring basa Bali kawastanin samas, punika mawinan jinah Rp 400,- kasambang "samas rupiah".',
  },
  {
    id: 7,
    type: 'pg',
    topic: 'Nyambatang Adan Pipis Tradisional',
    difficulty: 'Mudah',
    text: 'Jinah bolong (pis bolong) tradisional ring Bali sane akehnyane wantah asiki (1 keping) ketah kasambang...',
    imageSvg: `<svg viewBox="0 0 320 160" class="w-full max-w-xs h-auto mx-auto" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="160" fill="#f8fafc" rx="12" stroke="#cbd5e1" stroke-width="1.5"/>
      <circle cx="160" cy="75" r="48" fill="#b45309" stroke="#78350f" stroke-width="4"/>
      <circle cx="160" cy="75" r="42" fill="#d97706" stroke="#92400e" stroke-width="1"/>
      <!-- Bolong Kotak ring tengah pis bolong -->
      <rect x="144" y="59" width="32" height="32" fill="#f8fafc" stroke="#78350f" stroke-width="2.5" rx="3"/>
      <!-- Huruf/Aksara Cina ring Pis Bolong -->
      <text x="160" y="50" font-size="11" font-weight="bold" fill="#78350f" text-anchor="middle">乾隆</text>
      <text x="160" y="112" font-size="11" font-weight="bold" fill="#78350f" text-anchor="middle">通寶</text>
      <text x="160" y="145" font-size="11" font-weight="bold" fill="#334155" text-anchor="middle">1 Keping Pis Bolong = Aketeng</text>
    </svg>`,
    options: [
      { id: 'A', text: 'Aketeng' },
      { id: 'B', text: 'Selae' },
      { id: 'C', text: 'Seket' },
      { id: 'D', text: 'Atali' },
    ],
    correctAnswer: 'A',
    explanation:
      'Asiki jinah bolong (1 kepeng) kawastanin "aketeng" (sa-keteng). Selae = 25 keteng, seket = 50 keteng, atali = 100 keteng.',
  },
  {
    id: 8,
    type: 'pg',
    topic: 'Nyambatang Adan Pipis',
    difficulty: 'Sedang',
    text: 'Putu ngantongin jinah kertas maaji Rp 1.000,- kaanggen bekel masekolah. Panyambatan jinah Rp 1.000,- punika ring basa Bali inggih punika...',
    options: [
      { id: 'A', text: 'Siu rupiah (A tali rupiah)' },
      { id: 'B', text: 'Satus rupiah' },
      { id: 'C', text: 'Satak rupiah' },
      { id: 'D', text: 'Nematus rupiah' },
    ],
    correctAnswer: 'A',
    explanation:
      'Jinah Rp 1.000,- kasambang "siu rupiah" utawi "a tali rupiah".',
  },
  {
    id: 9,
    type: 'pg',
    topic: 'Kruna Wilangan Pepasten',
    difficulty: 'Sedang',
    text: '"I Meme numbas taluh bébék ring peken ... anggen ngae jaja lan banten." Kruna wilangan pepasten sane patut kaanggen nyangkepin lengkara punika inggih punika...',
    options: [
      { id: 'A', text: 'Akatih' },
      { id: 'B', text: 'Abungkul' },
      { id: 'C', text: 'Abidang' },
      { id: 'D', text: 'Apuun' },
    ],
    correctAnswer: 'B',
    explanation:
      'Kruna wilangan pepasten "abungkul" kaanggen nyihnayang barang sane marupa bunter sekadi taluh, nyuh, poh, lan semangka.',
  },
  {
    id: 10,
    type: 'pg',
    topic: 'Kruna Wilangan Pepasten',
    difficulty: 'Sedang',
    text: '"Bapa ngalap tiing petung ... bakal anggen cagak pager ring lebuh." Kruna wilangan pepasten sane patut kaanggen ring sarwa tiing inggih punika...',
    options: [
      { id: 'A', text: 'Akatih' },
      { id: 'B', text: 'Abidang' },
      { id: 'C', text: 'Apasang' },
      { id: 'D', text: 'Apuun' },
    ],
    correctAnswer: 'A',
    explanation:
      'Kruna wilangan pepasten "akatih" kaanggen ring barang sane marupa lantang tur lempeng/lurus sakadi tiing, potlot, tebu, lan carang kayu.',
  },

  // =========================================================================
  // BAGIAN II: PILIHAN GANDA KOMPLEKS (5 BUTIR SOAL: NO. 11 - 15)
  // Memilih lebih dari satu pilihan yang benar (Total skor PGK = 5)
  // =========================================================================
  {
    id: 11,
    type: 'pgk',
    topic: 'Kruna Wilangan Gebogan 200-1000',
    difficulty: 'Sedang',
    text: 'Indayang pilihin makudang-kudang pasangan angka wilangan miwah kruna wilangan basa Bali ring sor puniki sane patut! (Pilihin langkungan ring asiki)',
    options: [
      { id: 'A', text: '200 = Satak' },
      { id: 'B', text: '400 = Samas' },
      { id: 'C', text: '800 = Domas' },
      { id: 'D', text: '600 = Sepahe' },
    ],
    correctAnswer: ['A', 'B', 'C'],
    explanation:
      'Pasangan sane patut: 200 = Satak, 400 = Samas, 800 = Domas. Pilihan D iwang duaning 600 punika nematus, sedengkan sepahe punika 1.600.',
  },
  {
    id: 12,
    type: 'pgk',
    topic: 'Nyambatang Adan Pipis',
    difficulty: 'Sedang',
    text: 'Indayang pilihin makudang-kudang panyambatan adan pipis (jinah rupiah miwah jinah bolong tradisional) sane patut ring sajeroning basa Bali!',
    options: [
      { id: 'A', text: 'Jinah Rp 200,- kasambang satak rupiah' },
      { id: 'B', text: 'Jinah Rp 800,- kasambang domas rupiah' },
      { id: 'C', text: 'Pis bolong asiki (1 keping) kasambang aketeng' },
      { id: 'D', text: 'Jinah Rp 1.000,- kasambang samas rupiah' },
    ],
    correctAnswer: ['A', 'B', 'C'],
    explanation:
      'Panyambatan sane patut: Rp 200 = satak rupiah, Rp 800 = domas rupiah, 1 kepeng jinah bolong = aketeng. Pilihan D iwang duaning Rp 1.000 kasambang siu rupiah.',
  },
  {
    id: 13,
    type: 'pgk',
    topic: 'Kruna Wilangan Pepasten Entik-entikan & Woh',
    difficulty: 'Sedang',
    text: 'Indayang pilihin kruna wilangan pepasten sane patut manut pasangannyane ring sajeroning woh-wohan miwah punyan-punyanan!',
    options: [
      { id: 'A', text: 'Apuun punyan nyuh' },
      { id: 'B', text: 'Abungkul buah semangka' },
      { id: 'C', text: 'Aijeng biu mas (sisir biu)' },
      { id: 'D', text: 'Abidang taluh siap' },
    ],
    correctAnswer: ['A', 'B', 'C'],
    explanation:
      'Pasangan sane patut: Apuun punyan nyuh (punyan taru), abungkul buah semangka (woh bunter), aijeng biu mas (sisir biu). Pilihan D iwang duaning taluh nganggen kruna pepasten abungkul.',
  },
  {
    id: 14,
    type: 'pgk',
    topic: 'Kruna Wilangan Pepasten Pasangan & Lambaran',
    difficulty: 'Sukar',
    text: 'Indayang pilihin makudang-kudang kruna wilangan pepasten ring sor puniki sane kaanggen ring sarwa lembaran, pasangan, utawi beburon matekap sane patut!',
    options: [
      { id: 'A', text: 'Abidang kamben endek' },
      { id: 'B', text: 'Apasang sapatu masekolah' },
      { id: 'C', text: 'Aakit sampi kaanggen matekap di carik' },
      { id: 'D', text: 'Akatih tikeh pandan' },
    ],
    correctAnswer: ['A', 'B', 'C'],
    explanation:
      'Pasangan sane patut: Abidang kamben endek (sarwa lambaran), apasang sapatu (pasangan kalih), aakit sampi (sepasang sapi matekap). Pilihan D iwang duaning tikeh nganggen kruna pepasten abidang.',
  },
  {
    id: 15,
    type: 'pgk',
    topic: 'Kruna Wilangan Pepasten Sarwa Banten & Jaja',
    difficulty: 'Sukar',
    text: 'Ring Bali, sarwa jaja, tipat, miwah ulam banten madue kruna wilangan pepasten. Indayang pilihin makudang-kudang conto sane patut manut tata cara krama Bali!',
    options: [
      { id: 'A', text: 'Akelan tipat (nemungkul tipat)' },
      { id: 'B', text: 'Asumpik jaja cerorot' },
      { id: 'C', text: 'Atebih ulam bawi/sampi' },
      { id: 'D', text: 'Abungkul don biu' },
    ],
    correctAnswer: ['A', 'B', 'C'],
    explanation:
      'Pasangan sane patut: Akelan tipat (nemungkul tipat), asumpik jaja cerorot (bungkus kerucut), atebih ulam (sepotong daging). Pilihan D iwang duaning don biu nganggen aklosod utawi abidang.',
  },

  // =========================================================================
  // BAGIAN III: PGK KATEGORI / BENAR-SALAH (5 BUTIR SOAL: NO. 16 - 20)
  // Masing-masing butir memiliki 4 pernyataan (Benar/Salah) (Total skor = 5)
  // =========================================================================
  {
    id: 16,
    type: 'pgk_kategori',
    categoryType: 'benar_salah',
    topic: 'Kruna Wilangan Gebogan 200-1000',
    difficulty: 'Sedang',
    text: 'Tilikin parikandha indik kruna wilangan gebogan 200 ngantos 1000 ring sor puniki, raris tantang parikandha punika Patut (Benar) utawi Iwang (Salah)!',
    statements: [
      {
        id: 's1',
        text: 'Wilangan 200 ring basa Bali kawastanin satak.',
        correctAnswer: true,
        trueLabel: 'Patut (Benar)',
        falseLabel: 'Iwang (Salah)',
      },
      {
        id: 's2',
        text: 'Wilangan 400 ring basa Bali kawastanin domas.',
        correctAnswer: false,
        trueLabel: 'Patut (Benar)',
        falseLabel: 'Iwang (Salah)',
      },
      {
        id: 's3',
        text: 'Wilangan 800 ring basa Bali kawastanin domas.',
        correctAnswer: true,
        trueLabel: 'Patut (Benar)',
        falseLabel: 'Iwang (Salah)',
      },
      {
        id: 's4',
        text: 'Wilangan 1.000 ring basa Bali kawastanin siu.',
        correctAnswer: true,
        trueLabel: 'Patut (Benar)',
        falseLabel: 'Iwang (Salah)',
      },
    ],
    explanation:
      'Parikandha s2 iwang duaning 400 punika samas, boya ja domas (800). S1, s3, lan s4 sampun patut.',
  },
  {
    id: 17,
    type: 'pgk_kategori',
    categoryType: 'benar_salah',
    topic: 'Nyambatang Adan Pipis',
    difficulty: 'Sedang',
    text: 'Tilikin parikandha ngenenin indik nyambatang adan pipis rupiah miwah jinah bolong tradisional ring Bali puniki!',
    statements: [
      {
        id: 's1',
        text: 'Pipis Rp 500,- ring basa Bali kasambang limangatus rupiah.',
        correctAnswer: true,
        trueLabel: 'Patut (Benar)',
        falseLabel: 'Iwang (Salah)',
      },
      {
        id: 's2',
        text: 'Jinah bolong sane akehnyane 100 keping ketah kabaos atali jinah utawi satus.',
        correctAnswer: true,
        trueLabel: 'Patut (Benar)',
        falseLabel: 'Iwang (Salah)',
      },
      {
        id: 's3',
        text: 'Pipis Rp 200,- ring basa Bali kasambang samas rupiah.',
        correctAnswer: false,
        trueLabel: 'Patut (Benar)',
        falseLabel: 'Iwang (Salah)',
      },
      {
        id: 's4',
        text: 'Jinah bolong tradisional sane akehnyane 25 keping ketah kawastanin selae.',
        correctAnswer: true,
        trueLabel: 'Patut (Benar)',
        falseLabel: 'Iwang (Salah)',
      },
    ],
    explanation:
      'Parikandha s3 iwang duaning Rp 200 kasambang satak rupiah (samas = Rp 400). S1, s2, lan s4 patut.',
  },
  {
    id: 18,
    type: 'pgk_kategori',
    categoryType: 'benar_salah',
    topic: 'Kruna Wilangan Pepasten Entik-entikan',
    difficulty: 'Sedang',
    text: 'Tilikin kruna wilangan pepasten sane kaanggen ring woh-wohan miwah punyan-punyanan puniki!',
    statements: [
      {
        id: 's1',
        text: 'Kruna pepasten "abungkul" kaanggen nyihnayang nyuh, poh, lan taluh.',
        correctAnswer: true,
        trueLabel: 'Patut (Benar)',
        falseLabel: 'Iwang (Salah)',
      },
      {
        id: 's2',
        text: 'Kruna pepasten "aijeng" kaanggen nyihnayang sapunyanan wit biu.',
        correctAnswer: false,
        trueLabel: 'Patut (Benar)',
        falseLabel: 'Iwang (Salah)',
      },
      {
        id: 's3',
        text: 'Kruna pepasten "atundun" kaanggen ring biu sane kantun masikian ring tundunnyane.',
        correctAnswer: true,
        trueLabel: 'Patut (Benar)',
        falseLabel: 'Iwang (Salah)',
      },
      {
        id: 's4',
        text: 'Kruna pepasten "apuun" kaanggen nyihnayang punyan taru sane kantun maurip.',
        correctAnswer: true,
        trueLabel: 'Patut (Benar)',
        falseLabel: 'Iwang (Salah)',
      },
    ],
    explanation:
      'Parikandha s2 iwang duaning aijeng punika kaanggen asisir biu, sedengkan sapunyanan biu kabaos apuun biu. S1, s3, lan s4 patut.',
  },
  {
    id: 19,
    type: 'pgk_kategori',
    categoryType: 'benar_salah',
    topic: 'Kruna Wilangan Pepasten Beburon & Pasangan',
    difficulty: 'Sedang',
    text: 'Tilikin kruna wilangan pepasten sane kaanggen ring sarwa pasangan, beburon, miwah anak marabian puniki!',
    statements: [
      {
        id: 's1',
        text: 'Kruna pepasten "apasang" kaanggen ring sapatu, sandal, miwah anting-anting.',
        correctAnswer: true,
        trueLabel: 'Patut (Benar)',
        falseLabel: 'Iwang (Salah)',
      },
      {
        id: 's2',
        text: 'Kruna pepasten "aakit" kaanggen ring sampi sane kaanggen matekap di carik.',
        correctAnswer: true,
        trueLabel: 'Patut (Benar)',
        falseLabel: 'Iwang (Salah)',
      },
      {
        id: 's3',
        text: 'Kruna pepasten "akelan" punika nyihnayang wantah asiki tipat kemanten.',
        correctAnswer: false,
        trueLabel: 'Patut (Benar)',
        falseLabel: 'Iwang (Salah)',
      },
      {
        id: 's4',
        text: 'Kruna pepasten "akuren" kaanggen ring anak sane sampun marabian (somah).',
        correctAnswer: true,
        trueLabel: 'Patut (Benar)',
        falseLabel: 'Iwang (Salah)',
      },
    ],
    explanation:
      'Parikandha s3 iwang duaning akelan tipat punika nemungkul tipat (nem bunter tipat). S1, s2, lan s4 patut.',
  },
  {
    id: 20,
    type: 'pgk_kategori',
    categoryType: 'benar_salah',
    topic: 'Kruna Wilangan Pepasten Takaran & Lambaran',
    difficulty: 'Sukar',
    text: 'Tilikin panggunaan kruna wilangan pepasten ring sarwa lambaran, takaran, miwah irisan puniki!',
    statements: [
      {
        id: 's1',
        text: 'Kruna pepasten "abidang" kaanggen ring tikeh, kamben, miwah keretas.',
        correctAnswer: true,
        trueLabel: 'Patut (Benar)',
        falseLabel: 'Iwang (Salah)',
      },
      {
        id: 's2',
        text: 'Kruna pepasten "acedok" kaanggen nyihnayang takaran yeh/toya asiki gayung.',
        correctAnswer: true,
        trueLabel: 'Patut (Benar)',
        falseLabel: 'Iwang (Salah)',
      },
      {
        id: 's3',
        text: 'Kruna pepasten "agemkem" punika tegesne baas asiki butir kemanten.',
        correctAnswer: false,
        trueLabel: 'Patut (Benar)',
        falseLabel: 'Iwang (Salah)',
      },
      {
        id: 's4',
        text: 'Kruna pepasten "atebih" kaanggen ring ulam utawi roti sane sampun kagetep.',
        correctAnswer: true,
        trueLabel: 'Patut (Benar)',
        falseLabel: 'Iwang (Salah)',
      },
    ],
    explanation:
      'Parikandha s3 iwang duaning agemkem punika baas asiki genggam (segenggam tangan), sedengkan asiki butir baas kabaos abulih baas. S1, s2, lan s4 patut.',
  },

  // =========================================================================
  // BAGIAN IV: MENJODOHKAN (5 BUTIR SOAL: NO. 21 - 25)
  // Menjodohkan 4 pasangan premis & match (Total skor = 5)
  // =========================================================================
  {
    id: 21,
    type: 'menjodohkan',
    topic: 'Kruna Wilangan Gebogan 200-1000',
    difficulty: 'Sedang',
    text: 'Pasangang angka wilangan ring kolom kiwa sareng kruna wilangan gebogan basa Bali sane manut ring kolom tengen!',
    matchingPairs: [
      { id: 'm1', premise: 'Angka 200', match: 'Satak' },
      { id: 'm2', premise: 'Angka 400', match: 'Samas' },
      { id: 'm3', premise: 'Angka 600', match: 'Nematus' },
      { id: 'm4', premise: 'Angka 800', match: 'Domas' },
    ],
    explanation:
      '200 = Satak, 400 = Samas, 600 = Nematus, 800 = Domas.',
  },
  {
    id: 22,
    type: 'menjodohkan',
    topic: 'Nyambatang Adan Pipis Rupiah',
    difficulty: 'Sedang',
    text: 'Pasangang aji jinah rupiah ring kolom kiwa sareng panyambatan adan pipis basa Bali ring kolom tengen!',
    matchingPairs: [
      { id: 'm1', premise: 'Jinah Rp 200,-', match: 'Satak rupiah' },
      { id: 'm2', premise: 'Jinah Rp 400,-', match: 'Samas rupiah' },
      { id: 'm3', premise: 'Jinah Rp 800,-', match: 'Domas rupiah' },
      { id: 'm4', premise: 'Jinah Rp 1.000,-', match: 'Siu rupiah (A tali)' },
    ],
    explanation:
      'Rp 200 = satak rupiah, Rp 400 = samas rupiah, Rp 800 = domas rupiah, Rp 1.000 = siu rupiah.',
  },
  {
    id: 23,
    type: 'menjodohkan',
    topic: 'Adan Pipis Tradisional Bali (Pis Bolong)',
    difficulty: 'Sedang',
    text: 'Pasangang adan jinah bolong tradisional Bali ring kolom kiwa sareng akeh keping pis bolong sane manut ring kolom tengen!',
    matchingPairs: [
      { id: 'm1', premise: 'Aketeng', match: '1 keping pis bolong' },
      { id: 'm2', premise: 'Selae', match: '25 keping pis bolong' },
      { id: 'm3', premise: 'Seket', match: '50 keping pis bolong' },
      { id: 'm4', premise: 'Atali (Satus)', match: '100 keping pis bolong' },
    ],
    explanation:
      'Aketeng = 1 kepeng, selae = 25 kepeng, seket = 50 kepeng, atali/satus = 100 kepeng.',
  },
  {
    id: 24,
    type: 'menjodohkan',
    topic: 'Kruna Wilangan Pepasten Woh & Piranti',
    difficulty: 'Sedang',
    text: 'Pasangang wastan barang ring kolom kiwa sareng kruna wilangan pepasten sane patut ring kolom tengen!',
    matchingPairs: [
      { id: 'm1', premise: 'Taluh bébék bunter', match: 'Abungkul' },
      { id: 'm2', premise: 'Tiing petung lantang', match: 'Akatih' },
      { id: 'm3', premise: 'Tikeh pandan lambaran', match: 'Abidang' },
      { id: 'm4', premise: 'Biu mas asisir', match: 'Aijeng' },
    ],
    explanation:
      'Taluh bebek = abungkul, tiing petung = akatih, tikeh pandan = abidang, biu mas = aijeng.',
  },
  {
    id: 25,
    type: 'menjodohkan',
    topic: 'Kruna Wilangan Pepasten Pasangan, Beburon & Don',
    difficulty: 'Sedang',
    text: 'Pasangang wastan barang utawi beburon ring kolom kiwa sareng kruna wilangan pepasten sane patut ring kolom tengen!',
    matchingPairs: [
      { id: 'm1', premise: 'Sapatu masekolah', match: 'Apasang' },
      { id: 'm2', premise: 'Sampi matekap di carik', match: 'Aakit' },
      { id: 'm3', premise: 'Tipat nasi nemungkul', match: 'Akelan' },
      { id: 'm4', premise: 'Don biu kute pelepah', match: 'Aklosod' },
    ],
    explanation:
      'Sapatu = apasang, sampi matekap = aakit, tipat nemungkul = akelan, don biu pelepah = aklosod.',
  },

  // =========================================================================
  // BAGIAN V: ISIAN SINGKAT (5 BUTIR SOAL: NO. 26 - 30)
  // Menjawab singkat dengan kosa kata yang tepat (Total skor = 5)
  // =========================================================================
  {
    id: 26,
    type: 'isian',
    topic: 'Kruna Wilangan Gebogan 200',
    difficulty: 'Mudah',
    text: 'Kruna wilangan gebogan sane nyihnayang angka wilangan 200 ring sajeroning basa Bali kawastanin...',
    correctAnswer: 'satak',
    acceptedAnswers: ['satak', 'Satak', 'SATAK'],
    explanation:
      'Angka wilangan 200 ring basa Bali kawastanin "satak".',
  },
  {
    id: 27,
    type: 'isian',
    topic: 'Kruna Wilangan Gebogan 400',
    difficulty: 'Mudah',
    text: 'Kruna wilangan gebogan sane nyihnayang angka wilangan 400 ring sajeroning basa Bali kawastanin...',
    correctAnswer: 'samas',
    acceptedAnswers: ['samas', 'Samas', 'SAMAS'],
    explanation:
      'Angka wilangan 400 ring basa Bali kawastanin "samas".',
  },
  {
    id: 28,
    type: 'isian',
    topic: 'Kruna Wilangan Gebogan 800',
    difficulty: 'Mudah',
    text: 'Kruna wilangan gebogan sane nyihnayang angka wilangan 800 ring sajeroning basa Bali kawastanin...',
    correctAnswer: 'domas',
    acceptedAnswers: ['domas', 'Domas', 'DOMAS'],
    explanation:
      'Angka wilangan 800 ring basa Bali kawastanin "domas".',
  },
  {
    id: 29,
    type: 'isian',
    topic: 'Nyambatang Adan Pipis Tradisional',
    difficulty: 'Mudah',
    text: 'Pis bolong (jinah bolong) tradisional ring Bali sane akehnyane wantah 1 keping ketah kasambang jinah a...',
    correctAnswer: 'keteng',
    acceptedAnswers: ['keteng', 'aketeng', 'Keteng', 'Aketeng', 'sa-keteng'],
    explanation:
      'Pis bolong sane akeping kasambang "aketeng" (sa-keteng).',
  },
  {
    id: 30,
    type: 'isian',
    topic: 'Kruna Wilangan Pepasten Woh/Taluh',
    difficulty: 'Mudah',
    text: 'Kruna wilangan pepasten sane kaanggen nyihnayang barang marupa bunter sekadi taluh, nyuh, utawi buah poh inggih punika a...',
    correctAnswer: 'bungkul',
    acceptedAnswers: ['bungkul', 'abungkul', 'Bungkul', 'Abungkul', 'sa-bungkul'],
    explanation:
      'Kruna wilangan pepasten anggen sarwa bunter inggih punika "abungkul".',
  },

  // =========================================================================
  // BAGIAN VI: URAIAN / ESSAY TERBUKA (5 BUTIR SOAL: NO. 31 - 35)
  // Menjawab uraian mendalam berbobot skor maksimal 2 (Total skor = 10)
  // =========================================================================
  {
    id: 31,
    type: 'uraian',
    topic: 'Kruna Wilangan Gebogan 200-1000',
    difficulty: 'Sedang',
    maxScore: 2,
    text: 'Kruna wilangan gebogan 200 ngantos 1000 madue wastan sane matiosan ring sajeroning basa Bali. Indayang tulisang adan kruna wilangan gebogan ring basa Bali antuk angka-angka puniki:\na. 200\nb. 400\nc. 600\nd. 800\ne. 1000',
    keyPoints: [
      '200 = satak',
      '400 = samas',
      '600 = nematus',
      '800 = domas',
      '1000 = siu (a tali)',
    ],
    rubric:
      'Skor 2: Menyebutkan kelima kruna wilangan (satak, samas, nematus, domas, siu) dengan lengkap dan benar. Skor 1: Menyebutkan 3-4 kruna wilangan dengan benar. Skor 0.5: Hanya menyebutkan 1-2 kruna wilangan.',
    explanation:
      'Wastan kruna wilangan gebogan: 200 = satak, 400 = samas, 600 = nematus, 800 = domas, 1000 = siu.',
  },
  {
    id: 32,
    type: 'uraian',
    topic: 'Adan Pipis Tradisional Bali (Pis Bolong)',
    difficulty: 'Sedang',
    maxScore: 2,
    text: 'Krama Bali nguni ngantos mangkin kantun ngawigunayang jinah bolong ring upacara yadnya. Indayang tulisang adan jinah bolong (pipis tradisional Bali) manut akeh kepingnyane:\na. 1 keping pis bolong\nb. 25 keping pis bolong\nc. 50 keping pis bolong\nd. 100 keping pis bolong',
    keyPoints: [
      '1 keping = aketeng (sa-keteng)',
      '25 keping = selae (sa-lae)',
      '50 keping = seket',
      '100 keping = atali (satus keteng)',
    ],
    rubric:
      'Skor 2: Menuliskan keempat sebutan jinah bolong (aketeng, selae, seket, atali/satus) dengan tepat. Skor 1: Menuliskan 2-3 sebutan dengan benar. Skor 0.5: Hanya menuliskan 1 sebutan.',
    explanation:
      'Adan jinah bolong: 1 keping = aketeng, 25 keping = selae, 50 keping = seket, 100 keping = atali (satus).',
  },
  {
    id: 33,
    type: 'uraian',
    topic: 'Piteges & Conto Kruna Wilangan Pepasten',
    difficulty: 'Sedang',
    maxScore: 2,
    text: 'Napi sane kawastanin kruna wilangan pepasten? Indayang terangang pitegesne tur wehin 3 (tetelu) conto kruna wilangan pepasten kasarengin wastan barang sane patut!',
    keyPoints: [
      'Piteges: Kruna wilangan pepasten inggih punika kruna wilangan sane nyihnayang kepastian utawi satuan ukuran/takaran barang sane kabaos.',
      'Conto 1: Abungkul (taluh, nyuh, poh, buah semangka)',
      'Conto 2: Akatih (tiing, potlot, garisan, tebu)',
      'Conto 3: Abidang (kamben, tikeh, don, keretas) utawi Apasang (sapatu, sandal)',
    ],
    rubric:
      'Skor 2: Menjelaskan pengertian kruna wilangan pepasten dengan tepat dan memberikan 3 contoh satuan beserta barang pasangannya dengan benar. Skor 1: Pengertian kurang lengkap atau hanya memberikan 1-2 contoh. Skor 0.5: Hanya menyebut contoh tanpa pengertian.',
    explanation:
      'Kruna wilangan pepasten inggih punika kruna wilangan sane nyihnayang kepastian satuan barang. Conto: abungkul nyuh, akatih tiing, abidang tikeh, apasang sapatu.',
  },
  {
    id: 34,
    type: 'uraian',
    topic: 'Kruna Wilangan Pepasten Biu (Pisang)',
    difficulty: 'Sukar',
    maxScore: 2,
    text: 'Woh biu (pisang) ring basa Bali madue makudang-kudang kruna wilangan pepasten manut wangunnyane. Indayang jantenang pabinan panggunaan kruna wilangan pepasten puniki:\na. Akatih biu\nb. Aijeng biu\nc. Atundun biu',
    keyPoints: [
      'Akatih biu: nyihnayang asiki butir biu (sebutir/sebiji buah pisang)',
      'Aijeng biu: nyihnayang asisir biu sane masikian ring barisannyane (sesisir pisang)',
      'Atundun biu: nyihnayang makasami biu sajero wit tandun sane kantun magantung (setandan pisang)',
    ],
    rubric:
      'Skor 2: Menjelaskan ketiga perbedaan (akatih = sebutir, aijeng = sesisir, atundun = setandan) secara jelas dan tepat. Skor 1: Menjelaskan 2 perbedaan secara tepat. Skor 0.5: Hanya mampu menjelaskan 1 perbedaan.',
    explanation:
      'Pabinan kruna pepasten biu: Akatih biu = sebutir buah pisang, aijeng biu = sesisir pisang, atundun biu = setandan pisang.',
  },
  {
    id: 35,
    type: 'uraian',
    topic: 'Pangrapian Lengkara Basa Bali',
    difficulty: 'Sukar',
    maxScore: 2,
    text: 'Indayang wentuk 3 (tetelu) lengkara nganggen basa Bali sane patut tur becik, sane masing-masing madaging:\na. Lengkara nganggen kruna wilangan gebogan ("satak" utawi "samas")\nb. Lengkara nganggen panyambatan adan pipis rupiah ("satak rupiah", "samas rupiah", utawi "siu rupiah")\nc. Lengkara nganggen kruna wilangan pepasten ("abungkul", "akatih", utawi "apasang")!',
    keyPoints: [
      'Lengkara a (Kruna wilangan gebogan): Conto "Pekak ngadep bebek akehnyane satak ukud ring peken."',
      'Lengkara b (Adan pipis): Conto "Tiang numbas jaja Bali maaji samas rupiah."',
      'Lengkara c (Kruna wilangan pepasten): Conto "I Meme numbas taluh bebek abungkul ring warung."',
    ],
    rubric:
      'Skor 2: Mampu membuat ketiga kalimat bahasa Bali dengan struktur tatabahasa yang baik, relevan, dan memuat unsur yang diminta secara lengkap. Skor 1: Membuat 2 kalimat dengan benar. Skor 0.5: Hanya membuat 1 kalimat dengan benar.',
    explanation:
      'Conto lengkara: a. Pekak ngadep bebek satak ukud di peken. b. Putu numbas garisan maaji samas rupiah. c. I Meme meli taluh bebek abungkul.',
  },
];
