/* ============================================================================
   LUNIX PORTAL CONFIGURATION (CLAIRE EDITION)
   ============================================================================
   File ini sengaja dibiarkan tidak di-minify / tidak di-obfuscate agar kamu
   dapat dengan mudah mengedit, menambah, atau memperbarui link kapan saja
   langsung di GitHub atau secara lokal tanpa harus melakukan build ulang.

   PANDUAN EDIT CEPAT:
   1. Untuk mengganti atau mengisi link: ubah nilai `url: '...'`.
   2. Jika link belum tersedia, biarkan `url: ''` (akan tampil nonaktif/segera hadir).
   3. Hanya link berawalan https:// atau http:// yang bisa diklik dan akan
      otomatis dibuka di tab baru.
   4. Kamu bisa menambah item baru di dalam daftar `links` atau `years`
      mengikuti format objek { label: '...', description: '...', url: '...' }.
   ============================================================================ */

(function (global) {
  'use strict';

  global.LUNIX_CONFIG = {
    // Judul & deskripsi menu utama 8 modul LuniX di chat Claire
    title: 'Modul Layanan LuniX',
    description: 'Pilih modul yang ingin kamu akses. Tautan akan dibuka di tab baru.',

    // Base URL portal live sebelumnya
    baseUrl: 'https://lunix-213.github.io/lunix-213/',

    // Daftar 8 Modul Utama (urutan tampil sesuai urutan array ini)
    modules: [
      /* ----------------------------------------------------------------------
         1. LUNIX GAJI
         ---------------------------------------------------------------------- */
      {
        id: 'gaji',
        label: 'LuniX Gaji',
        tag: 'CORE // LANIAKEA',
        description: 'Kelola gaji dengan mudah!',
        icon: '💳',
        // Tautan langsung (Portal, Web App, dan Drive)
        links: [
          {
            label: 'Portal LuniX Gaji',
            description: 'Buka halaman portal LuniX Gaji lengkap',
            url: 'https://lunix-213.github.io/lunix-213/pages/lunix/lunix_gaji.html',
            icon: '🌐'
          },
          {
            label: 'Web App Gaji (Apps Script)',
            description: 'Buka aplikasi web penggajian',
            url: 'https://script.google.com/macros/s/AKfycbzTF2jae8LddmPac3-r8yz6WsogSABAYd7ytQb007ymR1SJHKzAmHTKiI4KCARGa0uXvg/exec',
            icon: '⚡'
          },
          {
            label: 'Arsip Gaji PNS & PPPK',
            description: 'Folder Google Drive arsip PNS & PPPK',
            url: 'https://drive.google.com/drive/u/2/folders/1GnPVWz5yRD_HQY5trNEX54BtNzjA-0Yg',
            icon: '🗄️'
          },
          {
            label: 'Arsip Gaji PTT',
            description: 'Folder Google Drive arsip PTT',
            url: 'https://drive.google.com/drive/u/2/folders/1aJmJwAVpSx3dAHXVifh7JxcBE43O5dxI',
            icon: '🗄️'
          }
        ],
        // Spreadsheet per tahun & bulan (bisa langsung ditambah tahun/bulan baru)
        years: {
          '2026': {
            label: 'Gaji Tahun 2026',
            description: 'Spreadsheet gaji bulanan & tunjangan 2026',
            items: [
              { label: 'Januari 2026', description: 'Sheet Gaji Januari', url: 'https://docs.google.com/spreadsheets/d/1Y0alguZRMHcOU0HWqadInZmBWv_1VYs4_EEP0fgYP_0/edit?usp=sharing' },
              { label: 'Februari 2026', description: 'Sheet Gaji Februari', url: 'https://docs.google.com/spreadsheets/d/1h4dz0tyq2dhIzPUPEbhi4TRoNZmIj8j8sTgSAmUEizc/edit?usp=sharing' },
              { label: 'Maret 2026', description: 'Sheet Gaji Maret', url: 'https://docs.google.com/spreadsheets/d/1_a_gzS_xIzZM7QumXTF6ia8VmgPOJn8nuHb9jn143UQ/edit?usp=sharing' },
              { label: 'April 2026', description: 'Sheet Gaji April', url: 'https://docs.google.com/spreadsheets/d/1SGK7pElO2teUyeQxUqUPUyWnTFcziYX7tz2LbkWGY_A/edit?usp=sharing' },
              { label: 'Mei 2026', description: 'Sheet Gaji Mei', url: 'https://docs.google.com/spreadsheets/d/1f8EmrNY3NGCDaNSepiS4Mm5X3mI4X-29fXLpaAYaUro/edit?usp=sharing' },
              { label: 'Juni 2026', description: 'Sheet Gaji Juni', url: 'https://docs.google.com/spreadsheets/d/1HnDxs_dr8I6a7lvAGx4K8VIBrzOzHiXZUUr_GN20dV8/edit?usp=sharing' },
              { label: 'Juli 2026', description: 'Sheet Gaji Juli', url: 'https://docs.google.com/spreadsheets/d/1USTlWE7mEex_Zjv02A8AQ_PtQBWOTs1KgMtV4WxC_kU/edit?usp=sharing' },
              { label: 'Agustus 2026', description: 'Sheet Gaji Agustus', url: 'https://docs.google.com/spreadsheets/d/1snYzlTt8tXuHiRQ-g753tXW1DIja-RD75GeLqQJJnd4/edit?usp=sharing' },
              { label: 'September 2026', description: 'Sheet Gaji September', url: '' },
              { label: 'Oktober 2026', description: 'Sheet Gaji Oktober', url: '' },
              { label: 'November 2026', description: 'Sheet Gaji November', url: '' },
              { label: 'Desember 2026', description: 'Sheet Gaji Desember', url: '' },
              { label: 'THR / ke-14 (2026)', description: 'Sheet Gaji THR ke-14', url: 'https://docs.google.com/spreadsheets/d/1yqxuYS7cj2Q2gksyKzwavFUr6NPtS75siHuU9EQnz4Y/edit?usp=sharing' },
              { label: 'Gaji ke-13 (2026)', description: 'Sheet Gaji ke-13', url: 'https://docs.google.com/spreadsheets/d/1yVngz8lvAJmkklknJbF9h4R1NIKoDzJL7o8QedJwus0/edit?usp=sharing' },
              { label: 'SHU Koperasi (2026)', description: 'Sheet SHU Koperasi', url: 'https://docs.google.com/spreadsheets/d/1JTNX3YN1E58i48jjOo1uWLbnaEPu6nsJ82RziQyvfpk/edit?usp=sharing' },
              { label: 'THR Koperasi (2026)', description: 'Sheet THR Koperasi', url: 'https://docs.google.com/spreadsheets/d/1GYV8QMP3igdj6OId9M_jikJMR476G_Gcv3PvBnhWcCc/edit?usp=sharing' }
            ]
          },
          '2025': {
            label: 'Gaji Tahun 2025',
            description: 'Arsip spreadsheet gaji bulanan tahun 2025',
            items: [
              { label: 'Februari 2025', description: 'Sheet Gaji Februari', url: 'https://docs.google.com/spreadsheets/d/1jHwsw7uarpl2oHwIkXqHh5PIcFeAmAPXMMXxXjT7qBE/edit?usp=sharing' },
              { label: 'Maret 2025', description: 'Sheet Gaji Maret', url: 'https://docs.google.com/spreadsheets/d/1GFLK67gcgl-83dFQY4xxmDpo5B7IsKJxub41tUp7Swg/edit?usp=sharing' },
              { label: 'April 2025', description: 'Sheet Gaji April', url: 'https://docs.google.com/spreadsheets/d/1Tv7bivgQH4hG3eZSuTUiq7SxE9wWeIwPIu_l8dYLHRw/edit?usp=sharing' },
              { label: 'Mei 2025', description: 'Sheet Gaji Mei', url: 'https://docs.google.com/spreadsheets/d/1Z9TCKs-zu6Pne1J7515UmC9oq30vuwFDznYGEBKIW34/edit?usp=sharing' },
              { label: 'Juni 2025', description: 'Sheet Gaji Juni', url: 'https://docs.google.com/spreadsheets/d/167UfILtq8SDT2kRpetLoeIiZmN7wxLxW7Wn_IFxAQaI/edit?usp=sharing' },
              { label: 'Juli 2025', description: 'Sheet Gaji Juli', url: 'https://docs.google.com/spreadsheets/d/1KItEDBEOx_axy6T7OGkLyOwyltgaAUA7FoegueEpXmY/edit?usp=sharing' },
              { label: 'Agustus 2025', description: 'Sheet Gaji Agustus', url: 'https://docs.google.com/spreadsheets/d/1-j6eH50SKcqQEzUCUcBCZc9Y6XwVPFQ0lyTmTvwRgBg/edit?usp=sharing' },
              { label: 'September 2025', description: 'Sheet Gaji September', url: 'https://docs.google.com/spreadsheets/d/1S3wDWSAMrTcsv7LWOzc5Quzj7fWPhVW6IrLt7DFkyj0/edit?usp=sharing' },
              { label: 'Oktober 2025', description: 'Sheet Gaji Oktober', url: 'https://docs.google.com/spreadsheets/d/1FlDIi8uTDL7fWZHRizIIqJMI48ckEMH4eFyuK95nwJY/edit?usp=sharing' },
              { label: 'November 2025', description: 'Sheet Gaji November', url: 'https://docs.google.com/spreadsheets/d/1toVZyuor7Pv0D5zYQojLmxsiPmOsJV8viQ9gHZ80g1g/edit?usp=sharing' },
              { label: 'Desember 2025', description: 'Sheet Gaji Desember', url: 'https://docs.google.com/spreadsheets/d/1t-xR4eG2lT0H52jpzrG_hzH_8vvWcE-pw3b_9CH5gKc/edit?usp=sharing' },
              { label: 'Gaji ke-13 (2025)', description: 'Sheet Gaji ke-13', url: 'https://docs.google.com/spreadsheets/d/1DDOV4_L9WK_5vc_E67VPReBNoZ2_qBS5zOnCkb9Aot8/edit?usp=sharing' },
              { label: 'THR (2025)', description: 'Sheet Gaji THR 2025', url: 'https://docs.google.com/spreadsheets/d/1P7OeZSt6Q5FMPE1FiYspiWaknerRI1TzAgRTJ2kGHQs/edit?usp=sharing' }
            ]
          },
          '2027': {
            label: 'Gaji Tahun 2027',
            description: 'Slot persiapan tahun 2027 (Future Protocol)',
            items: [
              { label: 'Januari 2027', description: 'Sheet Gaji Januari 2027', url: '' },
              { label: 'Februari 2027', description: 'Sheet Gaji Februari 2027', url: '' },
              { label: 'Maret 2027', description: 'Sheet Gaji Maret 2027', url: '' }
            ]
          }
        }
      },

      /* ----------------------------------------------------------------------
         2. LUNIX TPP
         ---------------------------------------------------------------------- */
      {
        id: 'tpp',
        label: 'LuniX TPP',
        tag: 'CORE // SUMMER TRIANGLE',
        description: 'Hitung TPP santai~!',
        icon: '📊',
        links: [
          {
            label: 'Portal LuniX TPP',
            description: 'Buka halaman portal LuniX TPP lengkap',
            url: 'https://lunix-213.github.io/lunix-213/pages/lunix/lunix_tpp.html',
            icon: '🌐'
          },
          {
            label: 'Arsip TPP ASN (Drive)',
            description: 'Folder Google Drive arsip TPP ASN',
            url: 'https://drive.google.com/drive/folders/12giw6buz_UnXOI7iMeRAVgG42DZUOFnD?usp=drive_link',
            icon: '🗄️'
          }
        ],
        years: {
          '2026': {
            label: 'TPP Tahun 2026',
            description: 'Spreadsheet TPP bulanan & tambahan 2026',
            items: [
              { label: 'Januari 2026', description: 'Sheet TPP Januari', url: 'https://docs.google.com/spreadsheets/d/1G8eeESuKThLG6vSGsmyLQQnem6iFtCpRw4r8N9k5rOk/edit?usp=sharing' },
              { label: 'Februari 2026', description: 'Sheet TPP Februari', url: 'https://docs.google.com/spreadsheets/d/1v3M1pK2FKdhvyg5t_XK_efEyKyM2-PLJE2bRltAHypQ/edit?usp=sharing' },
              { label: 'Maret 2026', description: 'Sheet TPP Maret', url: 'https://docs.google.com/spreadsheets/d/1CNDb5R8qykdSHIGDib_gOg4ro3ahnuVukv1gyN-8bVo/edit?usp=sharing' },
              { label: 'April 2026', description: 'Sheet TPP April', url: 'https://docs.google.com/spreadsheets/d/1th2XVPYRGGVA8AUavx0HyHHS4N8ttLVfCSMYuOJaK8I/edit?usp=sharing' },
              { label: 'Mei 2026', description: 'Sheet TPP Mei', url: 'https://docs.google.com/spreadsheets/d/1mhbK1-njqcTbh6zcO5_TxDp-yyEMf0nVu_V6xbUQFSw/edit?usp=sharing' },
              { label: 'Juni 2026', description: 'Sheet TPP Juni', url: 'https://docs.google.com/spreadsheets/d/1buv_SaCsIXBB5QDbm_j_qyuaf-eraZAVfYpkBDiYY0w/edit?usp=sharing' },
              { label: 'Juli 2026', description: 'Sheet TPP Juli', url: 'https://docs.google.com/spreadsheets/d/1dUiBfhanQZ7Y2QXHF3hdHG9ER8W32we4DKgZ18KzUrQ/edit?usp=sharing' },
              { label: 'Agustus 2026', description: 'Sheet TPP Agustus', url: 'https://docs.google.com/spreadsheets/d/1F0eJwvz_v01U_hmVQrNEi_s0xKfbAbOminx7tCKy-SY/edit?usp=sharing' },
              { label: 'September 2026', description: 'Sheet TPP September', url: 'https://docs.google.com/spreadsheets/d/1AloXKu-5BrKYW8P8xqOBBhw_4WMPDc6h98CVQ_g-LSQ/edit?usp=sharing' },
              { label: 'Oktober 2026', description: 'Sheet TPP Oktober', url: 'https://docs.google.com/spreadsheets/d/1MAeBFiyErDqrZ9ycSkLwt5uMMB2nYJOIR2asPHveeCU/edit?usp=sharing' },
              { label: 'November 2026', description: 'Sheet TPP November', url: '' },
              { label: 'Desember 2026', description: 'Sheet TPP Desember', url: '' },
              { label: 'TPP ke-14 (2026)', description: 'Sheet TPP ke-14', url: 'https://docs.google.com/spreadsheets/d/1JQt0M7m6XESzih0rqzzA0ZZaIgxgFc_SVqAC0r9B6j4/edit?usp=sharing' },
              { label: 'TPP ke-13 (2026)', description: 'Sheet TPP ke-13', url: 'https://docs.google.com/spreadsheets/d/1_1lxypWAQWk6xb0tXDoU9U1LYJi2rw7FtB4Xqukqo6M/edit?usp=sharing' },
              { label: 'Latihan / Simulasi', description: 'Sheet Simulasi TPP', url: 'https://docs.google.com/spreadsheets/d/1KhzY5wPshPGvU1Ey8m5WflRyWQfClejDx70iszJ2fEI/edit?usp=sharing' }
            ]
          },
          '2025': {
            label: 'TPP Tahun 2025',
            description: 'Arsip spreadsheet TPP tahun 2025',
            items: [
              { label: 'Susulan 2025', description: 'Sheet TPP Susulan', url: 'https://docs.google.com/spreadsheets/d/13_caN1dST0AifY9GgH9Y7gHF-6zn5fjVyokdcrRoMsg/edit?usp=sharing' },
              { label: 'Maret 2025', description: 'Sheet TPP Maret', url: 'https://docs.google.com/spreadsheets/d/18XRzK9JfIniUrPYVs3eoRfT1VjNOdcKUXKdG95MVn18/edit?usp=sharing' },
              { label: 'April 2025', description: 'Sheet TPP April', url: 'https://docs.google.com/spreadsheets/d/1qtSOlpuEWlYbi0bMrlC49PhbXjFJD1IN-_ot_Lanmok/edit?usp=sharing' },
              { label: 'Mei 2025', description: 'Sheet TPP Mei', url: 'https://docs.google.com/spreadsheets/d/1ChtM_qPC6GM8tvAtVwin4yCnezFCfkJlWCVy-1P1UVU/edit?usp=sharing' },
              { label: 'Juni 2025', description: 'Sheet TPP Juni', url: 'https://docs.google.com/spreadsheets/d/1KD_g6o-ubtvY0YFJq7d6ikoctSka98fTabH7iMABHFw/edit?usp=sharing' },
              { label: 'Juli 2025', description: 'Sheet TPP Juli', url: 'https://docs.google.com/spreadsheets/d/1cUuqVSSJKJks5tafPktRJ4pliOVTVTsgBC1RDtdTRXY/edit?usp=sharing' },
              { label: 'Agustus 2025', description: 'Sheet TPP Agustus', url: 'https://docs.google.com/spreadsheets/d/1o92G73TxvQpuRCYXREvO3haCXZS1yCisbRKQHgTcD7g/edit?usp=sharing' },
              { label: 'September 2025', description: 'Sheet TPP September', url: 'https://docs.google.com/spreadsheets/d/1wFVvgCkgSOYR6TNhuMyo_gqSzrsSREVnXKf9Mgbu-jE/edit?usp=sharing' },
              { label: 'Oktober 2025', description: 'Sheet TPP Oktober', url: 'https://docs.google.com/spreadsheets/d/1OH3yQ2XG_ec-TWA9DAE_pYAnwqLIujf9BwNa8eb-Kqg/edit?usp=sharing' },
              { label: 'November 2025', description: 'Sheet TPP November', url: 'https://docs.google.com/spreadsheets/d/1k5vWnr9d_BfiSLdb27Eh17MApxa_0awWm7kxD-syN6Q/edit?usp=sharing' },
              { label: 'Desember 2025', description: 'Sheet TPP Desember', url: 'https://docs.google.com/spreadsheets/d/1iuGyd62cXSLHkl8nVaOxSoEDtcE9asvKTxegW4BuXq8/edit?usp=sharing' },
              { label: 'TPP ke-13 (2025)', description: 'Sheet TPP ke-13 2025', url: 'https://docs.google.com/spreadsheets/d/1q0zJLlRorQtbSaJ97oMwCrelmPYRlFXFibhnILzl84M/edit?usp=sharing' }
            ]
          },
          '2027': {
            label: 'TPP Tahun 2027',
            description: 'Slot persiapan tahun 2027',
            items: [
              { label: 'Januari 2027', description: 'Sheet TPP Januari 2027', url: '' },
              { label: 'Februari 2027', description: 'Sheet TPP Februari 2027', url: '' },
              { label: 'Maret 2027', description: 'Sheet TPP Maret 2027', url: '' }
            ]
          }
        }
      },

      /* ----------------------------------------------------------------------
         3. LUNIX GU - KAS KECIL
         ---------------------------------------------------------------------- */
      {
        id: 'kas_kecil',
        label: 'LuniX GU - Kas Kecil',
        tag: 'CORE // STARLIGHT',
        description: 'Pembukuan Kas Kecil Lebih Cepat & Akurat!',
        icon: '💼',
        links: [
          {
            label: 'Portal Kas Kecil (Starlight)',
            description: 'Buka halaman portal Kas Kecil Starlight',
            url: 'https://lunix-213.github.io/lunix-213/pages/lunix/lunix_starlight.html',
            icon: '🌐'
          },
          {
            label: 'Kas Kecil 2026 (Active)',
            description: 'Spreadsheet pembukuan kas kecil 2026',
            url: 'https://docs.google.com/spreadsheets/d/14uVe3KE8eIXKVl8kzqPJmJh62ClrKT8pWvgCtcgmLLY/edit?usp=sharing',
            icon: '📗'
          },
          {
            label: 'Kas Kecil 2025 (Legacy)',
            description: 'Spreadsheet pembukuan kas kecil 2025',
            url: 'https://docs.google.com/spreadsheets/d/1fZfXUds0IP4VHzWaA2bMFBsepn5H916KR32rdx2NV4I/edit?usp=sharing',
            icon: '📘'
          },
          {
            label: 'Kas Kecil 2027 (Beta App)',
            description: 'Web app beta tester generasi berikutnya',
            url: 'https://script.google.com/macros/s/AKfycbxWlmwewdDjt0v4Gd7sgIeOnSkBlzOU38DEUpz-fDUvqAvuGeIzZzgBYInrJ_RhIVfCXA/exec',
            icon: '⚡'
          },
          {
            label: 'Drive Sementara (Shared-213)',
            description: 'Folder Drive berkas bersama Kas Kecil',
            url: 'https://drive.google.com/drive/folders/1OR_3tuFgjpBa9om9wtJxv3dbIkVX6Slq?usp=sharing',
            icon: '🗄️'
          }
        ]
      },

      /* ----------------------------------------------------------------------
         4. LUNIX SPECIAL - TEDY
         ---------------------------------------------------------------------- */
      {
        id: 'special_tedy',
        label: 'LuniX Special - Tedy',
        tag: 'SPECIAL // VER 1.0.0',
        description: 'Khusus Pa Tedy & berkas Pemkot',
        icon: '🔐',
        links: [
          {
            label: 'LuniX Keterangan Gaji',
            description: 'Spreadsheet keterangan gaji pegawai',
            url: 'https://docs.google.com/spreadsheets/d/15kBB4_auxGaef41AX8lKqkLRsvOYZMDMYyIr_WTwHtI/edit?usp=sharing',
            icon: '📄'
          },
          {
            label: 'Archive - Berkas Pemkot',
            description: 'Spreadsheet rekap berkas Pemkot',
            url: 'https://docs.google.com/spreadsheets/d/1wC02eFqmuEEGg4aRFY7H3u1rRsDFQ2pWGAIRVs8GoSU/edit?usp=sharing',
            icon: '🏛️'
          },
          {
            label: 'Form Upload Data Pemkot',
            description: 'Google Form pengiriman data ke Pemkot',
            url: 'https://docs.google.com/forms/d/e/1FAIpQLSetgH833j7UKxxpaEy66S3uaEj86POFUv4uZOHeYxNevjSg3g/viewform?usp=dialog',
            icon: '📝'
          },
          {
            label: 'Sheet Pa Tedy',
            description: 'Workspace khusus Pa Tedy',
            url: 'https://docs.google.com/spreadsheets/d/1PlL-ylySc-zmDNWcese0OYQpLvml4EBLBw7QaUXDaiU/edit?usp=sharing',
            icon: '⭐'
          },
          {
            label: 'LuniX Payroll Pegawai',
            description: 'Spreadsheet payroll pegawai',
            url: 'https://docs.google.com/spreadsheets/d/19J9IzgdT6_zn8gCi3zG3CONGtTYgfQqV8v9mWVQzokk/edit?usp=sharing',
            icon: '💰'
          },
          {
            label: 'LuniX Archive - Baru',
            description: 'Web App arsip terbaru (Apps Script)',
            url: 'https://script.google.com/macros/s/AKfycbwctE0LY7vKjvnymktuuAtmPXDaKAFNTcoOA1OoP6QdE-EjjdTAZDS2LT_wBz-l409X/exec',
            icon: '⚡'
          }
        ]
      },

      /* ----------------------------------------------------------------------
         5. LUNIX PLAYGROUND
         ---------------------------------------------------------------------- */
      {
        id: 'playground',
        label: 'LuniX Playground',
        tag: 'LABS // VER 1.4',
        description: 'Beta Tester & eksperimen apps',
        icon: '🧪',
        links: [
          {
            label: 'PAY Jasa Pelayanan',
            description: 'Web App perhitungan Jasa Pelayanan',
            url: 'https://script.google.com/macros/s/AKfycbz_lHFK7GHzTsAsDH95FqPq73WI_dapDqjf-CnynxrAtovp9rcfOg4oSPVhfPVY_xJVSw/exec',
            icon: '⚡'
          },
          {
            label: 'Anime Watchlist',
            description: 'Database daftar tontonan anime',
            url: 'https://script.google.com/macros/s/AKfycbyZovUYe8zXlomw8DmYgzcbeINEVreKdSS-pPbhrzGBWd_kq_1_BhYCd9uWmSGBh0P_hA/exec',
            icon: '🎬'
          },
          {
            label: 'Story Database',
            description: 'Koleksi database cerita & ide',
            url: 'https://script.google.com/macros/s/AKfycbxWgott_x36Vwd5wyFN2UDq9Zuu9AZNp-ZHRlKeXzMwUpM-MQfwznUGoRQf4t3YL8L6/exec',
            icon: '📚'
          },
          {
            label: 'POS Mini Warung',
            description: 'Eksperimen aplikasi kasir mini',
            url: 'https://script.google.com/macros/s/AKfycbzyrnDEdi3jix7a0vtrhf1S1KE1OZbb35fBxVhf2ZcCeilvJauyp_dCOtD5R1YvRfSf/exec',
            icon: '🛒'
          },
          {
            label: 'Pemberkasan Obat RSUD',
            description: 'Spreadsheet pencatatan obat RSUD',
            url: 'https://docs.google.com/spreadsheets/d/10X-8P9bSn6G7gTuv_jpLshCA56-ZR1C3mDx_kxGyGEs/edit?usp=sharing',
            icon: '💊'
          },
          {
            label: 'Personal Finance',
            description: 'Aplikasi pencatatan keuangan pribadi',
            url: 'https://script.google.com/macros/s/AKfycbzhqEqQlR8mZpWO4-OYzdfq4DzJnCaHtj93qlXoQVohoV3w7sYAFiDF6jvNNu0GoKAj/exec',
            icon: '🪙'
          }
        ]
      },

      /* ----------------------------------------------------------------------
         6. LUNIX ARCHIVE
         ---------------------------------------------------------------------- */
      {
        id: 'archive',
        label: 'LuniX Archive',
        tag: 'VAULT // VER 5.2.0',
        description: 'Arsip lama & regulasi kepegawaian',
        icon: '📁',
        links: [
          {
            label: 'ARSIP Gaji PNS & PPPK',
            description: 'Google Drive arsip gaji PNS & PPPK',
            url: 'https://drive.google.com/drive/u/2/folders/1GnPVWz5yRD_HQY5trNEX54BtNzjA-0Yg',
            icon: '🗄️'
          },
          {
            label: 'ARSIP Gaji PTT',
            description: 'Google Drive arsip gaji PTT',
            url: 'https://drive.google.com/drive/u/2/folders/1aJmJwAVpSx3dAHXVifh7JxcBE43O5dxI',
            icon: '🗄️'
          },
          {
            label: 'Arsip JP Reguler',
            description: 'Google Drive arsip Jasa Pelayanan reguler',
            url: 'https://drive.google.com/drive/folders/1U2dFhI7jKTlL_U1NbuH81NchHrCqvali?usp=sharing',
            icon: '🗄️'
          },
          {
            label: 'Arsip Keterangan Gaji',
            description: 'Google Drive arsip surat keterangan gaji',
            url: 'https://drive.google.com/drive/u/2/folders/1lWa3f4s37asf30z4g1Qb5bX03_Okh9yr',
            icon: '🗄️'
          },
          {
            label: 'Aturan-Aturan',
            description: 'Kumpulan regulasi dan dasar hukum',
            url: 'https://drive.google.com/drive/folders/1prX5I0jlujpu_qcj8OLRZ9x79LYanrbU?usp=sharing',
            icon: '⚖️'
          },
          {
            label: 'Arsip TPP ASN',
            description: 'Google Drive arsip berkas TPP ASN',
            url: 'https://drive.google.com/drive/folders/12giw6buz_UnXOI7iMeRAVgG42DZUOFnD?usp=drive_link',
            icon: '🗄️'
          }
        ]
      },

      /* ----------------------------------------------------------------------
         7. LUNIX GAME
         ---------------------------------------------------------------------- */
      {
        id: 'game',
        label: 'LuniX Game',
        tag: 'GAMING // VER 5.2.0',
        description: 'Eksperimen mini game interaktif',
        icon: '🎮',
        links: [
          {
            label: 'LuniX Memory Card Games',
            description: 'Mini game flip card bertema LuniX',
            url: 'https://lunix-213.github.io/lunix-213/pages/game/lunix_flip_card.html',
            icon: '🃏'
          },
          {
            label: 'LUNIX Gacha Simulator',
            description: 'Simulator gacha eksperimental',
            url: 'https://script.google.com/macros/s/AKfycbx4UlBBwaRie0St0EM64uz2OqudFa_wounzRLCAbHNCCWPMu3Tl4O4qhXEpY6nmspzzng/exec',
            icon: '🎲'
          }
        ]
      },

      /* ----------------------------------------------------------------------
         8. LUNIX COLLABSPACE
         ---------------------------------------------------------------------- */
      {
        id: 'collabspace',
        label: 'LuniX CollabSpace',
        tag: 'COLLAB // VER 5.2.0',
        description: 'Ruang kolaborasi & HRIS',
        icon: '🤝',
        links: [
          {
            label: 'LUNIX - Koperasi Sehat',
            description: 'Portal administrasi Koperasi Sehat',
            url: 'https://lunix-213.github.io/lunix-213/pages/lunix/lunix_koperasisehat.html',
            icon: '🏥'
          },
          {
            label: 'LUNIX - Update Pegawai',
            description: 'Web App pembaruan data pegawai',
            url: 'https://script.google.com/macros/s/AKfycbyBSPvY3-5BPGdugmcoBpKARqDJ0-J6IR-ksEG9L_XZnDt-dX8_LdaN-wS1jUPQoVZC/exec',
            icon: '👥'
          },
          {
            label: 'Kepegawaian Shared',
            description: 'Folder Drive kolaborasi kepegawaian',
            url: 'https://drive.google.com/drive/folders/17CbvUOYrQkMkEkGP4yjOeAm1P7YqFDLb?usp=sharing',
            icon: '🗄️'
          },
          {
            label: 'LuniX - HRIS',
            description: 'Sistem informasi kepegawaian (HRIS)',
            url: 'https://script.google.com/macros/s/AKfycbwohwb10eSahwdNiaK_DdToKefa0NlV4gvU1a_igtaqo2HDGzYaAN3oQIEglTwhrlrwOg/exec',
            icon: '📋'
          },
          {
            label: 'LuniX - Kelola Faktur',
            description: 'Spreadsheet pengelolaan faktur',
            url: 'https://docs.google.com/spreadsheets/d/1RgPFJE1RsQ5YYaQc6gqwcTjSV7ErzTN--MiKvP3ndJM/edit?usp=sharing',
            icon: '🧾'
          },
          {
            label: 'LuniX Analisa Data',
            description: 'Portal alat bantu analisa data',
            url: 'https://lunix-213.github.io/lunix-213/pages/lunix/lunix_analisa_data.html',
            icon: '📈'
          },
          {
            label: 'LuniX - DESK',
            description: 'Portal layanan LuniX DESK',
            url: 'https://lunix-213.github.io/lunix-213/pages/lunix/lunix_desk.html',
            icon: '🖥️'
          }
        ]
      }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
