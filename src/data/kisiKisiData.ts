import { Question, LevelKognitif, Difficulty, QuestionType } from '../types';

export interface KisiKisiItem {
  id: number;
  elemen: string;
  cp: string;
  tp: string;
  indikator: string;
  levelKognitif: LevelKognitif;
  bobotSkor: number;
}

const ELEMEN_DEFAULT = 'Membaca dan Memirsa (Tatabasa miwah Kosa Basa Bali)';

const CP_DEFAULT =
  'Peserta didik mampu mengidentifikasi, memahami, dan menerapkan kosa kata bahasa Bali ragam kruna wilangan gebogan 200–1000, nyambatang adan pipis (jinah rupiah miwah pis bolong tradisional Bali), serta kruna wilangan pepasten (satuan ukuran barang) secara tepat dan mandiri dalam berkomunikasi maupun kehidupan sehari-hari.';

const TP_1 =
  'Mengidentifikasi, membaca, dan menyebutkan kruna wilangan gebogan 200 ngantos 1000 (satak, telungatus, samas, limangatus, nematus, pitungatus, domas, sangangatus, siu) ring sajeroning basa Bali.';
const TP_2 =
  'Memahami, menganalisis, dan nyambatang adan pipis rupiah miwah adan pipis tradisional Bali (jinah bolong sakadi keteng, selae, seket, satus/atali, satak, samas, domas, siu, kampel, kanca).';
const TP_3 =
  'Menganalisis, menentukan, dan menerapkan kruna wilangan pepasten (satuan barang sakadi abungkul, akatih, abidang, aijeng, atundun, apasang, aakit, akelan, aklosod, atebih, abulih, acedok, agemkem, arenceng, apuun) manut soroh barang ring basa Bali.';

export const KISI_KISI_MAP: Record<number, KisiKisiItem> = {
  // --- BAGIAN I: PILIHAN GANDA (10 BUTIR: NO. 1 - 10) ---
  1: {
    id: 1,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_1,
    indikator:
      'Disajikan pertanyaan mengenai wilangan angka 200, peserta didik dapat menentukan kruna wilangan gebogan sane patut ring basa Bali (satak).',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  2: {
    id: 2,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_1,
    indikator:
      'Disajikan infografis bagan kruna wilangan gebogan ring Bali, peserta didik dapat mengidentifikasi kruna wilangan sane nyihnayang angka 400 (samas).',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  3: {
    id: 3,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_1,
    indikator:
      'Disajikan soal hitungan matematika konteks Bali utawi wilangan 800, peserta didik dapat menentukan kruna wilangan gebogan ring basa Bali (domas).',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  4: {
    id: 4,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_1,
    indikator:
      'Disajikan angka wilangan 1000, peserta didik dapat mengidentifikasi kruna wilangan gebogan ring basa Bali (siu).',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  5: {
    id: 5,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_1,
    indikator:
      'Disajikan ilustrasi panen woh-wohan sane akehnyane 600 bungkul, peserta didik dapat menentukan kruna wilangan basa Bali sane tepat (nematus).',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  6: {
    id: 6,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_2,
    indikator:
      'Disajikan gambar jinah kertas/logam Rp 400,- utawi panyambatan pipis rupiah, peserta didik dapat nyambatang adan pipis ring basa Bali (samas rupiah).',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  7: {
    id: 7,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_2,
    indikator:
      'Disajikan informasi indik jinah bolong / pis bolong tradisional Bali sane akehnyane asiki (1 keping), peserta didik dapat menentukan adan jinah punika (aketeng).',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  8: {
    id: 8,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_2,
    indikator:
      'Disajikan cerita transaksi numbas piranti masekolah antuk jinah Rp 1.000,-, peserta didik dapat nyambatang adan pipis rupiah punika ring basa Bali (siu rupiah / a tali rupiah).',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  9: {
    id: 9,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_3,
    indikator:
      'Disajikan lengkara rumpang indik taluh bebek ring peken, peserta didik dapat melengkapi kruna wilangan pepasten sane patut anggen barang marupa bunter/bulat (abungkul).',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  10: {
    id: 10,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_3,
    indikator:
      'Disajikan lengkara indik ngarit tiing petung ring tegalan, peserta didik dapat memilih kruna wilangan pepasten sane patut kaanggen ring tiing/kayu/potlot sane lantang (akatih).',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },

  // --- BAGIAN II: PILIHAN GANDA KOMPLEKS (5 BUTIR: NO. 11 - 15) ---
  11: {
    id: 11,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_1,
    indikator:
      'Disajikan makudang-kudang pasangan angka wilangan 200-1000 sareng kruna wilangannyane, peserta didik dapat memilih pasangan sane patut ring sajeroning basa Bali.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  12: {
    id: 12,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_2,
    indikator:
      'Disajikan makudang-kudang panyambatan adan pipis (jinah rupiah miwah jinah bolong), peserta didik dapat memilih makudang-kudang panyambatan adan pipis sane patut.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  13: {
    id: 13,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_3,
    indikator:
      'Disajikan ragam kruna wilangan pepasten anggen woh-wohan miwah punyan-punyanan, peserta didik dapat memilih makudang-kudang pasangan kruna wilangan pepasten sane patut.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  14: {
    id: 14,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_3,
    indikator:
      'Disajikan makudang-kudang kruna wilangan pepasten marupa lambaran, pasangan, miwah beburon, peserta didik dapat menganalisis pasangan kruna wilangan pepasten sane patut.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  15: {
    id: 15,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_3,
    indikator:
      'Disajikan ragam kruna wilangan pepasten sarwa jaja Bali, ulam, miwah banten (tipat, cerorot, ulam bawi), peserta didik dapat memilih makudang-kudang kruna wilangan pepasten sane tepat.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },

  // --- BAGIAN III: PGK KATEGORI / BENAR-SALAH (5 BUTIR: NO. 16 - 20) ---
  16: {
    id: 16,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_1,
    indikator:
      'Disajikan 4 pernyataan indik kruna wilangan gebogan (200, 400, 800, 1000), peserta didik dapat menentukan kebenaran (Benar/Salah) masing-masing pernyataan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  17: {
    id: 17,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_2,
    indikator:
      'Disajikan 4 pernyataan ngenenin indik nyambatang adan pipis rupiah miwah jinah bolong tradisional ring Bali, peserta didik dapat mengkategorikan (Benar/Salah).',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  18: {
    id: 18,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_3,
    indikator:
      'Disajikan 4 pernyataan indik panggunaan kruna wilangan pepasten ring woh-wohan miwah entik-entikan (abungkul, aijeng, atundun, apuun), peserta didik dapat memvalidasi kebenaran (Benar/Salah).',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  19: {
    id: 19,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_3,
    indikator:
      'Disajikan 4 pernyataan indik kruna wilangan pepasten pasangan barang, beburon, miwah anak marabian (apasang, aakit, akelan, akuren), peserta didik dapat menguji kebenaran (Benar/Salah).',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  20: {
    id: 20,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_3,
    indikator:
      'Disajikan 4 pernyataan analisis kruna wilangan pepasten takaran, lembaran, miwah irisan (abidang, acedok, agemkem, atebih), peserta didik dapat mengevaluasi kebenaran pernyataan (Benar/Salah).',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },

  // --- BAGIAN IV: MENJODOHKAN (5 BUTIR: NO. 21 - 25) ---
  21: {
    id: 21,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_1,
    indikator:
      'Peserta didik dapat menjodohkan angka wilangan (200, 400, 600, 800) ring kolom kiwa sareng kruna wilangan gebogan basa Bali ring kolom tengen kanthi patut.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  22: {
    id: 22,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_2,
    indikator:
      'Peserta didik dapat menjodohkan nilai nominal pipis rupiah (Rp 200, Rp 400, Rp 800, Rp 1.000) sareng panyambatan adan pipis ring basa Bali.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  23: {
    id: 23,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_2,
    indikator:
      'Peserta didik dapat menjodohkan adan jinah bolong tradisional Bali (Aketeng, Selae, Seket, Atali/Satus) sareng akeh keping pis bolong sane manut.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  24: {
    id: 24,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_3,
    indikator:
      'Peserta didik dapat menjodohkan wastan barang (Taluh bebek, Tiing petung, Tikeh pandan, Biu raja sisir) sareng kruna wilangan pepasten sane patut.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  25: {
    id: 25,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_3,
    indikator:
      'Peserta didik dapat menjodohkan barang pasangan, beburon, kemasan, miwah don (Sapatu anyar, Sampi matekap, Tipat banten, Don biu) sareng kruna wilangan pepasten sane pas.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },

  // --- BAGIAN V: ISIAN SINGKAT (5 BUTIR: NO. 26 - 30) ---
  26: {
    id: 26,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_1,
    indikator:
      'Disajikan pitaken indik kruna wilangan gebogan sane nyihnayang angka 200, peserta didik dapat menuliskan kruna wilangan sane patut (satak).',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  27: {
    id: 27,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_1,
    indikator:
      'Disajikan pitaken indik kruna wilangan gebogan sane nyihnayang angka 400, peserta didik dapat menuliskan kruna wilangan sane patut (samas).',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  28: {
    id: 28,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_1,
    indikator:
      'Disajikan pitaken indik kruna wilangan gebogan sane nyihnayang angka 800, peserta didik dapat menuliskan kruna wilangan sane patut (domas).',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  29: {
    id: 29,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_2,
    indikator:
      'Disajikan pitaken indik pis bolong sane akeping, peserta didik dapat menuliskan adan jinah tradisional punika ring basa Bali (aketeng / keteng).',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  30: {
    id: 30,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_3,
    indikator:
      'Disajikan lengkara rumpang indik taluh utawi buah sane bunter, peserta didik dapat menuliskan kruna wilangan pepasten sane patut (abungkul / bungkul).',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },

  // --- BAGIAN VI: URAIAN / ESSAY TERBUKA (5 BUTIR: NO. 31 - 35) ---
  31: {
    id: 31,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_1,
    indikator:
      'Peserta didik dapat menguraikan dan menuliskan kruna wilangan gebogan ring basa Bali antuk angka 200, 400, 600, 800, lan 1000 kanthi patut tur jangkep.',
    levelKognitif: 'L2',
    bobotSkor: 2,
  },
  32: {
    id: 32,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_2,
    indikator:
      'Peserta didik dapat menerangkan dan menuliskan adan jinah bolong (pipis tradisional Bali) antuk akehnyane 1 keteng, 25 keteng (selae), 50 keteng (seket), lan 100 keteng (atali/satus).',
    levelKognitif: 'L2',
    bobotSkor: 2,
  },
  33: {
    id: 33,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_3,
    indikator:
      'Peserta didik dapat mendefinisikan piteges kruna wilangan pepasten serta memberikan 3 (tiga) contoh kruna wilangan pepasten beserta barang pasangannya secara tepat.',
    levelKognitif: 'L2',
    bobotSkor: 2,
  },
  34: {
    id: 34,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_3,
    indikator:
      'Peserta didik dapat menganalisis dan membedakan penggunaan kruna wilangan pepasten ring woh biu (akatih biu, aijeng biu, lan atundun biu) manut wangunnyane.',
    levelKognitif: 'L3',
    bobotSkor: 2,
  },
  35: {
    id: 35,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_2,
    indikator:
      'Peserta didik dapat membuat 3 (tiga) kalimat bahasa Bali yang benar yang masing-masing memuat: (a) kruna wilangan gebogan, (b) adan pipis, dan (c) kruna wilangan pepasten secara kontekstual.',
    levelKognitif: 'L3',
    bobotSkor: 2,
  },
};

/**
 * Memperkaya objek pertanyaan dengan metadata kisi-kisi Kurikulum Merdeka
 */
export function enrichQuestion(question: Question): Question {
  const item = KISI_KISI_MAP[question.id];
  if (!item) {
    return {
      ...question,
      elemen: question.elemen || ELEMEN_DEFAULT,
      cp: question.cp || CP_DEFAULT,
      tp: question.tp || TP_1,
      indikator: question.indikator || `Indikator soal nomor ${question.id}`,
      levelKognitif: question.levelKognitif || 'L2',
      bobotSkor: question.bobotSkor || (question.type === 'uraian' ? 2 : 1),
    };
  }

  return {
    ...question,
    elemen: question.elemen || item.elemen,
    cp: question.cp || item.cp,
    tp: question.tp || item.tp,
    indikator: question.indikator || item.indikator,
    levelKognitif: question.levelKognitif || item.levelKognitif,
    bobotSkor: question.bobotSkor || item.bobotSkor,
  };
}

export interface KisiKisiSummaryStats {
  totalSoal: number;
  totalSkor: number;
  elemenCounts: Record<string, number>;
  levelCounts: {
    L1: { count: number; percent: number; label: string };
    L2: { count: number; percent: number; label: string };
    L3: { count: number; percent: number; label: string };
  };
  difficultyCounts: {
    Mudah: { count: number; percent: number };
    Sedang: { count: number; percent: number };
    Sukar: { count: number; percent: number };
  };
  typeCounts: Record<QuestionType, number>;
}

/**
 * Menghitung rekapitulasi statistik kisi-kisi secara otomatis
 */
export function calculateKisiKisiStats(questions: Question[]): KisiKisiSummaryStats {
  const total = questions.length || 1;
  let totalScore = 0;

  const elemenCounts: Record<string, number> = {};
  const levelRaw = { L1: 0, L2: 0, L3: 0 };
  const diffRaw = { Mudah: 0, Sedang: 0, Sukar: 0 };
  const typeCounts: Record<QuestionType, number> = {
    pg: 0,
    pgk: 0,
    pgk_kategori: 0,
    menjodohkan: 0,
    isian: 0,
    uraian: 0,
  };

  questions.forEach((q) => {
    const enriched = enrichQuestion(q);
    const score = enriched.bobotSkor || (q.type === 'uraian' ? 2 : 1);
    totalScore += score;

    const el = enriched.elemen || ELEMEN_DEFAULT;
    elemenCounts[el] = (elemenCounts[el] || 0) + 1;

    const lvl =
      enriched.levelKognitif ||
      (enriched.difficulty === 'Mudah' ? 'L1' : enriched.difficulty === 'Sedang' ? 'L2' : 'L3');
    if (lvl in levelRaw) {
      levelRaw[lvl as keyof typeof levelRaw] += 1;
    }

    const diff = enriched.difficulty || 'Sedang';
    if (diff in diffRaw) {
      diffRaw[diff as keyof typeof diffRaw] += 1;
    }

    if (q.type in typeCounts) {
      typeCounts[q.type as keyof typeof typeCounts] += 1;
    }
  });

  return {
    totalSoal: questions.length,
    totalSkor: totalScore,
    elemenCounts,
    levelCounts: {
      L1: {
        count: levelRaw.L1,
        percent: Math.round((levelRaw.L1 / total) * 100),
        label: 'L1 - Pangresep & Pangweruhan (Pemahaman)',
      },
      L2: {
        count: levelRaw.L2,
        percent: Math.round((levelRaw.L2 / total) * 100),
        label: 'L2 - Panglaksanayang (Penerapan/Aplikasi)',
      },
      L3: {
        count: levelRaw.L3,
        percent: Math.round((levelRaw.L3 / total) * 100),
        label: 'L3 - Tatimbang & Analisis HOTS (Penalaran)',
      },
    },
    difficultyCounts: {
      Mudah: { count: diffRaw.Mudah, percent: Math.round((diffRaw.Mudah / total) * 100) },
      Sedang: { count: diffRaw.Sedang, percent: Math.round((diffRaw.Sedang / total) * 100) },
      Sukar: { count: diffRaw.Sukar, percent: Math.round((diffRaw.Sukar / total) * 100) },
    },
    typeCounts,
  };
}
