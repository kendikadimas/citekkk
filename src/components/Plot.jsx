import React from 'react'
import Card from './Card'
import Form from '../assets/form.png'
import Location from '../assets/location.png'
import Trash from '../assets/trash.png'
import report from '../assets/report.png'

const Plot = () => {
  return (
    <div className='flex space-between w-3/4 m-auto'>
        <Card
        image={Form}
        title="Mengisi Form"
        description="Pengguna mengisi form yang kami sediakan dengan detail."
        />
        <Card
        image={Location}
        title="Konfirmasi Lokasi"
        description="Pengguna menandai maps yang tersedia dan akan mendapatkan pesan SMS/WA."
        />
        <Card
        image={Trash}
        title="Penangkutan Sampah"
        description="Proses tracking pengangkutan sampah dari lokasi pengguna hingga tempat pembuangan."
        />
        <Card
        image={report}
        title="Laporan Selesai"
        description="Pengguna akan diberitahu bahwa proses pengangkutan telah selesai dan dapat melihat laporan."
        />
    </div>
  )
}

export default Plot