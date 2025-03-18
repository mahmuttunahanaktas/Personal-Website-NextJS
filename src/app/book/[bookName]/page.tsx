import { FC } from 'react'
import { notFound } from 'next/navigation'

interface BookDetailPageProps {
  params: { bookName: string }
}

const BookDetailPage: FC<BookDetailPageProps> = ({ params }) => {
  const { bookName } = params

  // Eğer bookName yoksa, sayfa bulunamadı hatası döndür
  if (!bookName) {
    notFound()
  }

  return (
    <div>
      <h1>{bookName}</h1>
      <p>Bu kitap hakkında detaylar burada yer alacak: {bookName}.</p>
    </div>
  )
}

export default BookDetailPage
